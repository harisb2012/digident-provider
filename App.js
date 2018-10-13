import React from 'react'
import { AsyncStorage } from 'react-native';
import Navigator from './navigation/Navigator'

AsyncStorage.clear();

export default class App extends React.PureComponent {
  render() {
    return <Navigator />
  }
}
