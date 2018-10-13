import React from 'react';

export const VerificationContext = React.createContext({
  index: 0,
  goToNextStep: () => {},
  finalise: () => {}
});
