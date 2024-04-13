import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {EmailComponent} from "../../email/email/email.component";
import {OtpComponent} from "../../otp/otp/otp.component";
import {NgComponentOutlet, NgIf} from "@angular/common";
import {ResetPinStages} from "../../../enums/reset-pin-stages";

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [
    EmailComponent,
    OtpComponent,
    NgIf,
    NgComponentOutlet
  ],
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
