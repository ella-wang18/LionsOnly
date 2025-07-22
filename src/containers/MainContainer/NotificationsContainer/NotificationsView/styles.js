import {StyleSheet} from 'react-native';
import globals from "../../../../util/globalStyles";

const images = {};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 70,
    backgroundColor: globals.COLORS.notificationsGrey,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    borderBottomColor: globals.COLORS.notificationsLightGrey,
    borderBottomWidth: 1,
    justifyContent: 'space-between',
  },
  text: {fontSize: globals.SCREEN_SIZE.width * 0.04}
});

export {images, styles};
