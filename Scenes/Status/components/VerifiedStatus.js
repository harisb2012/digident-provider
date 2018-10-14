import React from 'react'
import styled from 'styled-components/native'
import { Text, TouchableOpacity } from 'react-native'
import { iOSUIKit } from 'react-native-typography'
import * as routes from '../../../navigation/routes'
import { customShadowStyle } from '../../../properties/customShadowStyle'
import { AnimatedCheckmark } from '../../../components/Animated/AnimatedCheckmark'

const Wrapper = styled.View`
  background: white;
  border-radius: 20;
  text-align: center;
  padding: 20px;
`

const Title = styled.Text`
  text-align: center;
`

export class VerifiedStatus extends React.PureComponent {
  constructor(props) {
    super(props)
    this.goToDetails = this.goToDetails.bind(this)

    this.state = {
      focused: false
    }

    this.props.navigation.addListener('willFocus', () =>
      this.setState({ focused: true })
    )
    this.props.navigation.addListener('willBlur', () =>
      this.setState({ focused: false })
    )
  }

  goToDetails() {
    this.props.navigation.navigate(routes.VERIFICATION_DETAILS)
  }

  render() {
    return (
      <Wrapper style={customShadowStyle}>
        {this.state.focused && <AnimatedCheckmark />}
      </Wrapper>
    )
  }
}
