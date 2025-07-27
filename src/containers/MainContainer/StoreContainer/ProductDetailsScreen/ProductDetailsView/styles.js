import {StyleSheet} from 'react-native';
import globals from '../../../../../util/globalStyles';

const PRIMARY_IMAGE_DIMENSIONS = globals.SCREEN_SIZE.width * 0.75;

const images = {};

const styles = StyleSheet.create({
  headerStyle: {justifyContent: 'flex-start'},
  headerButton: {color: globals.COLORS.secondary, fontWeight: 'bold', marginTop: -30},
  productContainer: {width: '100%', justifyContent: 'center', alignItems: 'center'},
  productLabel: {fontSize: globals.SCREEN_SIZE.width * 0.08, marginBottom: 20, marginTop: -30},
  productImage: {
    width: PRIMARY_IMAGE_DIMENSIONS,
    height: PRIMARY_IMAGE_DIMENSIONS,
    marginBottom: 20,
  },
  priceStyle: {
    color: globals.COLORS.secondary,
    fontSize: globals.SCREEN_SIZE.width * 0.07,
    marginBottom: 20,
  },
  productCountContainer: {
    height: globals.SCREEN_SIZE.height * 0.08,
    width: '65%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  countButtonText: {
    color: globals.COLORS.secondary,
    fontSize: globals.SCREEN_SIZE.width * 0.1
  },
  countContainer: {
    backgroundColor: globals.COLORS.lightGrey,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '60%',
    borderRadius: 15,
    borderColor: globals.COLORS.darkGrey,
    borderWidth: 1,
  },
  count: {color: globals.COLORS.darkGrey},
  buttonContainer: {
    width: globals.SCREEN_SIZE.width,
    position: 'absolute',
    bottom: 0,
  },
});

export {images, styles};
