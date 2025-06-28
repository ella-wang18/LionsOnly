import React from 'react';
import {TouchableOpacity} from 'react-native';
import AppText from "../AppText";
import {styles} from "./styles";
import PropTypes from "prop-types";

const Button = ({label, style, ...rest}) => {
  return (
    <TouchableOpacity style = {[styles.buttonContainer, style]} {...rest}>
      <AppText style={styles.buttonLabel}>
        {`${label}`.toUpperCase()}
      </AppText>
    </TouchableOpacity>
  )
};

Button.propTypes = {
  label: PropTypes.string
}

export default Button;
