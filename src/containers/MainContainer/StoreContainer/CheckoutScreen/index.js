import React, {useState} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import CheckoutView from './CheckoutView';
import {addProduct} from '../../../../redux/actions/storeActions';
import {Alert} from "react-native";
import {deleteItem} from "../../../../util/helpers";

const CheckoutScreen = ({storeData, navigation, addProduct}) => {
  const [addressOne, setAddressOne] = useState('');
  const [addressTwo, setAddressTwo] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [customerState, setCustomerState] = useState('');
  const [CVV, setCVV] = useState('');

  const purchaseProducts = () => {
    Alert.alert(
      'Purchase Items?',
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
            addProduct([]);
            navigation.navigate('Store');
          }
        }
      ],
      {cancelable: false}
    );
    addProduct([]);
    navigation.navigate('Store');
  };

  return (
    <CheckoutView
      goBack={() => navigation.goBack()}
      purchaseProducts={purchaseProducts}
      setAddressOne={setAddressOne}
      setAddressTwo={setAddressTwo}
      setCardHolder={setCardHolder}
      setCardNumber={setCardNumber}
      setCustomerState={setCustomerState}
      setCVV={setCVV}
      setMonth={setMonth}
      setYear={setYear}
      setZipCode={setZipCode}
      data={storeData}
      cardHolder={cardHolder}
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
)(CheckoutScreen);
