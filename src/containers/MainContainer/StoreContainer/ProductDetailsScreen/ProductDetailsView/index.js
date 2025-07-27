import React from 'react';
import {View, Image, TouchableOpacity, ScrollView} from 'react-native';
import ScreenContainer from '../../../../../components/ScreenContainer';
import HeaderContainer from '../../../../../components/HeaderContainer';
import LabelText from '../../../../../components/LabelText';
import AppText from '../../../../../components/AppText';
import globals from '../../../../../util/globalStyles';
import {styles} from './styles';
import Button from '../../../../../components/Button';

const ProductDetailsView = ({
  data,
  count,
  decreaseProductQuantity,
  increasesProductQuantity,
  goBack,
  addToCart,
}) => {
  const buttonStyle = count === 0 && {backgroundColor: globals.COLORS.lightGrey}
  return (
    <ScreenContainer>
      <ScrollView>
        <HeaderContainer style={styles.headerStyle}>
          <TouchableOpacity onPress={goBack}>
            <AppText style={styles.headerButton}>
              Close
            </AppText>
          </TouchableOpacity>
        </HeaderContainer>
        <View style={styles.productContainer}>
          <LabelText style={styles.productLabel}>
            {data.product}
          </LabelText>
          <Image source={data.primaryImage} style={styles.productImage}/>
          <AppText style={styles.priceStyle}>
            {data.price}
          </AppText>
          <View style={styles.productCountContainer}>
            <TouchableOpacity onPress={decreaseProductQuantity}>
              <LabelText style={styles.countButtonText}>
                -
              </LabelText>
            </TouchableOpacity>
            <View style={styles.countContainer}>
              <LabelText styles={styles.count}>{count}</LabelText>
            </View>
            <TouchableOpacity onPress={increasesProductQuantity}>
              <LabelText style={styles.countButtonText}>+</LabelText>
            </TouchableOpacity>
          </View>
          <AppText>
            {data.description}
          </AppText>
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Button
          label={'ADD TO CART'}
          style={[{marginBottom: 0}, buttonStyle]}
          onPress={addToCart}
          disabled={count === 0}
        />
      </View>
    </ScreenContainer>
  );
};

export default ProductDetailsView;
