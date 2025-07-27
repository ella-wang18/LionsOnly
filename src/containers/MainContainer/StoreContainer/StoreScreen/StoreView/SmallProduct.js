import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import LabelText from '../../../../../components/LabelText';
import AppText from '../../../../../components/AppText';
import PropTypes from 'prop-types';
import {styles} from './styles';
import globals from '../../../../../util/globalStyles';

const SmallProduct = ({goToProductDetailsScreen, data}) => {
  return (
    <TouchableOpacity style={styles.smallProductContainer} onPress={goToProductDetailsScreen}>
      <Image style={styles.smallProduct} source={data.primaryImage} />
      <View style={styles.smallProductContent}>
        <View>
          <LabelText>{data.product}</LabelText>
          <AppText style={styles.productDescription}>
            {data.description}
          </AppText>
        </View>
        <LabelText style={{color: globals.COLORS.secondary}}>{data.price}</LabelText>
      </View>
    </TouchableOpacity>
  );
};

SmallProduct.propTypes = {
  goToProductDetailsScreen: PropTypes.func,
  data: PropTypes.object,
};

export default SmallProduct;
