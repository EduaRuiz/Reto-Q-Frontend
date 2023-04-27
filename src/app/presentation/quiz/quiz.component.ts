import { Component, OnInit, Input } from '@angular/core';
import { QuizService } from '../shared/service';
import {
  AnswerTestUseCase,
  FinishTestUseCase,
  StartTestUseCase,
} from 'src/app/application/quiz-use-case';
import { QuestionModel, TestModel } from 'src/app/domain/model';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { NotificationService } from '../shared/service';
import { SwitchUseCase } from 'src/app/application/global-use-case';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnInit {
  @Input() quiz!: TestModel;
  token!: string;
  answer!: string[];
  questionSentence!: string;
  currentQuestion!: QuestionModel;
  progress!: number;
  countdown!: number;
  private intervalId!: NodeJS.Timer;
  switchCongratulations = false;
  now = Date.now();

  constructor(
    private readonly quizService: QuizService,
    private readonly answerTestUseCase: AnswerTestUseCase,
    private readonly finishTestUseCase: FinishTestUseCase,
    private readonly startTestUseCase: StartTestUseCase,
    private readonly router: Router,
    private readonly notificationService: NotificationService,
    public readonly switchUseCase: SwitchUseCase
  ) {}

  ngOnInit(): void {
    this.quizService
      .getData()
      .subscribe((data: { token: string; quiz: TestModel }) => {
        if (JSON.stringify(this.quiz) !== JSON.stringify(data.quiz)) {
          this.quiz = data.quiz;
          this.token = data.token;
          this.progress = this.calculateProgress();
          const question = this.quiz.questions?.find(
            (question: {
              question: QuestionModel;
              points: number;
              answered: boolean;
            }) => question.answered === false
          );
          question && (this.currentQuestion = question.question);
          !this.quiz?.started_at && !!this.token && this.startTest();
          data.token === '' && this.router.navigate(['app-home']);
        }
      });
    this.progress = this.calculateProgress();
    const targetDate = new Date(this.quiz?.started_at ?? this.now - 20000);
    const diffSeconds = Math.floor((this.now - targetDate.getTime()) / 1000);
    this.countdown = diffSeconds > 0 ? 60 * 60 - diffSeconds : 0;
    this.startCountdown();
  }
  onSendAnswer() {
    !!this.answer &&
      this.answerTestUseCase
        .answerTest(this.token, this.questionSentence, this.answer)
        .subscribe({
          next: (value: TestModel) => {
            this.quizService.setData(this.token, value);
          },
          error: (response: HttpErrorResponse) =>
            this.notificationService.showMessage(
              'Error',
              response.error.message,
              'error'
            ),
        });
    this.progress === 15 && this.finishTest();
    this.progress === 15 && (this.switchCongratulations = true);
    //   this.notificationService.showMessage(
    //     'Test finished!',
    //     `Your score is ${this.calculateScore()}/30, also you will receive an email with your score.`,
    //     'success'
    //   );
    // this.progress === 15 && this.router.navigate(['app-home']);
  }

  onOptionsSelected(optionsSelected: string[]) {
    this.answer = optionsSelected;
    this.questionSentence = this.currentQuestion.sentence;
  }

  startTest() {
    this.startTestUseCase.startTest(this.token).subscribe();
  }

  finishTest() {
    this.finishTestUseCase.finishTest(this.token).subscribe();
  }

  calculateScore() {
    return this.quiz.questions?.reduce(
      (total: number, question: { points: number }) => total + question.points,
      0
    );
  }

  calculateProgress() {
    return (
      this.quiz.questions?.reduce(
        (total: number, question: { answered: boolean }) =>
          total + (question.answered ? 1 : 0),
        0
      ) + 1
    );
  }

  startCountdown() {
    this.intervalId = setInterval(() => {
      this.countdown--;
      if (this.countdown <= 0) {
        clearInterval(this.intervalId);
        this.finishTest();
        this.notificationService.showMessage(
          'Test finished!',
          'Your time is over, you will receive an email with your score.',
          'warning'
        );
        this.router.navigate(['app-home']);
      }
    }, 1000);
  }

  formatTime(time: number): string {
    const hours = Math.floor((time % 86400) / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours} ${minutes} ${seconds}`;
  }
}
