import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { QuestionRoutingModule } from './question-routing.module';
import { MultipleChoiceComponent } from './multiple-choice/multiple-choice.component';
import { SingleChoiceComponent } from './single-choice/single-choice.component';
import { TrueOrFalseComponent } from './true-or-false/true-or-false.component';



@NgModule({
  declarations: [
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
    MultipleChoiceComponent,
    SingleChoiceComponent,
    TrueOrFalseComponent
  ]
})
export class QuestionModule { }
