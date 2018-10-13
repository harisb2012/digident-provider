import { AsyncStorage } from 'react-native';

const IDENTITY_KEY = 'IDENTITY';

const saveIdentity = ({
  frontImageUrl, 
  backImageUrl, 
  selfieUrl,
  userDetails
}) => {
  return AsyncStorage.setItem(IDENTITY_KEY, {
    frontImageUrl,
    backImageUrl,
    selfieUrl,
    userDetails
  });
}

const getIdentity = () => {
  return AsyncStorage.getItem(IDENTITY_KEY).then(text => JSON.parse(text));
}

export default {
  saveIdentity,
  getIdentity
};
