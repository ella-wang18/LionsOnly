 import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import globalImages from "../../../../util/globalImages";
import AppTextInput from "../../../../components/AppTextInput";
import AppText from "../../../../components/AppText";
import ScreenContainer from "../../../../components/ScreenContainer";
import globals from "../../../../util/globalStyles";
import {styles} from "./styles";
import PropTypes from "prop-types";
import Button from "../../../../components/Button";

const LoginView = ({
  username,
  password,
  setUsername,
  setPassword,
  goToRegistrationScreen,
  enterTheDen,
}) => {
  return (
    <ScreenContainer>
      <View style={styles.container}>
        <Image source={globalImages.logo} style = {styles.logo}/>
        <AppTextInput
          label={'Username'}
          value={username}
          icon={globalImages.usernameIcon}
          setTextValue={setUsername} />
        <AppTextInput
          secureTextEntry
          label={'Password'}
          value={password}
          icon={globalImages.passwordIcon}
          setTextValue={setPassword}
        />

        <Button
          label={'Enter the den'}
          onPress={enterTheDen}
        />
        <TouchableOpacity onPress={goToRegistrationScreen}>
          <AppText>New Member?</AppText>
        </TouchableOpacity>
      </View>
    </ScreenContainer>
  )
};

LoginView.propTypes = {
  username: PropTypes.string,
  password: PropTypes.string,
  setUsername: PropTypes.func,
  setPassword: PropTypes.func,
  goToRegistrationScreen: PropTypes.func,
}

export default LoginView;
