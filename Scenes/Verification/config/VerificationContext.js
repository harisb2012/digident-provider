import React from 'react';

export const VerificationContext = React.createContext({
  index: 0,
  goToNextStep: () => {},
  finalise: () => {},
  setFrontImage: () => {},
  setBackImage: () => {},
  setSelfie: () => {},
  setUserDetails: () => {},

  frontImage: '',
  backImage: '',
  selfie: '',
  userDetails: {
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    country: '',
    zip: ''
  }
});
