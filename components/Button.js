import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { iOSUIKit } from 'react-native-typography'

const styles = {
  linearGradient: {
    borderRadius: 15,
    padding: 10
  },
  text: {
    textAlign: 'center'
  }
}

export default class Button extends React.Component {
  render() {
    const { onPress, children } = this.props
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <LinearGradient
          style={styles.linearGradient}
          colors={['#B12775', '#F8686C']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        >
          <Text style={[iOSUIKit.bodyEmphasizedWhite, styles.text]}>
            {children}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    )
  }
}
