import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-multiple-choice',
  templateUrl: './multiple-choice.component.html',
  styleUrls: ['./multiple-choice.component.scss'],
})
export class MultipleChoiceComponent implements OnInit {
  @Input() sentence!: string;
  @Input() options!: string[];
  @Output() optionsSelectedEvent = new EventEmitter<string[]>();
  optionsSelected: { [key: string]: boolean } = {};
  constructor() {}

  ngOnInit(): void {}

  emitOptionsSelected() {
    let optionsSelected = [];
    for (let option in this.optionsSelected) {
      if (this.optionsSelected[option]) {
        optionsSelected.push(option);
      }
    }
    this.optionsSelectedEvent.emit(optionsSelected);
  }
}
