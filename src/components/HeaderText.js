import React from 'react';
import {StyleSheet} from 'react-native';
import AppText from './AppText';
import PropTypes from 'prop-types';
import globals from '../util/globalStyles';

const HeaderText = ({children, style}) => {
  return (
    <AppText style={[styles.text, style]}>
      {children}
    </AppText>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: globals.SCREEN_SIZE.width * 0.08,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

HeaderText.propTypes = {
  children: PropTypes.node,
}

export default HeaderText;
