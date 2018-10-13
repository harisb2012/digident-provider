import React from 'react';
import { Text } from 'react-native';
import { iOSUIKit } from 'react-native-typography';
import { VerificationLayout } from './components/VerificationLayout';
import { DetailsForm } from './forms/DetailsForm';
import styled from 'styled-components/native';

const FormWrapper = styled.View`
  background: white;
  border-radius: 15;
  padding: 10px;
`;

const CenterWrapper = styled.View`
  justify-content: center;
  flex: 1;
`;

const customShadowStyle = {
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 4,
  },
  shadowOpacity: 0.20,
  shadowRadius: 20.65,

  elevation: 8,
};

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

        <CenterWrapper>
          <FormWrapper style={customShadowStyle}>
            <DetailsForm />
          </FormWrapper>
        </CenterWrapper>
      </VerificationLayout>
    )
  }
}