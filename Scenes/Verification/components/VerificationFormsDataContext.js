import React from 'react';
import PropTypes from 'prop-types';
import { VerificationContext } from '../config/VerificationContext';
import IdentityService from '../../../Services/IdentityService';

export class VerificationFormsDataContext extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    };

    this.setFrontImage = this.setFrontImage.bind(this);
    this.setBackImage = this.setBackImage.bind(this);
    this.setSelfie = this.setSelfie.bind(this);
    this.setUserDetails = this.setUserDetails.bind(this);
  }

  setFrontImage(value) {
    IdentityService.saveFrontImage(value);
    this.setState({
      frontImage: value
    });
  }

  setBackImage(value) {
    IdentityService.saveBackImage(value);
    this.setState({
      backImage: value
    });
  }

  setSelfie(value) {
    IdentityService.saveSelfie(value);
    this.setState({
      selfie: value
    }); 
  }

  setUserDetails(value) {
    IdentityService.saveUserDetails(value);
    this.setState(prev => ({
      userDetails: {
        ...prev.userDetails,
        ...value
      }
    }));
  }

  render() {
    return (
      <VerificationContext.Provider value={{
        ...this.state,
        index: this.props.index,
        goToNextStep: this.props.goToNextStep,
        finalise: this.props.finalise,
        setFrontImage: this.setFrontImage,
        setBackImage: this.setBackImage,
        setSelfie: this.setSelfie,
        setUserDetails: this.setUserDetails
      }}>
        {this.props.children}
      </VerificationContext.Provider>
    )
  }
}

VerificationFormsDataContext.propTypes = {
  goToNextStep: PropTypes.func.isRequired,
  finalise: PropTypes.func.isRequired,
  children: PropTypes.any.isRequired,
  index: PropTypes.number.isRequired
};
