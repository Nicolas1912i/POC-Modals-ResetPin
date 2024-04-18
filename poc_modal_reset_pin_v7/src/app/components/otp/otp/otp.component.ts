import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {ModalCommunicationService} from 'src/app/services/modal-communication.service';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
})
export class OtpComponent implements OnInit {

  @ViewChild('inputs') inputsElement: ElementRef;

  // const input = {
  //   id: 1,
  //   value: '',
  //   focus: false
  // };

  public inputForms: FormGroup;

  get otpGroup() {
    return this.inputForms.get('otpGroup') as FormArray;
  }

  // public inputsList = [
  //   {
  //     id: 1,
  //     value: '',
  //     focus: true
  //   },
  //   {
  //     id: 2,
  //     value: '',
  //     focus: false
  //   },
  //   {
  //     id: 3,
  //     value: '',
  //     focus: false
  //   },
  //   {
  //     id: 4,
  //     value: '',
  //     focus: false
  //   },
  //   {
  //     id: 5,
  //     value: '',
  //     focus: false
  //   },
  //   {
  //     id: 6,
  //     value: '',
  //     focus: false
  //   }
  // ];



  private inputsValues = ['', '', '', '', '', ''];
  private finalOtpCode: string;

  constructor(public communicationService: ModalCommunicationService, public formBuilder: FormBuilder) {}

  // @HostListener('keydown', ['$event.key'])
  // onDeleteDetected(keyDown) {
  //   if (keyDown === 'Backspace' || keyDown === 'Delete') {
  //     this.deleteOtp();
  //   }
  // }

  verifyOtp() {
    // Usar formbuilder para el comportamiento del formulario
    // validateForm()
    this.joinOtpCode();
    // sendRequestApi()
    // handleResponse()
    this.emitResult();
  }

  searchNext(changingNumber: number): void {
    this.inputsValues[changingNumber] = this.inputsElement.nativeElement.childNodes[changingNumber].value;

    if (changingNumber < 5) {
      this.inputsElement.nativeElement.childNodes[changingNumber + 1].focus();
    }
  }


  private deleteOtp(): void {
    const deleteIndex = this.inputsValues.filter(x => x !== '').length - 1;
    this.inputsValues[deleteIndex] = '';
    this.inputsElement.nativeElement.childNodes[deleteIndex].value = '';

    if (deleteIndex >= 1) {
      this.inputsElement.nativeElement.childNodes[deleteIndex].focus();
    }
  }

  joinOtpCode(): void {
    this.finalOtpCode = this.inputsValues.join();
    console.log(this.finalOtpCode);
  }

  ngOnInit(): void {
    // this.inputsElement.nativeElement.childNodes[0].focus();
    this.inputForms = this.formBuilder.group(
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

  emitResult(): void {
    this.communicationService.notify('finish');
  }
}
