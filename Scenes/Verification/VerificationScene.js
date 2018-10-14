import React from 'react'
import { ScanFrontStep } from './ScanFrontStep'
import { View, Animated } from 'react-native'
import { AppLayout } from '../../components/Layout/AppLayout'
import { ScanBackStep } from './ScanBackStep'
import { DetailsStep } from './DetailsStep'
import { SelfieStep } from './SelfieStep'
import { SubmitStep } from './SubmitStep'
import { iOSUIKit } from 'react-native-typography'

import { flatten } from 'lodash'

import { TabView, TabBar, SceneMap, PagerScroll } from 'react-native-tab-view'
import { VerificationContext } from './config/VerificationContext'
import { VerificationFormsDataContext } from './components/VerificationFormsDataContext';

const styles = {
  tabbar: {
    backgroundColor: 'transparent'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  indicator: {
    width: 24,
    height: 24,
    borderRadius: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.3)'
  }
}

export class VerificationScene extends React.Component {
  constructor(props) {
    super(props)

    this._goToNext = this._goToNext.bind(this)
    this._finalise = this._finalise.bind(this)

    this.state = {
      index: 0,
      routes: [
        { key: 'front', title: '1' },
        { key: 'back', title: '2' },
        { key: 'details', title: '3' },
        { key: 'selfie', title: '4' },
        { key: 'submit', title: '5' }
      ]
    }
  }

  _finalise() {
    alert('To be implemented')
  }

  _goToNext() {
    this.setState(prev => ({ index: prev.index + 1 }))
  }

  _handleIndexChange = index => {
    this.setState({ index })
  }

  _renderScene = SceneMap({
    front: ScanFrontStep,
    back: ScanBackStep,
    details: DetailsStep,
    selfie: SelfieStep,
    submit: SubmitStep
  })

  _renderTabBar = props => (
    <TabBar
      {...props}
      renderIndicator={this._renderIndicator}
      labelStyle={iOSUIKit.bodyEmphasizedWhite}
      style={styles.tabbar}
    />
  )

  _renderIndicator = props => {
    const { width, position } = props
    const inputRange = flatten(
      this.state.routes.map((_, i) => [
        i,
        i + 0.48,
        i + 0.49,
        i + 0.51,
        i + 0.52
      ])
    )

    const scale = position.interpolate({
      inputRange,
      outputRange: inputRange.map(x => (Math.trunc(x) === x ? 2 : 0.1))
    })

    const translateX = position.interpolate({
      inputRange: inputRange,
      outputRange: inputRange.map(x => Math.round(x) * width)
    })

    return (
      <Animated.View
        style={[styles.container, { width, transform: [{ translateX }] }]}
      >
        <Animated.View style={[styles.indicator, { transform: [{ scale }] }]} />
      </Animated.View>
    )
  }

  _renderPager = props => <PagerScroll swipeEnabled={false} {...props} />

  render() {
    return (
      <AppLayout>
        <VerificationFormsDataContext
          goToNextStep={this._goToNext}
          finalise={this._finalise}
        >
          <TabView
            scrollEnabled={false}
            style={{ flex: 1 }}
            navigationState={this.state}
            renderScene={this._renderScene}
            renderTabBar={this._renderTabBar}
            renderPager={this._renderPager}
            onIndexChange={this._handleIndexChange}
            tabBarPosition="bottom"
          />
        </VerificationFormsDataContext>
      </AppLayout>
    )
  }
}
