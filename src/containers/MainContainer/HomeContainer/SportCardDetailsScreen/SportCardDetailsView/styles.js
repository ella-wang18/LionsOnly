import {StyleSheet} from 'react-native';
import globals from "../../../../../util/globalStyles";

const images = {
  arrowDown: require('../../../../../assets/images/utils/arrow-down.png'),
};

const profileImageSize = globals.SCREEN_SIZE.width * 0.12

const styles = StyleSheet.create({
  closeButtonContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  closeButton: {
    width: 50,
    height: 50,
  },
  sportContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  image: {width: '100%', marginBottom: 20},
  name: {fontSize: globals.SCREEN_SIZE.width * 0.06, fontWeight: 'bold', marginBottom: 10},
  sport: {marginBottom: 40},
  measurements: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontSize: globals.SCREEN_SIZE.width * 0.06,
    fontWeight: 'bold',
    marginBottom: 10,
    marginRight: 10,
  },
  sharedExperience: {paddingBottom: globals.SCREEN_SIZE.height * 0.10},
  profileImage: {
    width: profileImageSize,
    height: profileImageSize,
    borderRadius: profileImageSize / 2,
  },
});

export {images, styles};
