import {StyleSheet} from 'react-native';
import globals from "../../util/globalStyles";

const images = {};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: globals.COLORS.primary,
    width: '100%',
    height: globals.SCREEN_SIZE.width * 0.20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  buttonLabel: {
    fontSize: globals.SCREEN_SIZE.width * 0.075,
    fontWeight: 'bold'
  }
});

export {images, styles};
