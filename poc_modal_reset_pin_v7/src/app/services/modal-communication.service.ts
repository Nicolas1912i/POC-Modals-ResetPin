import { BehaviorSubject, Subject } from "rxjs";

export class ModalCommunicationService {
    private _subjet = new Subject<string>();

    notify(value: string): void {
        this._subjet.next(value);
    }

    get subscription(): Subject<string> {
        return this._subjet;
    }
}