import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../shared/home/home.component';
import { MultipleChoiceComponent } from './multiple-choice/multiple-choice.component';
import { SingleChoiceComponent } from './single-choice/single-choice.component';
import { TrueOrFalseComponent } from './true-or-false/true-or-false.component';

const routes : Routes = [
  {
    path: '',
    children: [
      {path: 'app-multiple-choice', component : MultipleChoiceComponent},
      {path: 'app-single-choice', component : SingleChoiceComponent},
      {path: 'app-true-or-false', component : TrueOrFalseComponent},
      {path: '**', component : HomeComponent}
    ]
    
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class QuestionRoutingModule { }
