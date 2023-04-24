import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { QuestionRoutingModule } from './question-routing.module';
import { ViewQuestionComponent } from './view-question/view-question.component';



@NgModule({
  declarations: [
    ViewQuestionComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    QuestionRoutingModule
  ],
  exports:[
    ViewQuestionComponent
  ]
})
export class QuestionModule { }
