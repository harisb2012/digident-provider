import React from 'react';
import { Text } from 'react-native';
import { iOSUIKit } from 'react-native-typography';
import { VerificationLayout } from './components/VerificationLayout';

export class DetailsStep extends React.PureComponent {
  render() {
    return (
      <VerificationLayout>
        <Text style={iOSUIKit.largeTitleEmphasizedWhite}>Personal Details</Text>        

        <Text
          style={iOSUIKit.subheadEmphasizedWhite}
        >
          Please confirm your personal details
        </Text>
      </VerificationLayout>
    )
  }
}