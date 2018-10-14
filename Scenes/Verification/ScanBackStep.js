import React from 'react';
import { Text } from 'react-native';
import { iOSUIKit } from 'react-native-typography';
import styled from 'styled-components/native';
import Button from '../../components/Button';
import { ImageTaker } from './components/ImageTaker';
import { VerificationLayout } from './components/VerificationLayout';
import { VerificationContext } from './config/VerificationContext';

const CameraWrapper = styled.View`
  flex: 1;
  padding-top: 30;
  max-height: 60%;
`

const ContentWrapper = styled.View`
  flex: 1;
  flex-direction: column;
`

const ButtonWrapper = styled.View`
  flex: 1;
  justify-content: flex-end;
`

export class ScanBackStep extends React.PureComponent {
  render() {
    return (
      <VerificationContext.Consumer>
        {({ goToNextStep, backImage, setBackImage }) => (
          <VerificationLayout>
            <Text style={iOSUIKit.largeTitleEmphasizedWhite}>Scan Back</Text>
            <Text style={iOSUIKit.subheadEmphasizedWhite}>
              Please scan the back of your ID document
            </Text>

            <ContentWrapper>
              <CameraWrapper>
                <ImageTaker
                  ref={imageTaker => {
                    this.imageTaker = imageTaker
                  }}
                  value={backImage}
                  onTaken={uri => setBackImage(uri)}
                />
              </CameraWrapper>

              {!!backImage && (
                <ButtonWrapper>
                  <Button onPress={goToNextStep}>Next</Button>
                </ButtonWrapper>
              )}
            </ContentWrapper>
          </VerificationLayout>
        )}
      </VerificationContext.Consumer>
    )
  }
}
