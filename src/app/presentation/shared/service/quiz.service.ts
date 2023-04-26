import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {TestModel} from "src/app/domain/model/i-test.model"


@Injectable({
  providedIn: 'root',
})
export class QuizService {
  private data = new BehaviorSubject<{
    token: string,
    quiz: TestModel,
  }>({
    token: '',
    quiz: {} as any,
  });

  constructor() {}

  public setData(token: string, quiz: TestModel): void {
    this.data.next({ token, quiz });
  }

  public getData(): Observable<{
    token: string,
    quiz: TestModel,
  }> {
    return this.data.asObservable();
  }
}