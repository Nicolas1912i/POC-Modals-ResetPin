import {ResetPinStages} from '../enums/reset-pin-stages';

export interface StepsConfigurationModel {
  name: ResetPinStages;
  next: ResetPinStages;
  component: any;
}
