import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  @Input() counter = 1;
  @Output() countChange = new EventEmitter<number>();
  incrementCounter(){
    this.counter++;
    this.countChange.emit(this.counter);
  }
}
