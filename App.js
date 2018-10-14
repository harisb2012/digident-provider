import React from 'react'
import { AsyncStorage } from 'react-native'
import Navigator from './navigation/Navigator'

export default class App extends React.PureComponent {
  render() {
    return <Navigator />
  }
}
