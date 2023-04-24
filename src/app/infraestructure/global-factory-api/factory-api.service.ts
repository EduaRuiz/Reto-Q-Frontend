import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { UserGateway } from 'src/app/domain/gateway/user.gateway';
import { UserApiService } from '../apis/user-api.service';
import { QuestionGateway } from 'src/app/domain/gateway/question.gateway';
import { QuestionApiService } from '../apis/question-api.service';
import { TestGateway } from 'src/app/domain/gateway/test.gateway';
import { TestApiService } from '../apis/test-api.service';

@Injectable({
  providedIn: 'root'
})
export class FactoryApiService {

  constructor(private http: HttpClient, private auth : Auth) {
  }

  createApiUser(): UserGateway {
    return new UserApiService(this.http);
  }

  createApiQuestion(): QuestionGateway {
    return new QuestionApiService(this.http);
  }

  createApiTest(): TestGateway {
    return new TestApiService(this.http);
  }


}
