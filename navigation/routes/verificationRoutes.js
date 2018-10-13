import * as routes from '../routes';
import { VerificationScene } from '../../Scenes/Verification/VerificationScene';

const main = {
  [routes.VERIFICATION]: {
    screen: VerificationScene
  }
};

const modals = {
};

export default {
  main,
  modals
};
