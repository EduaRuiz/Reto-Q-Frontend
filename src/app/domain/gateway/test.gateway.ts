import { Observable } from 'rxjs';
import { TestModel } from '../model/i-test.model';

export abstract class TestGateway {
  abstract getById(id: string): Observable<TestModel>;
  abstract getAll(): Observable<TestModel[]>;
  abstract create(product: TestModel): Observable<TestModel>;
  abstract delete(id: string): Observable<boolean>;
  abstract update(id: string, product: TestModel): Observable<TestModel>;
  abstract generateTest(userMail: string): Observable<string>;
  abstract answerTest(
    token: string,
    questionSentence: string,
    answer: string[]
  ): Observable<TestModel>;
  abstract startTest(token: string): Observable<string>;
  abstract finishTest(token: string): Observable<string>;
}
