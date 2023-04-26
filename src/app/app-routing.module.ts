import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './presentation/shared/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'app-home', pathMatch: 'full' },
  { path: 'app-home', component: HomeComponent },
  {
    path: 'question',
    loadChildren: () =>
      import('./presentation/question/question.module').then(
        (m) => m.QuestionModule
      ),
  },
  {
    path: 'quiz',
    loadChildren: () =>
      import('./presentation/quiz/quiz.module').then((m) => m.QuizModule),
  },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
