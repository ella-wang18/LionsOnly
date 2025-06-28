import {StyleSheet} from 'react-native';
import globalStyles from "../../util/globalStyles";
import globalImages from "../../util/globalImages";

const images = {
  usernameIcon: globalImages.usernameIcon,
  passwordIcon: globalImages.passwordIcon,
};

const styles = StyleSheet.create({
  textInputContainer: {
    height: globalStyles.SCREEN_SIZE.width * 0.12,
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: globalStyles.SCREEN_SIZE.width * 0.12,
  },
  textInputContent: {
    alignItems:'flex-end',
    flexDirection: 'row',
    height: '100%',
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: globalStyles.COLORS.secondary,
  },
  textInput: {
    width: '85%',
    paddingBottom: globalStyles.SCREEN_SIZE.width * 0.025,
  },
  iconContainer: {
    width: '15%',
    alignItems: 'flex-end'
  },
  inputIcon: {
    marginBottom: globalStyles.SCREEN_SIZE.width * 0.025,
  }
});

export {images, styles};
