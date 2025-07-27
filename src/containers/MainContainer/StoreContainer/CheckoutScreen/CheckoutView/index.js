import React from 'react';
import {View, Text, FlatList, Image, ScrollView, TouchableOpacity} from 'react-native';
import ScreenContainer from '../../../../../components/ScreenContainer';
import HeaderContainer from '../../../../../components/HeaderContainer';
import HeaderText from '../../../../../components/HeaderText';
import LabelText from '../../../../../components/LabelText';
import AppText from '../../../../../components/AppText';
import globals from '../../../../../util/globalStyles';
import AppTextInput from "../../../../../components/AppTextInput";
import Button from "../../../../../components/Button";
import {styles} from './styles';
import PropTypes from 'prop-types';



const CheckoutView = ({
  goBack,
  data,
  setCardHolder,
  setCardNumber,
  setMonth,
  setYear,
  setCVV,
  setAddressOne,
  setAddressTwo,
  setCustomerState,
  setZipCode,
  purchaseProducts,
  cardHolder,
}) => {

  return (
    <ScreenContainer>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}
      >
        <HeaderContainer style={styles.headerStyle}>
          <TouchableOpacity onPress={goBack}>
            <AppText style={styles.headerLabel}>
              Back
            </AppText>
          </TouchableOpacity>
          <AppText style={styles.headerLabel}>
            Back
          </AppText>
        </HeaderContainer>
        <HeaderText>Your Cart</HeaderText>
        <LabelText>Your purchase items</LabelText>
        <FlatList
          style={styles.flatList}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={data}
          keyExtractor={item => item.id}
          renderItem={({item, index}) => {
            return (
              <Image
                source={item.image}
                style={styles.productImage}
              />
            );
          }}
        />
        <LabelText style={styles.labelText}>Payment Method</LabelText>
        <AppTextInput
          label={'Card Holder'}
          value={cardHolder}
          setTextValue={setCardHolder}
        />
        <AppTextInput label={'Card Number'} setTextValue={setCardNumber}/>
        <View style={styles.formContainer}>
          <AppTextInput
            cardNumber
            label={'MM'}
            style={styles.cardInput}
            setTextValue={setMonth}
          />
          <AppTextInput
            cardNumber
            label={'YY'}
            style={styles.cardInput}
            setTextValue={setYear}
          />
          <AppTextInput
            cardNumber
            label={'CVV'}
            style={styles.cardInput}
            setTextValue={setCVV}
          />
        </View>


        <LabelText style={styles.labelText}>Shipping Address</LabelText>
        <AppTextInput label={'Address line 1'} setTextValue={setAddressOne}/>
        <AppTextInput label={'Address line 2'} setTextValue={setAddressTwo}/>
        <View style={styles.formContainer}>
          <AppTextInput
            label={'State'}
            style={styles.locationInput}
            setTextValue={setCustomerState}
          />
          <AppTextInput
            label={'Zip Code'}
            style={styles.locationInput}
            setTextValue={setZipCode}
          />
        </View>
      </ScrollView>
      <View style={styles.purchaseButtonContainer}>
        <Button
          label={'PURCHASE'}
          style={styles.purchaseButton}
          onPress={purchaseProducts}
        />
      </View>
    </ScreenContainer>
  );
};

CheckoutView.propTypes = {
  cardHolder: PropTypes.string,
  data: PropTypes.object,
  setCardHolder: PropTypes.func,
  setCardNumber: PropTypes.func,
  setMonth: PropTypes.func,
  setYear: PropTypes.func,
  setCVV: PropTypes.func,
  setAddressOne: PropTypes.func,
  setAddressTwo: PropTypes.func,
  setCustomerState: PropTypes.func,
  setZipCode: PropTypes.func,
  purchaseProducts: PropTypes.func,
  goBack: PropTypes.func,
};

export default CheckoutView;
