import {StyleSheet} from 'react-native';
import globals from "../../../../../util/globalStyles";

const imageDimensions = globals.SCREEN_SIZE.width * 0.25;
const buttonRadius = globals.SCREEN_SIZE.width * 0.13;

const images = {};

const styles = StyleSheet.create({
  headerStyle: {justifyContent: 'flex-start'},
  backButton: {fontWeight: 'bold', color: globals.COLORS.secondary},
  emptyScreenContainer: {
    width: '100%',
    height: globals.SCREEN_SIZE.height * 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyScreenText: {
    fontSize: globals.SCREEN_SIZE.width * 0.2,
    fontWeight: '300',
  },
  buttonContainer: {
    width: globals.SCREEN_SIZE.width,
    backgroundColor: globals.COLORS.backgroundColor,
    position: 'absolute',
    bottom: 0,
  },
  productContainer: {
    width: '100%',
    height: globals.SCREEN_SIZE.width * 0.25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    paddingRight: 10,
  },
  productContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  productImage: {
    width: imageDimensions,
    height: imageDimensions,
    marginRight: 10,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    marginRight: 10,
    color: globals.COLORS.secondary,
  },
  quantity: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  deleteButton: {
    width: buttonRadius,
    height: buttonRadius,
    borderRadius: buttonRadius / 2,
    backgroundColor: globals.COLORS.secondary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flatList: {
    width: '100%',
    paddingBottom: globals.SCREEN_SIZE.height * 0.25,
  },
});

export {images, styles};
