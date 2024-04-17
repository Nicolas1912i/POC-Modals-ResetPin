import {Component, ComponentFactoryResolver, ComponentRef, ViewChild, ViewContainerRef} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {ManagerStepService} from "./services/manager-step.service";
import {ResetPinStages} from "./enums/reset-pin-stages";
import {EmailComponent} from "./components/email/email/email.component";
import {OtpComponent} from "./components/otp/otp/otp.component";
import {NgComponentOutlet, NgIf} from "@angular/common";
import {ModalComponent} from "./components/modal/modal/modal.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EmailComponent, OtpComponent, NgIf, ModalComponent, NgComponentOutlet],
  templateUrl: './app.component.html',
})
export class AppComponent {
  public actualStep: ResetPinStages | undefined = ResetPinStages.Email;
  public flagTriggered: boolean = false;
  public actualComponent: any;

  constructor(private managerStepService: ManagerStepService) {
    this.actualStep = ResetPinStages.Email;
  }

  handleClick() {
    this.controlNextStep();
    this.flagTriggered = true;
  }

  actualStepUpdate(value: ResetPinStages) {
    console.log('Passing to: ' + value);
    this.actualStep = value;
    this.controlNextStep();
  }

  controlNextStep() {
    this.actualStep = this.managerStepService.next(this.actualStep);
    this.actualComponent = this.managerStepService.getPaintingComponent();
  }

  protected readonly ResetPinStages = ResetPinStages;
}
