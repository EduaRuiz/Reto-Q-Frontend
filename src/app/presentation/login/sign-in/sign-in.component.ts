import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup } from '@angular/fire/auth';
import { SwitchUseCase } from 'src/app/application/global-use-case/switch.use-case';
import { SignInUseCase } from 'src/app/application/user-use-case/sign-in.use-case';
import { NotificationService } from '../../shared/service/notification.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {


  imageUrls = [
    'https://i.pinimg.com/564x/5a/8d/83/5a8d83b0efff854caaee04b56c5f8bcc.jpg',
  ];

  constructor( private auth: Auth,
    private signInUseCase: SignInUseCase,
    public switchUseCase : SwitchUseCase,
    private readonly notificationService: NotificationService) { }

  ngOnInit(): void {
  }

  loginWithGoogle() {
    return signInWithPopup(this.auth, new GoogleAuthProvider);
  }

  handlerSuccess(){
    this.notificationService.showMessage(
      "Token sent!",
      "Token sent, check your mail!",
      "success"
    )
  }

  handlerError(error : string){
    this.notificationService.showMessage(
      "Something went wrong!",
      error,
      "error"
    )
  }
  
  async onclickLogin() {
    const user = await this.loginWithGoogle();
    
    this.signInUseCase.generateTest(user.user.email??"").subscribe({
      next: (data : any) => {if(data.success){this.handlerSuccess()} else {this.handlerError(data.message)}},
      error: (message : HttpErrorResponse) => {this.handlerError(message.error.message)},
      
    });
  
    const token = await user.user.getIdToken();
    localStorage.setItem('token', token);
    console.log(token);
    this.switchUseCase.switchLogIn = false;
    this.switchUseCase.switchPresentation = true; 

  }

}
