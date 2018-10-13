import * as routes from '../routes';
import { VerificationScene } from '../../Scenes/Verification/VerificationScene';
import { VerificationDetailsScene } from '../../Scenes/Verification/VerificationDetailsScene';

const main = {
  [routes.VERIFICATION]: {
    screen: VerificationScene
  },

  [routes.VERIFICATION_DETAILS]: {
    screen: VerificationDetailsScene
  }
};

const modals = {
};

export default {
  main,
  modals
};
