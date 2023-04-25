import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { QuizService } from '../shared/service/quiz.service';
import { TestModel } from 'src/app/domain/model/i-test.model';
import { AnswerTestUseCase } from 'src/app/application/quiz-use-case/anwer-test.use-case';
import { FinishTestUseCase } from 'src/app/application/quiz-use-case/finish-test.use-case';
import { QuestionModel } from 'src/app/domain/model/i-question.model';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { StartTestUseCase } from 'src/app/application/quiz-use-case/start-test.use-case';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  @Input() quiz!: TestModel;
  token!: string;
  answer!: string[];
  questionSentence!: string;
  currentQuestion!: QuestionModel;
  
  constructor(
    private readonly quizService: QuizService,
    private readonly answerTestUseCase: AnswerTestUseCase,
    private readonly finishTestUseCase: FinishTestUseCase,
    private readonly startTestUseCase: StartTestUseCase,
    private readonly router: Router,

  ) { }

  ngOnInit(): void {
    
    this.quizService.getData().subscribe((data: {token: string, quiz: TestModel}) => {
      this.quiz= data.quiz
      this.token = data.token
      const question = this.quiz.questions?.find(
        (question: {question: QuestionModel, points: number, answered: boolean}) => 
        question.answered === false
      )
      question && (this.currentQuestion = question.question) 
      question === undefined && this.finishTestUseCase.finishTest(this.token).subscribe({
        next: (value)=> console.log(value),
        error: (response: HttpErrorResponse)=> console.log(response.error.message)
      })
      this.quiz?.started_at === undefined &&  this.startTestUseCase.startTest(this.token).subscribe()
      data.token === '' && this.router.navigate(['app-home'])
    });
  }

  onSendAnswer(){
    console.log('fsahdjfhajshdf')
    this.answerTestUseCase.answerTest(this.token, this.questionSentence, this.answer).subscribe({
      next: (value: TestModel) => {
        this.quiz = value;
        this.quizService.setData(
          this.token,
          this.quiz
        );
        this.ngOnInit()
      },
      error: (response: HttpErrorResponse)=> console.log(response.error.message)
    })
  }

  onOptionsSelected(optionsSelected: string[]) {
    this.answer = optionsSelected;
    this.questionSentence = this.currentQuestion.sentence;
  }
}
