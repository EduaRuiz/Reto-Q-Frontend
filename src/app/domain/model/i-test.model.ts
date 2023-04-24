import { QuestionModel } from "./i-question.model";


export interface TestModel  {

    _id?: string;
    user_id: string;
    token: string;
    level: string;
    created_at: Date;
    started_at?: Date;
    questions: {
      question: QuestionModel;
      points: number;
      answered: boolean;
    }[];
    
  }