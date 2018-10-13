import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient'

const Wrapper = styled.SafeAreaView`
  flex: 1;
`;

export class AppLayout extends React.PureComponent {
  render() {
    const { bottom } = this.props;

    return (
      <LinearGradient
        colors={['#FC5B63', '#E22D5C']}
        style={{ flex: 1 }}
      >
        <React.Fragment>
          <Wrapper>
            {this.props.children}
          </Wrapper>

          {bottom}
        </React.Fragment>
      </LinearGradient>
    )
  }
}

AppLayout.propTypes = {
  children: PropTypes.any.isRequired,
  bottom: PropTypes.any
};

AppLayout.defaultProps = {
  bottom: null
}
