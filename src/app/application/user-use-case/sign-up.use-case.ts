import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from 'src/app/domain/model';
import { FactoryApiService } from 'src/app/infraestructure/global-factory-api';

@Injectable({
  providedIn: 'root',
})
export class SignUpUseCase {
  constructor(private readonly factoryApiService: FactoryApiService) {}

  signUp(userMail: string, userName: string): Observable<UserModel> {
    return this.factoryApiService.createApiUser().signUp(userMail, userName);
  }
}
