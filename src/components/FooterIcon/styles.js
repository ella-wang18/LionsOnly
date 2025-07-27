import {StyleSheet} from 'react-native';
import globals from '../../util/globalStyles';

const images = {
  homeIconOn: require('../../assets/images/footer/home-icn-on.png'),
  homeIconOff: require('../../assets/images/footer/home-icn-off.png'),
  storeIconOn: require('../../assets/images/footer/store-icn-on.png'),
  storeIconOff: require('../../assets/images/footer/store-icn-off.png'),
  addIconOn: require('../../assets/images/footer/add-icn-on.png'),
  addIconOff: require('../../assets/images/footer/add-icn-off.png'),
  notificationsIconOn: require('../../assets/images/footer/notification-icn-on.png'),
  notificationsIconOff: require('../../assets/images/footer/notification-icn-off.png'),
  profileIconOn: require('../../assets/images/footer/profile-icn-on.png'),
  profileIconOff: require('../../assets/images/footer/profile-icn-off.png'),
};

const styles = StyleSheet.create({
  tabBarItem: {
    width: globals.SCREEN_SIZE.width * 0.25,
    height: globals.SCREEN_SIZE.height * 0.15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export {images, styles};
