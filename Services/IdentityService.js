import { AsyncStorage } from 'react-native';

const FRONT_IMAGE_KEY = 'FRONT_IMAGE'
const BACK_IMAGE_KEY = 'BACK_IMAGE'
const SELFIE_KEY = 'SELFIE_IMAGE'
const USER_DETAILS_KEY = 'USER_DETAILS'

const getFrontImage = value => {
  return AsyncStorage.getItem(FRONT_IMAGE_KEY)
}

const getBackImage = value => {
  return AsyncStorage.getItem(BACK_IMAGE_KEY)
}

const getSelfie = value => {
  return AsyncStorage.getItem(SELFIE_KEY)
}

const getUserDetails = value => {
  return AsyncStorage.getItem(USER_DETAILS_KEY)
}

const saveFrontImage = value => {
  return AsyncStorage.setItem(FRONT_IMAGE_KEY, value)
}

const saveBackImage = value => {
  return AsyncStorage.setItem(BACK_IMAGE_KEY, value)
}

const saveSelfie = value => {
  return AsyncStorage.setItem(SELFIE_KEY, value)
}

const saveUserDetails = value => {
  return AsyncStorage.setItem(USER_DETAILS_KEY, JSON.stringify(value))
}

const getIdentity = () => {
  return AsyncStorage.multiGet(
    [
      FRONT_IMAGE_KEY,
      BACK_IMAGE_KEY,
      SELFIE_KEY,
      USER_DETAILS_KEY
    ]
  ).then((err, results) => {
    const frontValue = results[0][1];
    const backValue = results[0][1];
    const selfieValue = results[0][1];
    const userDetailsValue = results[0][1];

    if (!frontValue || !backValue || !selfieValue || !userDetailsValue) return null;

    return {
      frontImage: frontValue,
      backImage: backValue,
      selfie: selfieValue,
      userDetails: JSON.parse(userDetailsValue)
    };
  });
};

export default {
  saveFrontImage,
  saveBackImage,
  saveSelfie,
  saveUserDetails,
  getIdentity,

  getFrontImage,
  getBackImage,
  getSelfie,
  getUserDetails
};
