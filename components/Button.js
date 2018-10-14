import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { iOSUIKit } from 'react-native-typography'
import { merge } from 'lodash'

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
    const { onPress, children, disabled, style } = this.props

    const { bgColorFrom, bgColorTo } = merge(
      {
        bgColorFrom: '#B12775',
        bgColorTo: '#F8686C'
      },
      { bgColorFrom: this.props.bgColorFrom, bgColorTo: this.props.bgColorTo },
      disabled && { bgColorFrom: '#CCCCCC', bgColorTo: '#999999' }
    )

    return (
      <TouchableOpacity onPress={!disabled && onPress} style={style}>
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
