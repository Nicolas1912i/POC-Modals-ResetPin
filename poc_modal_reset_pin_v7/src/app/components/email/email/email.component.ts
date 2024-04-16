import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ResetPinStages} from "../../../enums/reset-pin-stages";
import { ModalCommunicationService } from 'src/app/services/modal-communication.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
})
export class EmailComponent {

  constructor(public communicationService: ModalCommunicationService) {}

  verifyEmail() {
    // Usar formbuilder para el comportamiento del formulario
    // validateForm()
    // sendRequestApi()
    // handleResponse()
    this.emitResult();
  }

  emitResult() {
    this.communicationService.notify("finish");
  }
  protected readonly ResetPinStages = ResetPinStages;
}
