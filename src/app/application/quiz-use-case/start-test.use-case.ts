import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FactoryApiService } from 'src/app/infraestructure/global-factory-api/factory-api.service';

@Injectable({
  providedIn: 'root'
})
export class StartTestUseCase {
  constructor(private readonly factoryApiService: FactoryApiService) { }
  startTest(token : string) :Observable<string> {
    return this.factoryApiService.createApiTest().startTest(token);
  }
}