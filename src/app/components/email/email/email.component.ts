import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ResetPinStages} from "../../../enums/reset-pin-stages";

@Component({
  selector: 'app-email',
  standalone: true,
  imports: [],
  templateUrl: './email.component.html',
})
export class EmailComponent {
  @Input() callbackMethod: any;

  handleInternalClick(value: ResetPinStages) {
    console.log(`Emitting ${value} from email component`);
    this.callbackMethod(value);
  }

  protected readonly ResetPinStages = ResetPinStages;
}
