import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ResetPinStages} from "../../../enums/reset-pin-stages";

@Component({
  selector: 'app-otp',
  standalone: true,
  imports: [],
  templateUrl: './otp.component.html',
})
export class OtpComponent {
  @Input() callbackMethod: any;
  protected readonly ResetPinStages = ResetPinStages;
}
