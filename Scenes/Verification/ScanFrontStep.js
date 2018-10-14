import React from 'react';
import { Text } from 'react-native';
import { iOSUIKit, human } from 'react-native-typography';
import styled from 'styled-components/native';
import Button from '../../components/Button';
import { ImageTaker } from './components/ImageTaker';
import { VerificationLayout } from './components/VerificationLayout';
import { VerificationContext } from './config/VerificationContext';

const ContentWrapper = styled.View`
  flex: 1;
  flex-direction: column;
`

const CameraWrapper = styled.View`
  flex: 3;
  margin-top: 30;
  overflow: hidden;
  border-radius: 15;
`

const ButtonWrapper = styled.View`
  flex: 1;
  margin-top: 30;
  margin-bottom: 30;
  justify-content: center;
  background: white;
  border-radius: 15;
  padding: 10px 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`

export class ScanFrontStep extends React.PureComponent {
  render() {
    return (
      <VerificationContext.Consumer>
        {({ goToNextStep, frontImage, setFrontImage }) => (
          <VerificationLayout>
            <Text style={iOSUIKit.largeTitleEmphasizedWhite}>Scan Front</Text>
            <Text style={iOSUIKit.subheadEmphasizedWhite}>
              Please scan the front of your ID document
            </Text>

            <ContentWrapper>
              <CameraWrapper>
                <ImageTaker
                  ref={imageTaker => {
                    this.imageTaker = imageTaker
                  }}
                  value={frontImage}
                  onTaken={uri => {
                    setFrontImage(uri);
                  }}
                />
              </CameraWrapper>

              <ButtonWrapper>
                <Text style={human.body}>
                  Is the snap of the document easily readable?
                </Text>

                <Button
                  style={{ marginTop: 20 }}
                  disabled={!frontImage}
                  onPress={goToNextStep}
                >
                  Yes, let's proceed
                </Button>
              </ButtonWrapper>
            </ContentWrapper>
          </VerificationLayout>
        )}
      </VerificationContext.Consumer>
    )
  }
}
