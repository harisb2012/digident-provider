import React from 'react'
import { Text } from 'react-native'
import { iOSUIKit } from 'react-native-typography'
import { VerificationLayout } from './components/VerificationLayout'
import { DetailsForm } from './forms/DetailsForm'
import styled from 'styled-components/native'
import Button from '../../components/Button'
import { customShadowStyle } from '../../properties/customShadowStyle'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { VerificationContext } from './config/VerificationContext'
import IdentityService from '../../Services/IdentityService'

const FormWrapper = styled.View`
  background: white;
  border-radius: 15;
  padding: 10px 20px;
`

const CenterWrapper = styled.View`
  justify-content: center;
  flex: 1;
`

const ButtonWrapper = styled.View`
  margin: 10px 0;
`

const contentContainerStyle = {
  flexGrow: 1,
  justifyContent: 'center'
}

export class DetailsStep extends React.PureComponent {
  render() {
    return (
      <VerificationContext.Consumer>
        {({ goToNextStep, userDetails, setUserDetails }) => (
          <VerificationLayout>
            <Text style={iOSUIKit.largeTitleEmphasizedWhite}>
              Personal Details
            </Text>

            <Text style={iOSUIKit.subheadEmphasizedWhite}>
              Please confirm your personal details
            </Text>

            <KeyboardAwareScrollView
              contentContainerStyle={contentContainerStyle}
            >
              <FormWrapper style={customShadowStyle}>
                <DetailsForm
                  ref={form => {
                    this.form = form
                  }}
                  initialValue={userDetails}
                  onSubmit={values => {
                    setUserDetails(values)
                    goToNextStep()
                  }}
                />

                <ButtonWrapper>
                  <Button
                    onPress={() => {
                      this.form.submit()
                    }}
                  >
                    All looks good!
                  </Button>
                </ButtonWrapper>
              </FormWrapper>
            </KeyboardAwareScrollView>
          </VerificationLayout>
        )}
      </VerificationContext.Consumer>
    )
  }
}
