import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { QuestionModel } from "src/app/domain/model/i-question.model";
import { FactoryApiService } from "src/app/infraestructure/global-factory-api/factory-api.service";

@Injectable({
    providedIn: 'root'
  })
  export class CreateQuestionUseCase {
  
    constructor(private readonly factoryApiService: FactoryApiService) {
  
    }
  
    createQuestion(question : QuestionModel) :Observable<QuestionModel> {
      return this.factoryApiService.createApiQuestion().create(question);
    }
  
  
  }