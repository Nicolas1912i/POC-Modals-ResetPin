import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmailComponent } from './components/email/email/email.component';
import { OtpComponent } from './components/otp/otp/otp.component';
import { BrowserModule } from '@angular/platform-browser';
import { ModalComponent } from './components/modal/modal/modal.component';
import { ManagerStepService } from './services/manager-step.service';
import { ModalCommunicationService } from './services/modal-communication.service';

@NgModule({
  declarations: [
    AppComponent,
    EmailComponent,
    OtpComponent,
    ModalComponent,
  ],
  imports: [BrowserModule],
  providers: [ManagerStepService, ModalCommunicationService],
  bootstrap: [AppComponent],
  entryComponents: [AppComponent, ModalComponent, EmailComponent, OtpComponent]
})
export class AppModule { }
