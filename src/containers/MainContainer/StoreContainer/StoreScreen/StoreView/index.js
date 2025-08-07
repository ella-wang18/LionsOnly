import React from 'react';
import {Image, TouchableOpacity, FlatList, View} from 'react-native';
import ScreenContainer from '../../../../../components/ScreenContainer';
import HeaderContainer from '../../../../../components/HeaderContainer';
import AppText from '../../../../../components/AppText';
import {styles, images} from './styles';
import SmallProduct from "./SmallProduct";
import LargeProduct from "./LargeProduct";
import globals from '../../../../../util/globalStyles';
import PropTypes from 'prop-types';

const StoreView = ({
  smallProducts,
  largeProducts,
  goToProductDetailsScreen,
  numberOfItemsInCart,
  goToShoppingCart,
}) => {
  return (
    <ScreenContainer
      isScrollable
      contentContainerStyle={{paddingBottom: globals.SCREEN_SIZE.height * 0.1}}
    >
      <HeaderContainer style={styles.headerStyle}>
        <AppText></AppText>
        <TouchableOpacity onPress={goToShoppingCart}>
          <Image source={images.shoppingCart} />
          {(numberOfItemsInCart !== undefined && numberOfItemsInCart !== '0') && (
            <View style={styles.numberOfItemsContainer}>
              <AppText>
                {numberOfItemsInCart}
              </AppText>
            </View>
          )}
        </TouchableOpacity>
      </HeaderContainer>
      {
        smallProducts?.length > 0 && (
          smallProducts.map((product, i) => {
            return (
              <SmallProduct
                key={i}
                data={product}
                goToProductDetailsScreen={() => goToProductDetailsScreen(product)}
              />
            );
          })
        )
      }
      {
        largeProducts?.length > 0 && (
          <FlatList
            columnWrapperStyle={styles.columnStyle}
            horizontal={false}
            numColumns={2}
            data={largeProducts}
            showsVerticalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <LargeProduct
                  data={item}
                  key={index}
                  goToProductDetailsScreen={() => goToProductDetailsScreen(item)}
                />
              )
            }}
          />
        )
      }
    </ScreenContainer>
  );
};

StoreView.propTypes = {
  smallProducts: PropTypes.array,
  largeProducts: PropTypes.array,
  goToProductDetailsScreen: PropTypes.func,
  numberOfItemsInCart: PropTypes.string,
  goToShoppingCart: PropTypes.func,
};

export default StoreView;
