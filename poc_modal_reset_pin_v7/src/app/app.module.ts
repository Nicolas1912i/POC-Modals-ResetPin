import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { EmailComponent } from './components/email/email/email.component';
import { OtpComponent } from './components/otp/otp/otp.component';
import { BrowserModule } from '@angular/platform-browser';
import { ManagerStepService } from './services/manager-step.service';
import { ModalCommunicationService } from './services/modal-communication.service';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EmailComponent,
    OtpComponent,
    ConfirmationComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [ManagerStepService, ModalCommunicationService],
  bootstrap: [AppComponent],
  entryComponents: [AppComponent, EmailComponent, OtpComponent, ConfirmationComponent]
})
export class AppModule { }
