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

export class ImageTaker extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      imageUri: null
    }
  }

  get hasImage() {
    return this.state.imageUri
  }

  componentDidMount() {
    this.props.getFromMemory().then(value => {
      this.setState({
        imageUri: value
      })
    })
  }

  retake() {
    this.props.setToMemory('')
    this.setState({
      imageUri: ''
    })
  }

  takePicture = async camera => {
    const options = { quality: 0.5, base64: true }
    const data = await camera.takePictureAsync(options)
    this.props.onTaken(data.uri)
    this.props.setToMemory(data.uri)

    this.setState({
      imageUri: data.uri
    })
  }

  render() {
    const uri = this.state.imageUri

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

    return (
      <Container>
        <RNCamera
          ref={ref => {
            this.camera = ref
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
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
  storageKey: PropTypes.string,
  getFromMemory: PropTypes.func.isRequired,
  setToMemory: PropTypes.func.isRequired
}

ImageTaker.defaultProps = {
  onTaken: () => {},
  storageKey: ''
}
