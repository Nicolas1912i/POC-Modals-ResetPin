import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ModalCommunicationService} from 'src/app/services/modal-communication.service';

@Component({
    selector: 'app-otp',
    templateUrl: './otp.component.html',
})
export class OtpComponent implements OnInit {

    @ViewChild('inputs') inputsElement: ElementRef;

    private inputsValues = ['', '', '', '', '', ''];
    private finalOtpCode: string;

    constructor(public communicationService: ModalCommunicationService) {
    }

    verifyOtp() {
        // Usar formbuilder para el comportamiento del formulario
        // validateForm()
        this.joinOtpCode();
        // sendRequestApi()
        // handleResponse()
        this.emitResult();

    }

    searchNext(changingNumber: number) {

        if (this.inputsValues[changingNumber] && !this.inputsElement.nativeElement.childNodes[changingNumber].value) {
            const deleteIndex = this.inputsValues.filter(x => x !== '').length - 1;
            this.inputsValues[deleteIndex] = '';
            this.inputsElement.nativeElement.childNodes[changingNumber].value = this.inputsValues[changingNumber];
            this.inputsElement.nativeElement.childNodes[deleteIndex].value = '';
            this.inputsElement.nativeElement.childNodes[deleteIndex - 1].focus();

            return;
        }

        this.inputsValues[changingNumber] = this.inputsElement.nativeElement.childNodes[changingNumber].value;
        this.inputsElement.nativeElement.childNodes[changingNumber + 1].focus();
    }

    joinOtpCode() {
        this.finalOtpCode = this.inputsValues.join();
        console.log(this.finalOtpCode);
    }

    ngOnInit() {
        this.inputsElement.nativeElement.childNodes[0].focus();

        // this.inputsElement.nativeElement.addEventListener('keydown', (event) => {
        //     const key = event.key;
        //     while (key === 'Backspace' || key === 'Delete') {
        //       console.log("You tried to delete stuff");
        //     }
        // });
    }

    emitResult() {
        this.communicationService.notify('finish');
    }
}
