import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TestModel } from 'src/app/domain/model/i-test.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TestApiService {
  
  private apiServeUrl = environment.apiBaseUrl; 

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers : new HttpHeaders({
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'POST,GET,PUT,DELETE',
      'Access-Control-Allow-Origin': '*'
    })
  }

  public getAll(): Observable<TestModel[]> {
    return this.http.get<TestModel[]>(this.apiServeUrl + "/test/find-all-test");
  }

  public getById(id: string): Observable<TestModel> {
    return this.http.get<TestModel>(this.apiServeUrl + "/test/find-by-id/" + id)
  }

  public update(id: string, test: TestModel): Observable<TestModel> {
    return this.http.put<TestModel>(this.apiServeUrl + "/test/update-test/" + id, test)
  }

  public create(test: TestModel): Observable<TestModel> {
    return this.http.post<TestModel>(this.apiServeUrl + "/test/create-test", test);
  }

  public delete(id : string): Observable<boolean> {
    return this.http.delete<boolean> (this.apiServeUrl+"/test/delete-test/"+id)
  }

}
