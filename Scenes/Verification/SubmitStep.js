import React from 'react'
import { Text, Image } from 'react-native'
import { iOSUIKit, human } from 'react-native-typography'
import { TextField } from 'react-native-material-textfield'
import { VerificationLayout } from './components/VerificationLayout'
import styled from 'styled-components/native'
import { VerificationContext } from './config/VerificationContext'
import Button from '../../components/Button'
import { customShadowStyle } from '../../properties/customShadowStyle'
import { ButtonWrapper } from './components/ButtonWrapper'

const ContentWrapper = styled.View`
  flex: 1;
  flex-direction: column;
`

const ImagesWrapper = styled.View`
  flex-direction: row;
`

const FormWrapper = styled.View`
  background: white;
  border-radius: 15;
  padding: 10px 20px;
  padding-top: 20;
  padding-bottom: 20;
`

const imageStyles = {
  flex: 1,
  width: 100,
  height: 100,
  marginTop: 30,
  borderRadius: 15,
  borderWidth: 2,
  borderColor: '#fff',
  marginRight: 10,
  marginBottom: 20
}

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

              <FormWrapper style={customShadowStyle}>
                <Text style={iOSUIKit.subheadEmphasized}>
                  {userDetails.firstName} {userDetails.lastName}
                </Text>

                <Text style={iOSUIKit.subheadEmphasized}>
                  {this.generateAddress(userDetails)}
                </Text>
              </FormWrapper>

              <ButtonWrapper>
                <Text style={human.body}>
                  After we verify your data, digi.me will make sure you never go
                  through this hassle again!
                </Text>

                <Image
                  resizeMode="contain"
                  style={{ height: 50, alignSelf: 'center', marginTop: 10 }}
                  source={require('./images/digime.png')}
                />

                <Button style={{ marginTop: 30 }} onPress={finalise}>
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
