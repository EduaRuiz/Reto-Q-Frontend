import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionModel } from 'src/app/domain/model/i-question.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class QuestionApiService {
  private apiServeUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'POST,GET,PUT,DELETE',
      'Access-Control-Allow-Origin': '*',
    }),
  };

  public getAll(): Observable<QuestionModel[]> {
    return this.http.get<QuestionModel[]>(
      this.apiServeUrl + '/Question/find-all-Question'
    );
  }

  public getById(id: string): Observable<QuestionModel> {
    return this.http.get<QuestionModel>(
      this.apiServeUrl + '/Question/find-by-id/' + id
    );
  }

  public update(
    id: string,
    question: QuestionModel
  ): Observable<QuestionModel> {
    return this.http.put<QuestionModel>(
      this.apiServeUrl + '/Question/update-Question/' + id,
      question
    );
  }

  public create(question: QuestionModel): Observable<QuestionModel> {
    return this.http.post<QuestionModel>(
      this.apiServeUrl + '/Question/create-Question',
      question
    );
  }

  public delete(id: string): Observable<boolean> {
    return this.http.delete<boolean>(
      this.apiServeUrl + '/Question/delete-Question/' + id
    );
  }
}
