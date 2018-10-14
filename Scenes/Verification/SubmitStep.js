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

export class SubmitStep extends React.PureComponent {
  generateAddress({ city, zip, address, country }) {
    return `${address}, ${city}, ${zip}, ${country}`;
  }

  render() {
    return (
      <VerificationContext.Consumer>
        {({ finalise, userDetails, frontImage, backImage, selfie }) => (
          <VerificationLayout>
            <Text style={iOSUIKit.largeTitleEmphasizedWhite}>Awesome!</Text>
            <Text style={iOSUIKit.subheadEmphasizedWhite}>
              You have been successfully verified. Please review your data
              before sending it to digi.me
            </Text>

            <ContentWrapper>
              <ImagesWrapper>
                <Image
                  source={{
                    uri: frontImage
                  }}
                  style={imageStyles}
                />
                <Image
                  source={{
                    uri: backImage
                  }}
                  style={imageStyles}
                />
                <Image
                  source={{
                    uri: selfie
                  }}
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
                      value={userDetails.firstName}
                    />

                    <TextField
                      label="Last Name"
                      editable={false}
                      value={userDetails.lastName}
                    />

                    <TextField
                      label="Address, City, Zip Code, Country"
                      editable={false}
                      value={this.generateAddress(userDetails)}
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
