import React from 'react';
import { Text } from 'react-native';
import { iOSUIKit } from 'react-native-typography';
import { VerificationLayout } from './components/VerificationLayout';
import styled from 'styled-components/native';
import { RNCamera } from 'react-native-camera';
import { VerificationContext } from './config/VerificationContext';
import IdentityService from '../../Services/IdentityService';
import { ImageTaker } from './components/ImageTaker';
import Button from '../../components/Button';

const CameraWrapper = styled.View`
  flex: 1;
  padding-top: 30;
  max-height: 60%;
`;

const ContentWrapper = styled.View`
  flex: 1;
  flex-direction: column;
`;

const ButtonWrapper = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

export class SelfieStep extends React.PureComponent {
  render() {
    return (
      <VerificationContext.Consumer>
        {({ goToNextStep, selfie, setSelfie, userDetails }) => (
          <VerificationLayout>
            <Text style={iOSUIKit.largeTitleEmphasizedWhite}>Take a Selfie With ID Document</Text>
            <Text
              style={iOSUIKit.subheadEmphasizedWhite}
            >
              Place it right next to your head {JSON.stringify(userDetails)}
            </Text>

            <ContentWrapper>
              <CameraWrapper>
                <ImageTaker
                  ref={imageTaker => { this.imageTaker = imageTaker }}
                  value={selfie}
                  onTaken={uri => setSelfie(uri)}
                />
              </CameraWrapper>

              {!!selfie && (
                <ButtonWrapper>
                  <Button onPress={goToNextStep}>Finish</Button>
                </ButtonWrapper>
              )}
            </ContentWrapper>
          </VerificationLayout>
        )}
      </VerificationContext.Consumer>
    )
  }
}