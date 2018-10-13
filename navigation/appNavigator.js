import { createStackNavigator } from 'react-navigation'
import * as routes from './routes'
import mainRoutes from './routes/mainRoutes'
import verificationRoutes from './routes/verificationRoutes'

const modalRoutes = {
  ...mainRoutes.modals,
  ...verificationRoutes.modals
}

const mainRoutesNavigator = createStackNavigator(
  {
    ...mainRoutes.main,
    ...verificationRoutes.main
  },

  {
    initialRouteName: routes.STATUS,
    headerTransitionPreset: 'uikit',
    headerLayoutPreset: 'center',
    headerMode: 'none'
  }
)

const AppNavigator = createStackNavigator(
  {
    Main: {
      screen: mainRoutesNavigator,
      navigationOptions: {
        header: null
      }
    },
    ...modalRoutes
  },
  {
    headerMode: 'none',
    mode: 'modal',
    headerLayoutPreset: 'center'
  }
)

export default AppNavigator
