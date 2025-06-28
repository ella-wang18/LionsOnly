import {StyleSheet} from 'react-native';
import globals from "../../../../util/globalStyles";

const images = {};

const styles = StyleSheet.create({
  profileImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: globals.SCREEN_SIZE.height * 0.04
  },
  profileImage: {
    borderRadius: 10,
    width: globals.SCREEN_SIZE.height * 0.16,
    height: globals.SCREEN_SIZE.height * 0.16,
  }
});

export {images, styles};
