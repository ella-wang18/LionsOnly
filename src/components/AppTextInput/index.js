import React from 'react';
import {View, TextInput, Image} from 'react-native';
import SmallText from "../SmallText";
import globalStyles from "../../util/globalStyles";
import globalImages from "../../util/globalImages";
import {styles} from "./styles";
import PropTypes from "prop-types";

const AppTextInput = ({
  label,
  icon,
  setTextValue,
  ...rest
}) => {
  return (
    <View style={styles.textInputContainer}>
      <SmallText>{label}</SmallText>
      <View style={styles.textInputContent}>
        <TextInput
          placeholder={`Enter ${label}`}
          placeholderTextColor={globalStyles.COLORS.darkGrey}
          style={[globalStyles.COMMON_STYLES.text, styles.textInput]}
          onChangeText={text => {
            setTextValue(text)
          }}
          {...rest}
        />
        <View style={styles.iconContainer}>
          <Image
            source={icon}
            style={[globalStyles.COMMON_STYLES.icon, styles.inputIcon]}
          />

        </View>
      </View>
    </View>
  )
};

AppTextInput.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.any,
  setTextValue: PropTypes.func,
}

export default AppTextInput;
