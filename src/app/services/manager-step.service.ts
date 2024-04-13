import {Injectable} from '@angular/core';
import {ResetPinStages} from "../enums/reset-pin-stages";
import {StepsConfigurationModel} from "../models/steps-configuration.model";
import StepsConfiguration from "../configs/stepsConfiguration";

@Injectable({
  providedIn: 'root'
})
export class ManagerStepService {

  private stepsState: ResetPinStages | undefined = ResetPinStages.Email;
  private stepsComponent: any;
  private stepsConfiguration: StepsConfigurationModel[] = [];

  constructor() {
    this.stepsConfiguration = StepsConfiguration.configuration;
  }

  public next(actualStep: ResetPinStages | undefined) {
    const configuration = this.stepsConfiguration.find(configuration => configuration.name === this.stepsState);
    if (configuration) {
      this.stepsState = configuration.next;
      this.stepsComponent = configuration.component;

      return configuration.name;
    }

    return undefined;
  }

  public getPaintingComponent() {
    return this.stepsComponent;
  }
}
