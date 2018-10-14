import React from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import Animation from 'lottie-react-native';
import styled from 'styled-components/native';

const checkedDone = require('../../animations/checked_done.json');

const viewport = Dimensions.get('window');
const styles = StyleSheet.create({
  checkedDone: {
    width: viewport.width,
    height: viewport.width,
  },
});

const Wrapper = styled.View`
  justify-content: center;
  align-items: center;
`;

export class AnimatedCheckmark extends React.Component {
  componentDidMount() {
    this.animationCheckedDone.play();
  }

  render() {
    return (
      <Wrapper>
        <Animation
          ref={(animation) => this.animationCheckedDone = animation}
          loop={false}
          style={styles.checkedDone}
          source={checkedDone}
        />
      </Wrapper>
    )
  }
}