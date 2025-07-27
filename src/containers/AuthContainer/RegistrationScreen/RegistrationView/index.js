import React from 'react';
import {View, Text, Image} from 'react-native';
import ScreenContainer from "../../../../components/ScreenContainer";
import globals from "../../../../util/globalStyles";
import globalImages from "../../../../util/globalImages";
import HeaderContainer from "../../../../components/HeaderContainer";
import AppTextInput from "../../../../components/AppTextInput";
import Button from "../../../../components/Button";
import PropTypes from "prop-types";
import {styles} from "./styles";

const RegistrationView = ({
  setFirstName,
  setLastName,
  setUsername,
  setPassword,
  profileImage,
  onPressUploadImage,
}) => {
  return (
    <ScreenContainer isScrollable>
      <HeaderContainer>
        <Image
          source={globalImages.backIcon}
          style={globals.COMMON_STYLES.icon}
        />
      </HeaderContainer>
      {profileImage && (
        <View style={styles.profileImageContainer}>
          <Image source={profileImage} style={styles.profileImage}/>
        </View>
      )}
      <AppTextInput
        label={'First name'}
        icon={globalImages.usernameIcon}
        setTextValue={setFirstName}
      />
      <AppTextInput
        label={'Last name'}
        icon={globalImages.usernameIcon}
        setTextValue={setLastName}
      />
      <AppTextInput
        label={'User name'}
        icon={globalImages.usernameIcon}
        setTextValue={setUsername}
      />
      <AppTextInput
        label={'Password'}
        icon={globalImages.passwordIcon}
        setTextValue={setPassword}
      />
      <Button
        label={'UPLOAD IMAGE'}
        style={{
          backgroundColor: globals.COLORS.accent
        }}
        onPress={onPressUploadImage}
      />
      <Button
        label={'JOIN THE DEN'}
      />
    </ScreenContainer>
  )
};

RegistrationView.propTypes = {
  setFirstName: PropTypes.func,
  setLastName: PropTypes.func,
  setUsername: PropTypes.func,
  setPassword: PropTypes.func,
};

export default RegistrationView;
