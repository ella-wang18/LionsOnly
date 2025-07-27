import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, Image} from 'react-native';
import {styles, images} from './styles';

const FooterIcon = ({tabBarIndex, isFocused}) => {
  let tabBarImage;

  if (parseInt(tabBarIndex) === 0) {
    tabBarImage = (isFocused)
      ? images.homeIconOn
      : images.homeIconOff;
  } else if (parseInt(tabBarIndex) === 1) {
    tabBarImage = (isFocused)
      ? images.storeIconOn
      : images.storeIconOff;
  } else if (parseInt(tabBarIndex) === 2) {
    tabBarImage = (isFocused)
      ? images.addIconOn
      : images.addIconOff;
  } else if (parseInt(tabBarIndex) === 3) {
    tabBarImage = (isFocused)
      ? images.notificationsIconOn
      : images.notificationsIconOff;
  } else if (parseInt(tabBarIndex) === 4) {
    tabBarImage = (isFocused)
      ? images.profileIconOn
      : images.profileIconOff;
  }
    return (
    <View style={styles.tabBarItem}>
      <Image resizeMode={'contain'} source={tabBarImage} />
    </View>
  )
};

FooterIcon.propTypes = {
  tabBarIndex: PropTypes.number.isRequired,
  isFocused: PropTypes.bool.isRequired,
};

export default FooterIcon;
