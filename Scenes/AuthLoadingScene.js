import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import * as routes from '../navigation/routes'

const styles = {
  wrapper: { flex: 1, alignItems: 'center', justifyContent: 'center' }
}

export class AuthLoadingScene extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate(routes.VERIFICATION)
    }, 1000)
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <ActivityIndicator size="large" />
      </View>
    )
  }
}
