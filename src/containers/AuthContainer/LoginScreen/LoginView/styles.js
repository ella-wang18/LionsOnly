import {StyleSheet} from 'react-native';
import globalStyles from "../../../../util/globalStyles";

const images = {};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  logo: {
    height: globalStyles.SCREEN_SIZE.width * 0.80,
    width: globalStyles.SCREEN_SIZE.width * 0.70,
    marginTop: globalStyles.SCREEN_SIZE.width * 0.1,
    marginBottom: globalStyles.SCREEN_SIZE.width * 0.1,
  },
});

export {images, styles};
