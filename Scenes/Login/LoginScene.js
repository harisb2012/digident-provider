import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';
import { AppLayout } from '../../components/Layout/AppLayout';
import { iOSUIKit } from 'react-native-typography';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Formik } from 'formik';
import { customShadowStyle } from '../../properties/customShadowStyle';
import { TextField } from 'react-native-material-textfield';
import Button from '../../components/Button';

const LoginLayout = styled.View`
  flex: 1;
  padding: 20px;
`;

const contentContainerStyle = {
  flexGrow: 1,
  justifyContent: 'center'
}

const FormWrapper = styled.View`
  background: white;
  border-radius: 15;
  padding: 10px 20px;
  flex: 1;
`

const ButtonWrapper = styled.View`
  margin: 10px 0;
`

export class LoginScene extends React.PureComponent {
  render() {
    return (
      <AppLayout>
        <LoginLayout>
          <Text style={iOSUIKit.largeTitleEmphasizedWhite}>Login</Text>
          <Text style={iOSUIKit.subheadEmphasizedWhite}>
            Log in to begin you identification journey!
          </Text>

          <KeyboardAwareScrollView
            contentContainerStyle={{contentContainerStyle}}
          >
            <FormWrapper
              style={customShadowStyle}
            >
              <Formik

              >
                {({ handleChange, handleSubmit, values }) => (
                  <View>
                    <TextField
                      label='Email'
                      onChangeText={handleChange('email')}
                    />

                    <TextField
                      label='Password'
                      secureTextEntry
                      onChangeText={handleChange('password')}
                    />

                    <ButtonWrapper>
                      <Button
                        onPress={() => {
                          this.form.submit()
                        }}
                      >
                        Continue
                      </Button>
                    </ButtonWrapper>
                  </View>
                )}
              </Formik>
            </FormWrapper>
          </KeyboardAwareScrollView>
        </LoginLayout>
      </AppLayout>
    )
  }
}