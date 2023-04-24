import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ViewQuestionComponent } from './view-question/view-question.component';
import { HomeComponent } from '../shared/home/home.component';

const routes : Routes = [
  {
    path: '',
    children: [
      {path: 'app-view-question', component : ViewQuestionComponent},
      {path: '**', component : HomeComponent}
    ]
    
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class QuestionRoutingModule { }
