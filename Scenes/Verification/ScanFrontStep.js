import React from 'react'
import { Text } from 'react-native'
import { iOSUIKit } from 'react-native-typography'
import styled from 'styled-components/native'
import { VerificationLayout } from './components/VerificationLayout'
import { ImageTaker } from './components/ImageTaker'
import IdentityService from '../../Services/IdentityService'
import Button from '../../components/Button'
import { VerificationContext } from './config/VerificationContext'

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

export class ScanFrontStep extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hasImage: false
    }
  }

  render() {
    return (
      <VerificationContext.Consumer>
        {({ goToNextStep }) => (
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
                  getFromMemory={IdentityService.getFrontImage}
                  setToMemory={IdentityService.saveFrontImage}
                  onTaken={uri => this.setState({ hasImage: true })}
                />
              </CameraWrapper>

              {this.state.hasImage && (
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
