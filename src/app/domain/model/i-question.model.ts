export interface QuestionModel {
  _id?: string;
  topic: string;
  level: string;
  type: string;
  sentence: string;
  options: string[];
  answer: string[];
}
