import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ResetPinStages} from "../../../enums/reset-pin-stages";
import { BehaviorSubject } from 'rxjs';
import { ModalCommunicationService } from 'src/app/services/modal-communication.service';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
})
export class OtpComponent {
  constructor(public communicationService: ModalCommunicationService) {}

  verifyOtp() {
    // Usar formbuilder para el comportamiento del formulario
    // validateForm()
    // joinOtpCode()
    // sendRequestApi()
    // handleResponse()
    this.emitResult();
  }

  emitResult() {
    this.communicationService.notify("finish");
  }

  protected readonly ResetPinStages = ResetPinStages;
}
