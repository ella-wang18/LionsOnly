import React, {useState, useEffect} from 'react';
import StoreView from './StoreView';
import {products} from '../../../../util/data';
import {connect} from 'react-redux';
import cloneDeep from 'lodash/cloneDeep';

const StoreScreen = ({navigation, storeData}) => {
  const [items, setItems] =useState([]);

  useEffect(() => {
    navigation.addListener('focus', () => {
      let newItems = cloneDeep(storeData);
      setItems(newItems);
    });
  }, [navigation, storeData]);

  let numberOfItemsInCart = (items?.length > 0) ? items.length.toString() : undefined;

  let smallProducts = [];
  for (let i = 0; i < 2; i++) {
    smallProducts.push(products[i]);
  }

  let largeProducts = [];
  for (let i = 2; i < products.length; i++) {
    largeProducts.push(products[i]);
  }

  const goToProductDetailsScreen = (product) => {
    navigation.navigate('ProductDetails', product);
  };

  const goToShoppingCart = () => {
    navigation.navigate('ShoppingCart');
  };

  return (
    <StoreView
      smallProducts={smallProducts}
      largeProducts={largeProducts}
      goToProductDetailsScreen={goToProductDetailsScreen}
      numberOfItemsInCart={numberOfItemsInCart}
      goToShoppingCart={goToShoppingCart}
    />
  );
};

const mapStateToProps = (state, props) => {
  return {
    storeData: state.storeReducer,
  };
};

export default connect(
  mapStateToProps,
)(StoreScreen);
