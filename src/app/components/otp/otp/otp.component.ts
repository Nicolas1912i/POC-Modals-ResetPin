import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ResetPinStages} from "../../../enums/reset-pin-stages";

@Component({
  selector: 'app-otp',
  standalone: true,
  imports: [],
  templateUrl: './otp.component.html',
})
export class OtpComponent {
  @Output() eventEmitter = new EventEmitter<ResetPinStages>();

  emitValue(value: ResetPinStages) {
    this.eventEmitter.emit(value);
  }

  protected readonly ResetPinStages = ResetPinStages;
}
