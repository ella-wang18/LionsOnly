import React, {useState} from 'react';
import ShoppingCartView from './ShoppingCartView';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Alert} from 'react-native';
import {deleteItem} from '../../../../util/helpers';
import {addProduct} from '../../../../redux/actions/storeActions';

const ShoppingCartScreen = ({navigation, storeData, addProduct}) => {
  const [products, setProducts] = useState(storeData);
  let totalCost = 0.00

  if (products?.length > 0) {
    for (let i = 0; i < products.length; i++) {
      let quantity = products[i].count;
      let price = products[i].price.split('$').pop();

      price = Number(price);
      totalCost = totalCost + (price * quantity);
      totalCost = Math.round(totalCost * 100) / 100;
    }
  }
  totalCost = totalCost.toString();

  const deleteProduct = (index) => {
    Alert.alert(
      'Delete Product',
      'Are you sure you want to proceed?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancelled Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            deleteItem(index, products, setProducts);
            addProduct(products);
          }
        }
      ],
      {cancelable: false}
    );
  };

  const goToCheckoutScreen = () => {
    navigation.navigate('Checkout');
  };


  return (
    <ShoppingCartView
      goBack={() => navigation.goBack()}
      storeData={products}
      deleteProduct={deleteProduct}
      totalCost={totalCost}
      goToCheckoutScreen={goToCheckoutScreen}
    />
  );
};

const mapStateToProps = (state, props) => {
  return{
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
)(ShoppingCartScreen);
