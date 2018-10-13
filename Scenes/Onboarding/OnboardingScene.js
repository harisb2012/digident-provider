import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider'
import LinearGradient from 'react-native-linear-gradient'
import { iOSUIKit } from 'react-native-typography'

import * as routes from '../../navigation/routes'

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  appName: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  stepWrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  linearGradient: {
    flex: 1
  },
  image: { height: 200 },
  textHeadline: {
    lineHeight: 30,
    fontSize: 20,
    textAlign: 'center',
    margin: 50
  }
})

const slides = [
  {
    key: 'documents',
    text: 'You verify your identity by submitting documents',
    image: require('./illustrations/documents.png')
  },
  {
    key: 'selfie',
    text: 'You take a selfie with the submitted documents',
    image: require('./illustrations/selfie.png')
  },
  {
    key: 'verify',
    text: 'DigIDENT matches your photo and documents, verifying you are real',
    image: require('./illustrations/verify.png')
  },
  {
    key: 'digime',
    text: 'Now you can use your identity to unlock hundreds of other apps',
    image: require('./illustrations/digime.png')
  }
]

export class OnboardingScene extends React.PureComponent {
  _renderSlide({ width, image, text }) {
    return (
      <View style={[styles.stepWrap, { width }]}>
        <Image source={image} style={styles.image} resizeMode="contain" />
        <Text style={[iOSUIKit.bodyEmphasizedWhite, styles.textHeadline]}>
          {text}
        </Text>
      </View>
    )
  }

  _onDone = () => {
    this.props.navigation.navigate(routes.ROOT_APP)
  }

  render() {
    return (
      <LinearGradient
        colors={['#FC5B63', '#E22D5C']}
        style={styles.linearGradient}
      >
        <SafeAreaView style={styles.wrapper}>
          <View style={styles.appName}>
            <Text style={iOSUIKit.calloutWhite}>welcome to</Text>
            <Text style={iOSUIKit.largeTitleEmphasizedWhite}>DigIDENT</Text>
          </View>
          <AppIntroSlider
            showSkipButton
            slides={slides}
            renderItem={this._renderSlide}
            onDone={this._onDone}
          />
        </SafeAreaView>
      </LinearGradient>
    )
  }
}
