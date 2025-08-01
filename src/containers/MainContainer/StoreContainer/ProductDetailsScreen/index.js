import React, {useState} from 'react';
import {Alert} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ProductDetailsView from './ProductDetailsView';
import {addProduct} from '../../../../redux/actions/storeActions';

const ProductDetailsScreen = ({navigation, route, addProduct, storeData}) => {
  const [count, setCount] = useState(0);

  const decreaseProductQuantity = () => {
    if (count !== 0) {
      setCount(productCount => productCount-1)
    }
  };

  const increasesProductQuantity = () => {
    setCount(productCount => productCount+1)
  };

  const addToCart = () => {

    let cart = {
      image: route.params.primaryImage,
      product: route.params.product,
      price: route.params.price,
      count,
    };
    const cartList = [...storeData, cart];
    addProduct(cartList);

    Alert.alert(
      'Cart Updated'
    );
    navigation.goBack();
  };

  return (
    <ProductDetailsView
      data={route.params}
      count={count}
      decreaseProductQuantity={decreaseProductQuantity}
      increasesProductQuantity={increasesProductQuantity}
      goBack={() => navigation.goBack()}
      addToCart={addToCart}
    />
  );
};

const mapStateToProps = (state, props) => {
  return {
    storeData: state.storeReducer.storeData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addProduct,
  }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductDetailsScreen);
