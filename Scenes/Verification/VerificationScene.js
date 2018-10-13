import React from 'react';
import { ScanFrontStep } from './ScanFrontStep';
import { AppLayout } from '../../components/Layout/AppLayout';
import TestComponent from './TestComponent';

export class VerificationScene extends React.PureComponent {
  render() {
    return (
      <AppLayout>
        {/* <ScanFrontStep /> */}
        <TestComponent />
      </AppLayout>
    );
  }
}