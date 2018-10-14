import React from 'react'
import { Text } from 'react-native'
import { iOSUIKit, human } from 'react-native-typography'
import { VerificationLayout } from './components/VerificationLayout'
import styled from 'styled-components/native'
import { RNCamera } from 'react-native-camera'
import { VerificationContext } from './config/VerificationContext'
import IdentityService from '../../Services/IdentityService'
import { ImageTaker } from './components/ImageTaker'
import Button from '../../components/Button'
import { ButtonWrapper } from './components/ButtonWrapper'
import { CameraWrapper } from './components/CameraWrapper'

const ContentWrapper = styled.View`
  flex: 1;
  flex-direction: column;
`

export class SelfieStep extends React.PureComponent {
  render() {
    return (
      <VerificationContext.Consumer>
        {({ goToNextStep, selfie, setSelfie, userDetails }) => (
          <VerificationLayout>
            <Text style={iOSUIKit.largeTitleEmphasizedWhite}>
              Take a Selfie With ID Document
            </Text>
            <Text style={iOSUIKit.subheadEmphasizedWhite}>
              Place it right next to your head
            </Text>

            <ContentWrapper>
              <CameraWrapper>
                <ImageTaker
                  ref={imageTaker => {
                    this.imageTaker = imageTaker
                  }}
                  value={selfie}
                  onTaken={uri => setSelfie(uri)}
                />
              </CameraWrapper>

              <ButtonWrapper>
                <Text style={human.body}>
                  Are both you and the document clearly visible in the photo?
                </Text>

                <Button
                  style={{ marginTop: 20 }}
                  disabled={!selfie}
                  onPress={goToNextStep}
                >
                  Yeah, it's great!
                </Button>
              </ButtonWrapper>
            </ContentWrapper>
          </VerificationLayout>
        )}
      </VerificationContext.Consumer>
    )
  }
}
