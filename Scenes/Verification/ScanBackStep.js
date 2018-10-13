import React from 'react';
import { Text } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { iOSUIKit } from 'react-native-typography';
import styled from 'styled-components/native';
import { VerificationLayout } from './components/VerificationLayout';

const CameraWrapper = styled.View`
  flex: 1;
  padding-top: 30;
  max-height: 60%;
`;

export class ScanBackStep extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <VerificationLayout>
        <Text style={iOSUIKit.largeTitleEmphasizedWhite}>Scan Back</Text>
        <Text
          style={iOSUIKit.subheadEmphasizedWhite}
        >
          Please scan the back of your ID document
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
    );
  }
}