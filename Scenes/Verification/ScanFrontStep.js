import React from 'react';
import { Text, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { iOSUIKit } from 'react-native-typography';
import { RNCamera } from 'react-native-camera';

const Wrapper = styled.View`
  flex: 1;
`;

const styles = StyleSheet.create({
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  }
});

export class ScanFrontStep extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Wrapper>
        <Text style={iOSUIKit.largeTitleEmphasized}>Scan Front</Text>
        <RNCamera
            ref={ref => {
              this.camera = ref;
            }}
            style = {styles.preview}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.on}
            permissionDialogTitle={'Permission to use camera'}
            permissionDialogMessage={'We need your permission to use your camera phone'}
            onGoogleVisionBarcodesDetected={({ barcodes }) => {
              console.log(barcodes)
            }}
        />
      </Wrapper>
    );
  }
}