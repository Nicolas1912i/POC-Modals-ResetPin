import { Component } from '@angular/core';
import {ModalCommunicationService} from '../../services/modal-communication.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
})
export class ConfirmationComponent {

  constructor(private communicationService: ModalCommunicationService) { }

  closeModalFlow() {
    this.emitResult();
  }

  emitResult() {
    this.communicationService.notify('finish');
  }
}
