import React from 'react';
import { AppLayout } from '../../components/Layout/AppLayout';
import { iOSUIKit } from 'react-native-typography';

export class VerificationDetailsScene extends React.PureComponent {
  render() {
    return (
      <AppLayout>
        <Text style={iOSUIKit.largeTitleEmphasizedWhite}>Details</Text>
      </AppLayout>
    );
  }
}
