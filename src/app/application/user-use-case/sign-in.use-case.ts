import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { FactoryApiService } from 'src/app/infraestructure/global-factory-api/factory-api.service';



@Injectable({
  providedIn: 'root'
})
export class SignInUseCase {


  constructor(private readonly factoryApiService: FactoryApiService) {
  }

  generateTest(userMail : string) :Observable<string> {
    return this.factoryApiService.createApiTest().generateTest(userMail);
  }

}