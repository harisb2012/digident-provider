import { createStackNavigator } from 'react-navigation';
import * as routes from './routes';
import mainRoutes from './routes/mainRoutes';

const modalRoutes = {
  ...mainRoutes.modal
};

const mainRoutesNavigator = createStackNavigator(
  {
    ...mainRoutes.main,
  },

  {
    initialRouteName: routes.STATUS,
    headerTransitionPreset: 'uikit',
    headerLayoutPreset: 'center'
  }
);

const AppNavigator = createStackNavigator({
  Main: {
    screen: mainRoutesNavigator,
    navigationOptions: {
      header: null
    }
  },
  ...modalRoutes
}, {
  headerMode: 'screen',
  mode: 'modal',
  headerLayoutPreset: 'center'
});

export default AppNavigator;
