import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TestModel } from 'src/app/domain/model/i-test.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TestApiService {
  private apiServeUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'POST,GET,PUT,DELETE',
      'Access-Control-Allow-Origin': '*',
    }),
  };

  public getAll(): Observable<TestModel[]> {
    return this.http.get<TestModel[]>(this.apiServeUrl + '/test/find-all-test');
  }

  public getById(id: string): Observable<TestModel> {
    return this.http.get<TestModel>(this.apiServeUrl + '/test/get/' + id);
  }

  public update(id: string, test: TestModel): Observable<TestModel> {
    return this.http.put<TestModel>(
      this.apiServeUrl + '/test/update-test/' + id,
      test
    );
  }

  public create(test: TestModel): Observable<TestModel> {
    return this.http.post<TestModel>(
      this.apiServeUrl + '/test/create-Test',
      test
    );
  }

  public delete(id: string): Observable<boolean> {
    return this.http.delete<boolean>(
      this.apiServeUrl + '/test/delete-Test/' + id
    );
  }

  public generateTest(
    userMail: string
  ): Observable<{ success: boolean; message: string }> {
    return this.http.post<{ success: boolean; message: string }>(
      this.apiServeUrl + '/test/generate/' + userMail,
      {}
    );
  }

  public answerTest(
    token: string,
    questionSentence: string,
    answer: string[]
  ): Observable<TestModel> {
    return this.http.post<TestModel>(this.apiServeUrl + '/test/answer', {
      token,
      questionSentence,
      answer,
    });
  }

  public startTest(token: string): Observable<string> {
    return this.http.post<string>(
      this.apiServeUrl + '/test/start/' + token,
      {}
    );
  }

  public finishTest(token: string): Observable<string> {
    return this.http.post<string>(
      this.apiServeUrl + '/test/finish/' + token,
      {}
    );
  }
}
