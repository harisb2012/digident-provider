import React from 'react'
import { Text, Image } from 'react-native'
import { iOSUIKit } from 'react-native-typography'
import { TextField } from 'react-native-material-textfield'
import { VerificationLayout } from './components/VerificationLayout'
import styled from 'styled-components/native'
import { Formik } from 'formik'
import { VerificationContext } from './config/VerificationContext'
import Button from '../../components/Button'
import { customShadowStyle } from '../../properties/customShadowStyle'

const ContentWrapper = styled.View`
  flex: 1;
  flex-direction: column;
`

const ImagesWrapper = styled.View`
  flex: 1;
  flex-direction: row;
`

const ButtonWrapper = styled.View`
  flex: 1;
  justify-content: flex-end;
`

const FormWrapper = styled.View`
  background: white;
  border-radius: 15;
  padding: 10px 20px;
  margin-top: 20px;
`

const imageStyles = { flex: 1, width: 100, height: 100, marginTop: 30 }

export class SubmitStep extends React.Component {
  render() {
    return (
      <VerificationContext.Consumer>
        {({ finalise }) => (
          <VerificationLayout>
            <Text style={iOSUIKit.largeTitleEmphasizedWhite}>Awesome!</Text>
            <Text style={iOSUIKit.subheadEmphasizedWhite}>
              You have been successfully verified. Please review your data
              before sending it to digi.me
            </Text>

            <ContentWrapper>
              <ImagesWrapper>
                <Image
                  source={require('../Onboarding/illustrations/selfie.png')}
                  style={imageStyles}
                />
                <Image
                  source={require('../Onboarding/illustrations/selfie.png')}
                  style={imageStyles}
                />
                <Image
                  source={require('../Onboarding/illustrations/selfie.png')}
                  style={imageStyles}
                />
              </ImagesWrapper>

              <Formik
                ref={formik => {
                  this.formik = formik
                }}
              >
                {({ handleChange, handleSubmit, values }) => (
                  <FormWrapper style={customShadowStyle}>
                    <TextField
                      label="First Name"
                      editable={false}
                      value="Test"
                    />

                    <TextField
                      label="Last Name"
                      editable={false}
                      value="Test"
                    />

                    <TextField
                      label="Address, City, Zip Code, Country"
                      editable={false}
                      value="Test"
                    />
                  </FormWrapper>
                )}
              </Formik>

              <ButtonWrapper>
                <Button onPress={finalise}>Submit</Button>
              </ButtonWrapper>
            </ContentWrapper>
          </VerificationLayout>
        )}
      </VerificationContext.Consumer>
    )
  }
}
