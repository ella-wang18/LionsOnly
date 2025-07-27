import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import LabelText from '../../../../../components/LabelText';
import globals from '../../../../../util/globalStyles';
import PropTypes from 'prop-types';

const LargeProduct = ({goToProductDetailsScreen, data}) => {
  return (
    <TouchableOpacity onPress={goToProductDetailsScreen}>
      <Image style={styles.largeProduct} source={data.primaryImage} />
      <LabelText style={{marginBottom: 10}}>{data.product}</LabelText>
      <LabelText style={{color: globals.COLORS.secondary}}>{data.price}</LabelText>
    </TouchableOpacity>
  );
};

LargeProduct.propTypes = {
  goToProductDetailsScreen: PropTypes.func,
  data: PropTypes.object,
}

export default LargeProduct;
