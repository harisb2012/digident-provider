import React from 'react';
import { Text } from 'react-native';
import { iOSUIKit } from 'react-native-typography';
import { VerificationLayout } from './components/VerificationLayout';
import { DetailsForm } from './forms/DetailsForm';
import styled from 'styled-components/native';
import ButtonComponent from 'react-native-button-component';
import { customShadowStyle } from '../../properties/customShadowStyle';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const FormWrapper = styled.View`
  background: white;
  border-radius: 15;
  padding: 10px;
`;

const CenterWrapper = styled.View`
  justify-content: center;
  flex: 1;
`;

const ButtonWrapper = styled.View`
  padding-top: 20;
`;

const contentContainerStyle = {
  flexGrow: 1,
  justifyContent: 'center'
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

        <KeyboardAwareScrollView contentContainerStyle={contentContainerStyle}>
          <FormWrapper style={customShadowStyle}>
            <DetailsForm />
          </FormWrapper>

          <ButtonWrapper>
            <ButtonComponent
              backgroundColors={['#03a49c', '#03a49c']}
              text="Next"
            />
          </ButtonWrapper>
        </KeyboardAwareScrollView>
      </VerificationLayout>
    )
  }
}