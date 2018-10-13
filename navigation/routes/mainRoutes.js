import * as routes from '../routes';
import { StatusScene } from '../../Scenes/Status/StatusScene';

const main = {
  [routes.STATUS]: {
    screen: StatusScene,
    navigationOptions: {
      title: 'App'
    }
  }
};

const modals = {
};

export default {
  main,
  modals
};
