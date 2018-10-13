import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import * as routes from '../../navigation/routes';

const Wrapper = styled.View`
  flex: 1;
`;

const Text = styled.Text``;

export class StatusScene extends React.PureComponent {
  constructor(props) {
    super(props);
    this.startVerification = this.startVerification.bind(this);
  }

  startVerification() {
    this.props.navigation.navigate(routes.VERIFICATION)
  }

  render() {
    return (
      <Wrapper>
        <TouchableOpacity onPress={this.startVerification}>
          <Text>Start verification</Text>
        </TouchableOpacity>
      </Wrapper>
    );
  }
}
