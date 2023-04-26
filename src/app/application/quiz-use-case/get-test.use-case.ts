import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FactoryApiService } from 'src/app/infraestructure/global-factory-api';
import { TestModel } from '../../domain/model';

@Injectable({
  providedIn: 'root',
})
export class GetTestUseCase {
  constructor(private readonly factoryApiService: FactoryApiService) {}

  getTest(token: string): Observable<TestModel> {
    return this.factoryApiService.createApiTest().getById(token);
  }
}
