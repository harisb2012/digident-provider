import React from 'react';
import { ScanFrontStep } from './ScanFrontStep';
import { View } from 'react-native';
import { AppLayout } from '../../components/Layout/AppLayout';
import StepIndicator from 'react-native-step-indicator'
import { stepIndicatorStyles } from './config/stepIndicatorStyles';
import styled from 'styled-components/native';
import { ViewPager } from 'rn-viewpager'
import { ScanBackStep } from './ScanBackStep';
import { DetailsStep } from './DetailsStep';
import { SelfieStep } from './SelfieStep';

const StepsIndicatorWrapper = styled.View`
  padding: 15px;
  margin-bottom: 15;
`;

export class VerificationScene extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 0
    };
  }

  get bottomStepsCounter() {
    return (
      <StepsIndicatorWrapper>
        <StepIndicator
          customStyles={stepIndicatorStyles}
          currentPosition={this.state.currentStep}
          stepCount={4}
          labels={['Front', 'Back', 'Details', 'Selfie']}
        />
      </StepsIndicatorWrapper>
    )
  }

  get mainScreen() {
    return (
      <ViewPager
        style={{ flexGrow: 1 }}
        ref={viewPager => {
          this.viewPager = viewPager
        }}
        onPageSelected={page => {
          this.setState({ currentStep: page.position })
        }}
      >
        <View>
          <ScanFrontStep />
        </View>

        <View>
          <ScanBackStep />
        </View>

        <View>
          <DetailsStep />
        </View>

        <View>
          <SelfieStep />
        </View>
      </ViewPager>
    )
  }

  render() {
    return (
      <AppLayout
        bottom={this.bottomStepsCounter}
      >
        {this.mainScreen}
      </AppLayout>
    );
  }
}