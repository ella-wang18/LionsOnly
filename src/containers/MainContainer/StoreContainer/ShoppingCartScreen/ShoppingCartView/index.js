import React from 'react';
import {View, Text, TouchableOpacity, ScrollView, FlatList, Image} from 'react-native';
import ScreenContainer from '../../../../../components/ScreenContainer';
import HeaderContainer from '../../../../../components/HeaderContainer';
import HeaderText from '../../../../../components/HeaderText';
import LabelText from '../../../../../components/LabelText';
import AppText from '../../../../../components/AppText';
import globals from '../../../../../util/globalStyles';
import Button from '../../../../../components/Button';
import {styles} from './styles';
import PropTypes from 'prop-types';

const ShoppingCartView = ({
  goBack,
  storeData,
  deleteProduct,
  totalCost,
  goToCheckoutScreen,
}) => {
  const buttonStyle = storeData?.length === 0 && {backgroundColor: globals.COLORS.lightGrey}

  return (
    <ScreenContainer>
      <ScrollView>
        <HeaderContainer style={styles.headerStyle}>
          <TouchableOpacity onPress={goBack}>
            <AppText style={styles.backButton}>
              Back
            </AppText>
          </TouchableOpacity>
        </HeaderContainer>
        <HeaderText>Your Cart</HeaderText>
        {storeData?.length > 0 ? (
          <FlatList
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.flatList}
            data={storeData}
            keyExtractor={item => item.id}
            renderItem={({item, index}) => {
              return (
                <View style={styles.productContainer}>
                  <View style={styles.productContent}>
                    <Image source={item.image} style={styles.productImage}/>
                    <View>
                      <LabelText>{item.product}</LabelText>
                      <View style={styles.priceContainer}>
                        <AppText style={styles.price}>
                          {item.price}
                        </AppText>
                        <AppText style={styles.quantity}>{`Qty.${item.count}`}</AppText>
                      </View>
                    </View>

                  </View>
                  <TouchableOpacity
                    style={styles.deleteButton}
                    onPress={() => deleteProduct(index)}
                  >
                    <LabelText>X</LabelText>
                  </TouchableOpacity>
                </View>
              )
            }}
          />
        ) : (
          <View style={styles.emptyScreenContainer}>
            <HeaderText style={styles.emptyScreenText}>Empty</HeaderText>
          </View>
        )}
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Button
          label={`CHECK OUT: $${totalCost}`}
          style={[{marginBottom: 0,}, buttonStyle]}
          disabled={storeData?.length === 0}
          onPress={goToCheckoutScreen}
        />
      </View>
    </ScreenContainer>
  );
};

ShoppingCartView.propTypes = {
  goBack: PropTypes.func,
  storeData: PropTypes.array,
  deleteProduct: PropTypes.func,
  totalCost: PropTypes.string,
  goToCheckoutScreen: PropTypes.func,
};

export default ShoppingCartView;
