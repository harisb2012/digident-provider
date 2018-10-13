import React from 'react';
import { Text } from 'react-native';
import { iOSUIKit } from 'react-native-typography';
import { VerificationLayout } from './components/VerificationLayout';
import styled from 'styled-components/native';
import { RNCamera } from 'react-native-camera';

const CameraWrapper = styled.View`
  flex: 1;
  padding-top: 30;
  max-height: 60%;
`;

export class SelfieStep extends React.PureComponent {
  render() {
    return (
      <VerificationLayout>
        <Text style={iOSUIKit.largeTitleEmphasizedWhite}>Take a Selfie With ID Document</Text>
        <Text
          style={iOSUIKit.subheadEmphasizedWhite}
        >
          Place it right next to your head
        </Text>

        <CameraWrapper>
          <RNCamera
              ref={ref => {
                this.camera = ref;
              }}
              style={{
                flex: 1,
                justifyContent: 'flex-end',
                alignItems: 'center'
              }}
              type={RNCamera.Constants.Type.back}
              flashMode={RNCamera.Constants.FlashMode.on}
              permissionDialogTitle={'Permission to use camera'}
              permissionDialogMessage={'We need your permission to use your camera phone'}
              onGoogleVisionBarcodesDetected={({ barcodes }) => {
                console.log(barcodes)
              }}
          />
        </CameraWrapper>
      </VerificationLayout>
    )
  }
}