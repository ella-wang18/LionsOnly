import React, {useState} from 'react';
import ImagePicker from 'react-native-image-picker';
import RegistrationView from './RegistrationView';

const RegistrationScreen = () => {
  const [profileImage, setProfileImage] = useState(null);

  const onPressUploadImage = () => {
    let options = {
      title: 'Select a Photo',
      maxWidth: 200,
      maxHeight: 200,
      quality: 1,
      storageOptions: {
        skipBackup: true,
        path: 'images'
      }
    }

    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('Cancelled')
      } else if (response.error) {
        console.log('Error: ', response.error)
      } else {
        const source = {uri: response.uri}
        setProfileImage(source)
      }
    })
  }
  return (
    <RegistrationView
      profileImage={profileImage}
      onPressUploadImage={onPressUploadImage}
    />
  );
};

export default RegistrationScreen;
