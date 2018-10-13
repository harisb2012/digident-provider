import { createStackNavigator } from 'react-navigation';
import * as routes from './routes';
import { LoginScene } from '../Scenes/Login/LoginScene';

export default createStackNavigator({
  [routes.LOGIN]: {
    screen: LoginScene
  }
}, {
  mode: 'modal'
});
