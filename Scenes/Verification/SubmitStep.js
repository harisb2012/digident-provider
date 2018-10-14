import React from 'react'
import { Text, Image } from 'react-native'
import { iOSUIKit, human } from 'react-native-typography'
import { TextField } from 'react-native-material-textfield'
import { VerificationLayout } from './components/VerificationLayout'
import styled from 'styled-components/native'
import { Formik } from 'formik'
import { VerificationContext } from './config/VerificationContext'
import Button from '../../components/Button'
import { customShadowStyle } from '../../properties/customShadowStyle'
import { ButtonWrapper } from './components/ButtonWrapper'

const ContentWrapper = styled.View`
  flex: 1;
  flex-direction: column;
`

const ImagesWrapper = styled.View`
  flex: 1;
  flex-direction: row;
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
    return `${address}, ${city}, ${zip}, ${country}`
  }

  render() {
    return (
      <VerificationContext.Consumer>
        {({ finalise, userDetails, frontImage, backImage, selfie }) => (
          <VerificationLayout>
            <Text style={iOSUIKit.largeTitleEmphasizedWhite}>All done!</Text>
            <Text style={iOSUIKit.subheadEmphasizedWhite}>
              We have everything, just review once more before sending it over
              and saving to digi.me
            </Text>

            <ContentWrapper>
              {frontImage && backImage && selfie ? (
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
              ) : null}

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
                <Text style={human.body}>
                  After we verify your data, digi.me will make sure you never go
                  through this hassle again!
                </Text>

                <Button style={{ marginTop: 20 }} onPress={finalise}>
                  Let's get this over with!
                </Button>
              </ButtonWrapper>
            </ContentWrapper>
          </VerificationLayout>
        )}
      </VerificationContext.Consumer>
    )
  }
}
