import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import globals from "../util/globalStyles";
import PropTypes from "prop-types";

const HeaderContainer = ({children, style}) => {
  return (
    <View style={[styles.container, style]}>
      {children}
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    height: globals.SCREEN_SIZE.width * 0.15,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 20,
  }
})

HeaderContainer.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
}

export default HeaderContainer;
