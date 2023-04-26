import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FactoryApiService } from 'src/app/infraestructure/global-factory-api';

@Injectable({
  providedIn: 'root',
})
export class FinishTestUseCase {
  constructor(private readonly factoryApiService: FactoryApiService) {}
  finishTest(token: string): Observable<string> {
    return this.factoryApiService.createApiTest().finishTest(token);
  }
}
