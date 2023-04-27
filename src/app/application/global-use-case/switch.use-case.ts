import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SwitchUseCase {

  constructor() { }

  public level = "";

  //*********************SWITCH LEVEL TO STRING*************************

  choiceViewLevel(level : string) {
    switch (level) {
      case "1":
        this.level = "Beginner";
        break;

      case "2":
        this.level = "Intermediate";
        break;

      case "3":
        this.level = "Advanced";
        break;
    }
    return this.level
  }

  //********************CONTROL DE COMPONENTES HOME-LOGIN *********************

  public switchLogIn: boolean = true;
  public switchPresentation: boolean = false;
}
