import React from 'react';
import { Text } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { iOSUIKit } from 'react-native-typography';
import styled from 'styled-components/native';

const Wrapper = styled.View`
  flex: 1;
`;

const CameraWrapper = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: black;
`;

export class ScanFrontStep extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Wrapper>
        <Text style={iOSUIKit.largeTitleEmphasized}>Scan Front</Text>

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
      </Wrapper>
    );
  }
}