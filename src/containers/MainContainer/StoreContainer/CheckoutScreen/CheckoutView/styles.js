import {StyleSheet} from 'react-native';
import globals from "../../../../../util/globalStyles";

const imageDimensions = globals.SCREEN_SIZE.width * 0.25;

const images = {};

const styles = StyleSheet.create({
  scrollView: {
    paddingBottom: globals.SCREEN_SIZE.height * 0.10,
  },
  headerStyle: {justifyContent: 'flex-start'},
  headerLabel: {color: globals.COLORS.secondary, fontWeight: 'bold'},
  flatList: {
    marginBottom: 40
  },
  productImage: {
    marginRight: 10,
    height: imageDimensions,
    width: imageDimensions,
  },
  labelText: {
    marginBottom: 20,
  },
  formContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  cardInput: {
    width: '28%',
  },
  locationInput: {
    width: '45%',
  },
  purchaseButtonContainer: {
    width: globals.SCREEN_SIZE.width,
    position: 'absolute',
    bottom: 0,
  },
  purchaseButton: {
    marginBottom: 0,
  },
});

export {images, styles};
