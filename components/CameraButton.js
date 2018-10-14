import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const styles = {
  outerCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0,
    backgroundColor: '#fff',
    margin: 20
  },
  innerCircle: {
    backgroundColor: '#fff',
    borderWidth: 3,
    borderColor: '#000',
    width: 50,
    height: 50,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0,
    alignSelf: 'center',
    margin: 20
  }
}

export default class CameraButton extends React.Component {
  render() {
    const { onPress, style } = this.props
    return (
      <View style={styles.outerCircle}>
        <TouchableOpacity style={styles.innerCircle} onPress={onPress} />
      </View>
    )
  }
}
