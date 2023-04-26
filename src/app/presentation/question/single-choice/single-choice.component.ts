import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-single-choice',
  templateUrl: './single-choice.component.html',
  styleUrls: ['./single-choice.component.scss'],
})
export class SingleChoiceComponent implements OnInit {
  @Input() sentence!: string;
  @Input() options!: string[];
  @Output() optionsSelectedEvent = new EventEmitter<string[]>();
  optionsSelected!: string[];

  constructor() {}

  ngOnInit(): void {
    this.optionsSelected = []
  }

  chooseOption(option: string) {
    this.optionsSelected = [option];
    this.optionsSelectedEvent.emit(this.optionsSelected);
    console.log(this.optionsSelected);
  }
}
