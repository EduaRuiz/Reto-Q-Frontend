import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FactoryApiService } from 'src/app/infraestructure/global-factory-api';
import { TestModel } from '../../domain/model';

@Injectable({
  providedIn: 'root',
})
export class AnswerTestUseCase {
  constructor(private readonly factoryApiService: FactoryApiService) {}
  answerTest(
    token: string,
    questionSentence: string,
    answer: string[]
  ): Observable<TestModel> {
    return this.factoryApiService
      .createApiTest()
      .answerTest(token, questionSentence, answer);
  }
}
