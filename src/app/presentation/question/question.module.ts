import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { QuestionRoutingModule } from './question-routing.module';
import { ViewQuestionComponent } from './view-question/view-question.component';
import { MultipleChoiceComponent } from './multiple-choice/multiple-choice.component';
import { SingleChoiceComponent } from './single-choice/single-choice.component';
import { TrueOrFalseComponent } from './true-or-false/true-or-false.component';



@NgModule({
  declarations: [
    ViewQuestionComponent,
    MultipleChoiceComponent,
    SingleChoiceComponent,
    TrueOrFalseComponent
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
