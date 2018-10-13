import React from 'react';
import { Text } from 'react-native';
import { AppLayout } from '../../components/Layout/AppLayout';
import { iOSUIKit } from 'react-native-typography';
import { VerificationLayout } from './components/VerificationLayout';

export class VerificationDetailsScene extends React.PureComponent {
  render() {
    return (
      <AppLayout>
        <VerificationLayout>
          <Text style={iOSUIKit.largeTitleEmphasizedWhite}>Details</Text>
        </VerificationLayout>
      </AppLayout>
    );
  }
}
