import { createSwitchNavigator, createDrawerNavigator } from 'react-navigation';
import appNavigator from './appNavigator';
import authNavigator from './authNavigator';
import * as routes from './routes';
import { AuthLoadingScene } from '../Scenes/AuthLoadingScene';

const switchNavigation = createSwitchNavigator(
  {
    [routes.ROOT_AUTH_LOADING]: AuthLoadingScene,
    [routes.ROOT_APP]: appNavigator,
    [routes.ROOT_AUTH]: authNavigator
  },
  {
    initialRouteName: routes.ROOT_AUTH_LOADING
  }
);

export default switchNavigation;
