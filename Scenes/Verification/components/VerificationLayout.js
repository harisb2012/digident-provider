import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';

const Wrapper = styled.View`
  flex: 1;
  padding: 20px;
`;

export class VerificationLayout extends React.PureComponent {
  render() {
    return (
      <Wrapper>
        {this.props.children}
      </Wrapper>
    )
  }
}

VerificationLayout.propTypes = {
  children: PropTypes.any.isRequired
};
