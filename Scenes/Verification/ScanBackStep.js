import React from 'react'
import { Text } from 'react-native'
import { iOSUIKit, human } from 'react-native-typography'
import styled from 'styled-components/native'
import Button from '../../components/Button'
import { ImageTaker } from './components/ImageTaker'
import { VerificationLayout } from './components/VerificationLayout'
import { VerificationContext } from './config/VerificationContext'
import { ButtonWrapper } from './components/ButtonWrapper'
import { CameraWrapper } from './components/CameraWrapper'

const ContentWrapper = styled.View`
  flex: 1;
  flex-direction: column;
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

              <ButtonWrapper>
                <Text style={human.body}>
                  Is the whole back of the document easily readable?
                </Text>

                <Button
                  style={{ marginTop: 20 }}
                  disabled={!backImage}
                  onPress={goToNextStep}
                >
                  Yeah, looks great
                </Button>
              </ButtonWrapper>
            </ContentWrapper>
          </VerificationLayout>
        )}
      </VerificationContext.Consumer>
    )
  }
}
