import globalImages from './globalImages';
import ImagePicker from 'react-native-image-picker';

/**
 * @description Gets icon for specific sport
 * @param sport {String}
 * @returns {*}
 */
export const displaySportIcon = (sport) => {
  return (sport === 'Track & Field') ? globalImages.trackIcon :
    (sport === 'Football') ? globalImages.footballIcon :
      (sport === 'Hockey') ? globalImages.hockeyIcon :
        (sport === 'Basketball') ? globalImages.basketballIcon :
          (sport === 'Baseball') ? globalImages.baseballIcon : globalImages.soccerIcon;
};

/**
 * @description Uploads image to application
 * @param setProfileImage (function)
 */

export const onPressUploadImage = (setProfileImage) => {
  let options = {
    title: 'Select a Photo',
    maxWidth: 200,
    maxHeight: 200,
    quality: 1,
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

  ImagePicker.showImagePicker(options, (response) => {
    if (response.didCancel) {
      console.log('Cancelled')
    } else if (response.error) {
      console.log('Error: ', response.error)
    } else {
      const source = {uri: response.uri};
      setProfileImage(source)
    }
  });
};
