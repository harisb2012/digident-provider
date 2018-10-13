import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import * as routes from '../../navigation/routes';
import { AppLayout } from '../../components/Layout/AppLayout';
import { StatusLayout } from './StatusLayout';
import { iOSUIKit } from 'react-native-typography';
import { NotVerifiedStatus } from './components/NotVerifiedStatus';

const Wrapper = styled.View`
  flex: 1;
`;

const Text = styled.Text``;

const DataWrapper = styled.View`
  flex: 1;
  justify-content: center;
`;

export class StatusScene extends React.PureComponent {
  get isVerified() {
    return false;
  }

  get verifiedContent() {}

  render() {
    return (
      <AppLayout>
        <StatusLayout>
          <Wrapper>
            <Text style={iOSUIKit.largeTitleEmphasizedWhite}>Identity</Text>
        
            <DataWrapper>
              <NotVerifiedStatus {...this.props} />
            </DataWrapper>
            
          </Wrapper>
        </StatusLayout>
      </AppLayout>
    );
  }
}
