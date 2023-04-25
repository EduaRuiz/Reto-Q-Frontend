import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizComponent } from './quiz.component';
import { HttpClientModule } from '@angular/common/http';
import { QuizRoutingModule } from './quiz-routing.module';
import { QuestionModule } from '../question/question.module';



@NgModule({
  declarations: [
    QuizComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    QuizRoutingModule,
    QuestionModule
  ],
  exports: [
    QuizComponent
  ]
})
export class QuizModule { }
