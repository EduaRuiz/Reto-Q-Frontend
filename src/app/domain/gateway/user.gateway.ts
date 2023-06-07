import { Observable } from 'rxjs';
import { UserModel } from '../model/i-user.model';

export abstract class UserGateway {
  abstract getById(id: string): Observable<UserModel>;
  abstract getAll(): Observable<UserModel[]>;
  abstract create(product: UserModel): Observable<UserModel>;
  abstract delete(id: string): Observable<boolean>;
  abstract update(id: string, product: UserModel): Observable<UserModel>;
  abstract signUp(email: string, name: string): Observable<UserModel>;
}
