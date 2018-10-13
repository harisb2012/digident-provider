import React from 'react'
import styled from 'styled-components/native'
import { Text } from 'react-native'
import { iOSUIKit } from 'react-native-typography'
import * as routes from '../../../navigation/routes'
import { customShadowStyle } from '../../../properties/customShadowStyle'
import Button from '../../../components/Button'

const Wrapper = styled.View`
  background: white;
  border-radius: 20;
  text-align: center;
  padding: 20px;
`

const Title = styled.Text`
  text-align: center;
`

const ButtonWrapper = styled.View`
  margin-top: 20;
`

export class NotVerifiedStatus extends React.PureComponent {
  constructor(props) {
    super(props)
    this.startVerification = this.startVerification.bind(this)
  }

  startVerification() {
    this.props.navigation.navigate(routes.VERIFICATION)
  }

  render() {
    return (
      <Wrapper style={customShadowStyle}>
        <Title style={iOSUIKit.title3Emphasized}>You are not verified</Title>

        <ButtonWrapper>
          <Button onPress={this.startVerification}>Get Verified</Button>
        </ButtonWrapper>
      </Wrapper>
    )
  }
}
