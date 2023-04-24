import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from 'src/app/domain/model/i-user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  private apiServeUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'POST,GET,PUT,DELETE',
      'Access-Control-Allow-Origin': '*'
    })
  }


  public getAll(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(this.apiServeUrl + "/user/find-all-user");
  }

  public getById(id: string): Observable<UserModel> {
    return this.http.get<UserModel>(this.apiServeUrl + "/user/find-by-id/" + id)
  }

  public update(id: string, user: UserModel): Observable<UserModel> {
    return this.http.put<UserModel>(this.apiServeUrl + "/user/update-user/" + id, user)
  }

  public create(user: UserModel): Observable<UserModel> {
    return this.http.post<UserModel>(this.apiServeUrl + "/user/create-user", user);
  }

  public delete(id : string): Observable<boolean> {
    return this.http.delete<boolean> (this.apiServeUrl+"/user/delete-user/"+id)
  }

}
