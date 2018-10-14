import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native'
import { RNCamera } from 'react-native-camera'
import styled from 'styled-components/native'

import CameraButton from '../../../components/CameraButton'

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  background: black;
`

const styles = StyleSheet.create({
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20
  }
})

export class ImageTaker extends React.PureComponent {
  retake() {
    this.props.onTaken('');
  }

  takePicture = async camera => {
    const options = { quality: 0.5, base64: true }
    const data = await camera.takePictureAsync(options)
    this.props.onTaken(data.uri)
  }

  render() {
    const uri = this.props.value;
    if (!this.props.isActive) return null;

    if (uri) {
      return (
        <Container>
          <Image
            style={{
              flex: 1
            }}
            source={{
              uri
            }}
          />

          <TouchableOpacity
            onPress={() => this.retake()}
            style={styles.capture}
          >
            <Text style={{ fontSize: 14 }}>RETAKE</Text>
          </TouchableOpacity>
        </Container>
      )
    }

    const type = this.props.isSelfie ? RNCamera.Constants.Type.front : RNCamera.Constants.Type.back;

    return (
      <Container>
        <RNCamera
          ref={ref => {
            this.camera = ref
          }}
          style={styles.preview}
          type={type}
          flashMode={RNCamera.Constants.FlashMode.on}
          permissionDialogTitle={'Permission to use camera'}
          permissionDialogMessage={
            'We need your permission to use your camera phone'
          }
        >
          {({ camera, status }) => {
            return (
              <View
                style={{
                  flex: 0,
                  flexDirection: 'row',
                  justifyContent: 'center'
                }}
              >
                <CameraButton onPress={() => this.takePicture(camera)} />
              </View>
            )
          }}
        </RNCamera>
      </Container>
    )
  }
}

ImageTaker.propTypes = {
  onTaken: PropTypes.func,
  value: PropTypes.any,
  isActive: PropTypes.bool,
  isSelfie: PropTypes.bool
}

ImageTaker.defaultProps = {
  onTaken: () => {},
  value: '',
  isActive: false,
  isSelfie: false
}
