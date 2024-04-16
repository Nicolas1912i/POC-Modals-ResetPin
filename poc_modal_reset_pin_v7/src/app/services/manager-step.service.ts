import {Injectable} from '@angular/core';
import {ResetPinStages} from "../enums/reset-pin-stages";
import {StepsConfigurationModel} from "../models/steps-configuration.model";
import StepsConfiguration from "../configs/stepsConfiguration";

@Injectable({
  providedIn: 'root'
})
export class ManagerStepService {

  private _startState: StepsConfigurationModel;
  private _currentState: StepsConfigurationModel;
  private _endState: StepsConfigurationModel;
  private _stepsConfiguration: StepsConfigurationModel[] = [];

  constructor() {
    this._stepsConfiguration = StepsConfiguration.configuration;
    this._startState = this._stepsConfiguration[0];
    this._currentState = this._stepsConfiguration[0];
    this._endState = this._stepsConfiguration[this._stepsConfiguration.length-1];
  }

  public next(): void {
    const nextState = this._stepsConfiguration.find(configuration => configuration.name === this._currentState.next);
    if (nextState) {
      this._currentState = nextState;
    }
  }

  get startState(): ResetPinStages {
    return this._startState.component;
  }

  get currentState(): ResetPinStages {
    return this._currentState.component;
  }
}
