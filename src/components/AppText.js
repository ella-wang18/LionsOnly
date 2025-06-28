import React from 'react';
import {Text} from 'react-native';
import globalStyles from '../util/globalStyles';
import PropTypes from 'prop-types';

const AppText = ({
  style,
  children
}) => {
  return (
    <Text style={[globalStyles.COMMON_STYLES.text, style]}>
      {children}
    </Text>
  )
};

AppText.propTypes = {
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  children: PropTypes.node,
}

export default AppText;
