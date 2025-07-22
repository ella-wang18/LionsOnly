import {Dimensions, Platform} from 'react-native';

const {width, height} = Dimensions.get('window');

const PADDING_TOP = (Platform.OS === 'ios') ? height * 0.04: 0;
const PADDING_BOTTOM = (Platform.OS === 'ios') ? height * 0.02: 0;
const ICON_DIMENSIONS = width * 0.085;

const BLACK = '#211F21';
const WHITE = '#FFFFFF';
const DARK_GREY = '#444444';
const LIGHT_GREY = '#707070';
const BLUE = '#31C2F1';
const ORANGE = '#F7971C';
const PURPLE = '#65499E';
const BLUE_OPACITY = 'rgba(49, 194, 241, 0.50)';
const NOTIFICATIONS_GREY = '#444444';
const NOTIFICATIONS_LIGHT_GREY = '#707070';

module.exports = {
  DEVICE_TYPE: Platform.OS === 'ios',
  SCREEN_SIZE: {
    height,
    width
  },
  TEST: {
    COLORS: {
      yellow: 'rgba(255, 242, 0, 0.50)',
      red: 'rgba(207, 30, 36, 0.50)',
      green: 'rgba(42, 187, 155, 0.50)',
    }
  },
  COLORS: {
    primary: BLUE,
    secondary: ORANGE,
    accent: PURPLE,
    backgroundColor: BLACK,
    white: WHITE,
    blueOpacity: BLUE_OPACITY,
    darkGrey: DARK_GREY,
    lightGrey: LIGHT_GREY,
    notificationsGrey: NOTIFICATIONS_GREY,
    notificationsLightGrey: NOTIFICATIONS_LIGHT_GREY,
  },
  COMMON_STYLES: {
    screenContainer: {
      flex: 1,
      backgroundColor: BLACK
    },
    scrollViewContainer: {
      paddingLeft: width * 0.03,
      paddingRight: width * 0.03,
      paddingTop: PADDING_TOP,
      paddingBottom: PADDING_BOTTOM
    },
    text: {
      color: WHITE,
      fontSize: width * 0.05,
    },
    icon: {
      width: ICON_DIMENSIONS,
      height: ICON_DIMENSIONS,
    }
  }
}
