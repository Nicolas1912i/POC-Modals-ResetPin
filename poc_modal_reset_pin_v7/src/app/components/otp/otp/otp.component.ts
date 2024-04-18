import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {ModalCommunicationService} from 'src/app/services/modal-communication.service';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
})
export class OtpComponent implements OnInit {

  @ViewChild('inputs') inputsElement: ElementRef;
  public otpFormGroup: FormGroup;

  get otpGroup() { return this.otpFormGroup.get('otpGroup') as FormArray; }

  constructor(public communicationService: ModalCommunicationService, public formBuilder: FormBuilder) {}

  @HostListener('keydown', ['$event.key'])
  onDeleteDetected(keyDown: string): void {
    if (keyDown === 'Backspace' || keyDown === 'Delete') {
      this.deleteOtp();
    }
  }

  ngOnInit(): void {
    this.otpFormGroup = this.formBuilder.group(
      {
        otpGroup: this.formBuilder.array([
          this.formBuilder.control(''),
          this.formBuilder.control(''),
          this.formBuilder.control(''),
          this.formBuilder.control(''),
          this.formBuilder.control(''),
          this.formBuilder.control('')])
      }
    );
  }

  public verifyOtp(): void {
    this.emitResult();
  }

  public focusNextInput(activeInput: number): void {
    if (activeInput !== 5) {
      document.getElementById((activeInput + 1).toString()).focus();
    }
  }

  private deleteOtp(): void {
    const deleteIndex = this.otpGroup.controls.filter(x => x.value !== '').length - 1;
    if (deleteIndex >= 0) {
      this.otpGroup.controls[deleteIndex].setValue('');

      document.getElementById((deleteIndex).toString()).focus();
    }
  }

  private emitResult(): void {
    this.communicationService.notify('finish');
  }
}
