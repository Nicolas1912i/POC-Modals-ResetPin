import {StepsConfigurationModel} from '../models/steps-configuration.model';
import {ResetPinStages} from '../enums/reset-pin-stages';
import {EmailComponent} from '../components/email/email/email.component';
import {OtpComponent} from '../components/otp/otp/otp.component';
import {ConfirmationComponent} from '../components/confirmation/confirmation.component';

export default
{
  configuration: [
    {
      name: ResetPinStages.Email,
      next: ResetPinStages.OTP,
      component: EmailComponent
    },
    {
      name: ResetPinStages.OTP,
      next: ResetPinStages.Confirmation,
      component: OtpComponent
    },
    {
      name: ResetPinStages.Confirmation,
      next: undefined,
      component: ConfirmationComponent
    }
  ] as StepsConfigurationModel[]
};
