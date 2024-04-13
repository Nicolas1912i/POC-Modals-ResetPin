import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ResetPinStages} from "../../../enums/reset-pin-stages";

@Component({
  selector: 'app-email',
  standalone: true,
  imports: [],
  templateUrl: './email.component.html',
})
export class EmailComponent {
  @Input() callbackMethod: any;
  @Output() eventEmitter = new EventEmitter<ResetPinStages>();

  emitValue(value: ResetPinStages) {
    this.eventEmitter.emit(value);
  }

  protected readonly ResetPinStages = ResetPinStages;
}
