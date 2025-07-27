import globalImages from './globalImages';
import {launchImageLibrary} from 'react-native-image-picker';
import cloneDeep from 'lodash/cloneDeep';

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

  launchImageLibrary(options, (response) => {
    if (response.didCancel) {
      console.log('Cancelled')
    } else if (response.errorCode) {
      console.log('Error: ', response.errorMessage);
    } else {
      const source = {uri: response.assets[0].uri};
      setProfileImage(source);
    }
  });
};
/**
 * @description Deletes item and re-renders components
 * @param index
 * @param array
 * @param setArray
 */
export const deleteItem = (index, array, setArray) => {
  if (index > -1) {
    array.splice(index, 1);
  }
  let newNotifications = cloneDeep(array);

  setArray(newNotifications);
};

