import React from 'react'
import { Formik } from 'formik'
import { TextField } from 'react-native-material-textfield';
import styled from 'styled-components/native';

const Wrapper = styled.View`

`;

export class DetailsForm extends React.Component {
  render() {
    return (
      <Formik
        onSubmit={values => {
          Keyboard.dismiss()
        }}
      >
        {({ handleChange, handleSubmit, values }) => (
          <Wrapper>
            <TextField
              label='First Name'
              onChangeText={handleChange('firstName')}
            />

            <TextField
              label='Last Name'
              onChangeText={handleChange('lastName')}
            />

            <TextField
              label='Address'
              onChangeText={handleChange('address')}
            />

            <TextField
              label='City'
              onChangeText={handleChange('city')}
            />

            <TextField
              label='ZIP Code'
              onChangeText={handleChange('zip')}
            />

            <TextField
              label='Country'
              onChangeText={handleChange('city')}
            />
          </Wrapper>
        )}
      </Formik>
    )
  }
}
