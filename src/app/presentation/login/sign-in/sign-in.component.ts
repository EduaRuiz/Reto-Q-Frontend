import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { SwitchUseCase } from 'src/app/application/global-use-case/switch.use-case';
import { SignInUseCase } from 'src/app/application/user-use-case/sign-in.use-case';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {


  imageUrls = [
    'https://i.pinimg.com/564x/5a/8d/83/5a8d83b0efff854caaee04b56c5f8bcc.jpg',
  ];

  constructor() { }

  ngOnInit(): void {
  }


}
