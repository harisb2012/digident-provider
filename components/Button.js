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
    const {
      onPress,
      children,
      bgColorFrom = '#B12775',
      bgColorTo = '#F8686C'
    } = this.props
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <LinearGradient
          style={styles.linearGradient}
          colors={[bgColorFrom, bgColorTo]}
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
