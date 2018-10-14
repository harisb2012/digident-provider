import React from 'react'
import { Text } from 'react-native'
import { iOSUIKit, human } from 'react-native-typography'
import styled from 'styled-components/native'
import Button from '../../components/Button'
import { ImageTaker } from './components/ImageTaker'
import { VerificationLayout } from './components/VerificationLayout'
import { ButtonWrapper } from './components/ButtonWrapper'
import { CameraWrapper } from './components/CameraWrapper'
import { VerificationContext } from './config/VerificationContext'
import * as Animatable from 'react-native-animatable'

const ContentWrapper = styled.View`
  flex: 1;
  flex-direction: column;
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
              <Animatable.View
                animation="zoomInUp"
                style={{ flex: 1 }}
                useNativeDriver
              >
                <CameraWrapper>
                  <ImageTaker
                    ref={imageTaker => {
                      this.imageTaker = imageTaker
                    }}
                    value={frontImage}
                    onTaken={uri => {
                      setFrontImage(uri)
                    }}
                  />
                </CameraWrapper>

                <ButtonWrapper>
                  <Text style={human.body}>
                    Is the whole front of the document easily readable?
                  </Text>

                  <Button
                    style={{ marginTop: 20 }}
                    disabled={!frontImage}
                    onPress={goToNextStep}
                  >
                    Yes, it's good
                  </Button>
                </ButtonWrapper>
              </Animatable.View>
            </ContentWrapper>
          </VerificationLayout>
        )}
      </VerificationContext.Consumer>
    )
  }
}
