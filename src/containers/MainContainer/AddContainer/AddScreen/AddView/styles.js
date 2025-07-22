import {StyleSheet} from 'react-native';
import globals from "../../../../../util/globalStyles";

const images = {};

const styles = StyleSheet.create({
  container: {flex: 1},
  header: {marginBottom: 40},
  uploadImageButton: {
    backgroundColor: globals.COLORS.accent,
  },
  description: {
    backgroundColor: globals.COLORS.white,
    fontSize: globals.SCREEN_SIZE.width * 0.05,
    height: globals.SCREEN_SIZE.height * 0.30
  },
  addPostButtonContainer: {
    backgroundColor: globals.COLORS.backgroundColor,
    position: 'absolute',
    bottom: 0,
    width: globals.SCREEN_SIZE.width,
  },
  scrollView: {
    paddingBottom: globals.SCREEN_SIZE.height * 0.13
  },
  postImage: {
    width: '100%',
    height: globals.SCREEN_SIZE.height * 0.28,
    marginBottom: 20,
  }
});

export {images, styles};
