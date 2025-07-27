import React, {useState} from 'react';
import ImagePicker from 'react-native-image-picker';
import RegistrationView from './RegistrationView';
import {onPressUploadImage} from '../../../util/helpers'

const RegistrationScreen = () => {
  const [profileImage, setProfileImage] = useState(null);

  return (
    <RegistrationView
      profileImage={profileImage}
      onPressUploadImage={() => onPressUploadImage(setProfileImage)}
    />
  );
};

export default RegistrationScreen;

