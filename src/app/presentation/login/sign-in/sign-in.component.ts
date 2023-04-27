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

  constructor(
    private readonly auth: Auth,
    private readonly signInUseCase: SignInUseCase,
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
    this.notificationService.showMessage(
      'Token sent!',
      'Token sent, check your mail!',
      'success'
    );
    const token = await user.user.getIdToken();
    localStorage.setItem('token', token);
    this.switchUseCase.switchLogIn = false;
    this.switchUseCase.switchPresentation = true;
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
            this.router.navigate(['quiz/app-quiz']);
          },
          error: (response: HttpErrorResponse) =>
            this.handlerError(response.error.message),
        });
  }
}
