import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { QuizComponent } from './quiz.component';
import { HomeComponent } from '../shared/home/home.component';


const routes : Routes = [
  {
    path: '',
    children: [
      {path: 'app-quiz', component : QuizComponent},
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
export class QuizRoutingModule { }
