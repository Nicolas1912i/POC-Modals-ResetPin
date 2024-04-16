import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {ResetPinStages} from "../../../enums/reset-pin-stages";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent {
  @Input() actualStep: any;
  @Output() eventEmitter = new EventEmitter<ResetPinStages>();

  actualStepUpdate(value: ResetPinStages) {
    console.log('Passing to: ' + value);
    this.eventEmitter.emit(value);
  }

  protected readonly ResetPinStages = ResetPinStages;
}
