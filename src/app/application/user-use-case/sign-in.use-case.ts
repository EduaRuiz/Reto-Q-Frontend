import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FactoryApiService } from 'src/app/infraestructure/global-factory-api';

@Injectable({
  providedIn: 'root',
})
export class SignInUseCase {
  constructor(private readonly factoryApiService: FactoryApiService) {}

  generateTest(
    userMail: string
  ): Observable<{ success: boolean; message: string }> {
    return this.factoryApiService.createApiTest().generateTest(userMail);
  }
}
