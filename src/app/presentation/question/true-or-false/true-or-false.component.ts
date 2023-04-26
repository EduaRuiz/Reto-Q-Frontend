import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-true-or-false',
  templateUrl: './true-or-false.component.html',
  styleUrls: ['./true-or-false.component.scss'],
})
export class TrueOrFalseComponent implements OnInit, OnChanges {
  @Input() sentence!: string;
  @Input() options!: string[];
  @Output() optionsSelectedEvent = new EventEmitter<string[]>();
  optionsSelected!: string[];

  constructor() {}

  ngOnInit(): void {
    this.optionsSelected = [];
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['sentence']) {
      this.optionsSelected = [];
    }
  }

  chooseOption(option: string) {
    this.optionsSelected = [option];
    this.optionsSelectedEvent.emit(this.optionsSelected);
  }
}
