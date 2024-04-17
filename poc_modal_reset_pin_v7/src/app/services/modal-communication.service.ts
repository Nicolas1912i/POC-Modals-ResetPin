import { Subject } from 'rxjs';

export class ModalCommunicationService {

    private subject = new Subject<string>();

    notify(value: string): void {
        this.subject.next(value);
    }

    get subscription(): Subject<string> {
        return this.subject;
    }
}
