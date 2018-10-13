import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import * as routes from '../../navigation/routes';
import { AppLayout } from '../../components/Layout/AppLayout';

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
      <AppLayout>
        <Wrapper>
          <TouchableOpacity onPress={this.startVerification}>
            <Text>Start verification</Text>
          </TouchableOpacity>
        </Wrapper>
      </AppLayout>
    );
  }
}
