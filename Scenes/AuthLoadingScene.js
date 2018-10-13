import React from 'react';
import { View, Text } from 'react-native';
import * as routes from '../navigation/routes';

export class AuthLoadingScene extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate(routes.ROOT_APP);
    }, 1000);
  }

  render() {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    )
  }
}
