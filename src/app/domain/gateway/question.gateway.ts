import { Observable } from "rxjs";
import { QuestionModel } from "../model/i-question.model";

export abstract class QuestionGateway {

    abstract getById(id: string) : Observable<QuestionModel>;
    abstract getAll() : Observable<QuestionModel[]>;
    abstract create(product : QuestionModel) : Observable<QuestionModel>;
    abstract delete(id: string) : Observable<boolean>;
    abstract update(id: string, product : QuestionModel) : Observable<QuestionModel>;

}