import React from 'react';
import {StyleSheet} from 'react-native';
import AppText from './AppText';
import PropTypes from 'prop-types';
import globals from '../util/globalStyles';

const LabelText = ({children, style}) => {
  return (
    <AppText style={[styles.text, style]}>
      {children}
    </AppText>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: globals.SCREEN_SIZE.width * 0.05,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

LabelText.propTypes = {
  children: PropTypes.node,
}

export default LabelText;
