import React from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider'
import LinearGradient from 'react-native-linear-gradient'

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  image: {
    width: 320,
    height: 320
  },
  linearGradient: {
    flex: 1
  }
})

const slides = [
  // {key: 'checklist', text: 'You provide personal documents to DigIDENT', image: require('')},
  {
    key: 'somethun',
    title: 'Title 1',
    text: 'Description.\nSay something cool',
    // image: require('./assets/1.jpg'),
    imageStyle: styles.image,
    backgroundColor: '#59b2ab'
  },
  {
    key: 'somethun-dos',
    title: 'Title 2',
    text: 'Other cool stuff',
    // image: require('./assets/2.jpg'),
    imageStyle: styles.image,
    backgroundColor: '#febe29'
  },
  {
    key: 'somethun1',
    title: 'Rocket guy',
    text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
    // image: require('./assets/3.jpg'),
    imageStyle: styles.image,
    backgroundColor: '#22bcb5'
  },
  {
    key: 'somethun2',
    title: 'Rocket guy2',
    text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
    // image: require('./assets/3.jpg'),
    imageStyle: styles.image,
    backgroundColor: '#22bcb5'
  }
]

export class OnboardingScene extends React.PureComponent {
  _renderSlide({ width, height }) {
    return (
      <LinearGradient
        colors={['#FC5B63', '#E22D5C']}
        style={[styles.linearGradient, { width, height }]}
      >
        <SafeAreaView style={styles.wrapper}>
          <Text style={styles.buttonText}>Sign in with Facebook</Text>
        </SafeAreaView>
      </LinearGradient>
    )
  }

  render() {
    return (
      <AppIntroSlider
        showSkipButton
        slides={slides}
        renderItem={this._renderSlide}
        onDone={this._onDone}
      />
    )
  }
}
