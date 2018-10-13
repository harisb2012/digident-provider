import React from 'react';
import { Text } from 'react-native';
import { iOSUIKit } from 'react-native-typography';
import styled from 'styled-components/native';
import { VerificationLayout } from './components/VerificationLayout';
import { ImageTaker } from './components/ImageTaker';
import IdentityService from '../../Services/IdentityService';

const CameraWrapper = styled.View`
  flex: 1;
  padding-top: 30;
  max-height: 60%;
`;

export class ScanFrontStep extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <VerificationLayout>
        <Text style={iOSUIKit.largeTitleEmphasizedWhite}>Scan Front</Text>
        <Text
          style={iOSUIKit.subheadEmphasizedWhite}
        >
          Please scan the front of your ID document
        </Text>

        <CameraWrapper>
          <ImageTaker
            getFromMemory={IdentityService.getFrontImage}
            setToMemory={IdentityService.saveFrontImage}
            onTaken={uri => IdentityService.saveFrontImage(uri)}
          />
        </CameraWrapper>
      </VerificationLayout>
    );
  }
}