import { createStackNavigator } from 'react-navigation'
import * as routes from './routes'
import { LoginScene } from '../Scenes/Login/LoginScene'
import { OnboardingScene } from '../Scenes/Onboarding/OnboardingScene'

export default createStackNavigator(
  {
    [routes.LOGIN]: {
      screen: LoginScene
    },
    [routes.ONBOARDING]: {
      screen: OnboardingScene
    }
  },
  {
    initialRouteName: routes.ONBOARDING,
    mode: 'modal',
    headerMode: 'none'
  }
)
