import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup } from '@angular/fire/auth';
import { SwitchUseCase } from 'src/app/application/global-use-case/switch.use-case';
import { SignInUseCase } from 'src/app/application/user-use-case/sign-in.use-case';
import { GetTestUseCase } from 'src/app/application/quiz-use-case/get-test.use-case';
import { NotificationService } from '../../shared/service/notification.service';
import { TestModel } from 'src/app/domain/model/i-test.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QuizService } from '../../shared/service/quiz.service';
import Swal from 'sweetalert2';
import { SignUpUseCase } from 'src/app/application/user-use-case/sign-up.use-case';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  imageUrls = [
    'https://i.pinimg.com/564x/5a/8d/83/5a8d83b0efff854caaee04b56c5f8bcc.jpg',
  ];
  private quiz!: TestModel;
  private token!: string;
  tokenForm!: FormGroup;
  private userEmail!: string;
  isResendDisabled: boolean = true;
  timeLeft: number = 18;
  resendButtonText: string = 'Resend in ' + this.timeLeft + '';
  isVisible = true;

  constructor(
    private readonly auth: Auth,
    private readonly signInUseCase: SignInUseCase,
    private readonly signUpUseCase: SignUpUseCase,
    public readonly switchUseCase: SwitchUseCase,
    private readonly notificationService: NotificationService,
    private readonly getTestUseCase: GetTestUseCase,
    private readonly formBuilder: FormBuilder,
    private readonly router: Router,
    private readonly quizService: QuizService
  ) {}

  ngOnInit(): void {
    this.tokenForm = this.formBuilder.group({
      token: [
        '',
        [Validators.required, Validators.minLength(9), Validators.maxLength(9)],
      ],
    });
  }

  loginWithGoogle() {
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }

  async handlerSuccess(user: any) {
    console.log(user);
    this.notificationService.showMessage(
      'Token sent!',
      'Token sent, check your mail!',
      'success'
    );
    const token = await user.user.getIdToken();
    localStorage.setItem('token', token);
    this.switchUseCase.switchLogIn = false;
    this.switchUseCase.switchPresentation = true;
    this.userEmail = user.user.email ?? '';
  }

  handlerError(error: string) {
    this.notificationService.showMessage(
      'Something went wrong!',
      error,
      'error'
    );
  }

  async onclickLogin() {
    const user = await this.loginWithGoogle();
    this.signInUseCase.generateTest(user.user.email ?? '').subscribe({
      next: (data: { success: boolean; message: string }) => {
        if (data.success) {
          this.handlerSuccess(user);
          this.setTime();
        } else {
          this.handlerError(data.message);
        }
      },
      error: (message: HttpErrorResponse) => {
        this.handlerError(message.error.message);
      },
    });
  }

  onSendCode() {
    this.tokenForm.valid &&
      this.getTestUseCase
        .getTest(this.tokenForm.get('token')?.value)
        .subscribe({
          next: (value: TestModel) => {
            this.token = this.tokenForm.get('token')?.value;
            this.quiz = value;
            this.quizService.setData(this.token, this.quiz);
            this.router.navigate(['quiz']);
          },
          error: (response: HttpErrorResponse) =>
            this.handlerError(response.error.message),
        });
  }

  onSendCodeAgain() {
    this.isResendDisabled = true;
    this.timeLeft = 18;
    this.resendButtonText = 'Resend in ' + this.timeLeft + '';
    this.signInUseCase.generateTest(this.userEmail).subscribe({
      next: (data: { success: boolean; message: string }) => {
        if (data.success) {
          this.notificationService.showMessage(
            'Token sent!',
            'Token sent, check your mail!',
            'success'
          );
        } else {
          this.handlerError(data.message);
        }
      },
      error: (message: HttpErrorResponse) => {
        this.handlerError(message.error.message);
      },
    });
  }
  setTime() {
    setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
        this.resendButtonText = 'Resend in ' + this.timeLeft + '';
      } else {
        this.isResendDisabled = false;
        this.resendButtonText = 'Send code again';
      }
    }, 1000);
  }

  async setEmail() {
    const { value: formValues } = await Swal.fire({
      title:
        'Please enter your email and name to receive the token to take the test',
      html:
        '<input type="email" id="swal-input1" class="swal2-input" required>' +
        '<input type="text" min="5" max="50" id="swal-input2" class="swal2-input" required>',
      focusConfirm: false,
      preConfirm: () => {
        const emailInput = document.getElementById(
          'swal-input1'
        ) as HTMLInputElement;
        const textInput = document.getElementById(
          'swal-input2'
        ) as HTMLInputElement;

        const email = emailInput.value;
        const text = textInput.value;

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          Swal.showValidationMessage('Invalid email address');
          return false;
        }

        if (text.length < 5 || text.length > 50) {
          Swal.showValidationMessage(
            'Text must be between 5 and 50 characters'
          );
          return false;
        }

        return [email, text];
      },
    });

    let email = '';
    let name = '';

    let user: {
      user: { getIdToken: () => Promise<string>; email: string };
    };

    user = {
      user: {
        email,
        getIdToken: () => Promise.resolve('token'),
      },
    };

    if (formValues) {
      const [emailValue, textValue] = formValues;
      email = emailValue;
      name = textValue;
    }
    this.signUpUseCase.signUp(email, name).subscribe({
      next: (data) => {
        console.log(data);
        this.signInUseCase.generateTest(email).subscribe({
          next: (data) => {
            if (data.success) {
              this.handlerSuccess(user);
            } else {
              this.handlerError(data.message);
            }
          },
        });
      },
      error: () => {
        this.signInUseCase.generateTest(email).subscribe({
          next: (data) => {
            if (data.success) {
              this.handlerSuccess(user);
            } else {
              this.handlerError(data.message);
            }
          },
        });
      },
    });
  }

  haveToken() {
    this.switchUseCase.switchLogIn = false;
    this.switchUseCase.switchPresentation = true;
    this.isVisible = false;
  }

  goBack() {
    this.switchUseCase.switchLogIn = true;
    this.switchUseCase.switchPresentation = false;
    this.isVisible = true;
  }
}
