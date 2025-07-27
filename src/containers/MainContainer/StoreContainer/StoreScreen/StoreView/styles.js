import {StyleSheet} from 'react-native';
import globals from '../../../../../util/globalStyles';

const smallProductDimensions = globals.SCREEN_SIZE.width * 0.35;
const largeProductDimensions = globals.SCREEN_SIZE.width * 0.45;
const countContainer = globals.SCREEN_SIZE.width * 0.08;
const images = {
  shoppingCart: require('../../../../../assets/images/store/shopping-cart-icon.png'),
};

const styles = StyleSheet.create({
  headerStyle: {
    justifyContent: 'space-between',
  },
  largeProductContainer: {
    width: '47%',
  },
  smallProductContainer: {
    height: smallProductDimensions,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  smallProduct: {
    width: smallProductDimensions,
    height: smallProductDimensions,
    marginRight: 20,
  },
  largeProduct: {
    width: largeProductDimensions,
    height: largeProductDimensions,
    marginRight: 20,
  },
  smallProductContent: {
    height: '100%',
    width: '63%',
    justifyContent: 'space-between',
  },
  productDescription: {
    color: globals.COLORS.white,
    fontSize: globals.SCREEN_SIZE.width * 0.044,
    fontWeight: '500',
  },
  numberOfItemsContainer: {
    position: 'absolute',
    width: countContainer,
    height: countContainer,
    borderRadius: countContainer / 2,
    backgroundColor: globals.COLORS.secondary,
    top: -10,
    right: 23,
    justifyContent: 'center',
    alignItems: 'center',
  },
  columnStyle: {
    flex: 1,
    justifyContent: 'space-between',
    marginBottom: 12,
  },
});

export {images, styles};
