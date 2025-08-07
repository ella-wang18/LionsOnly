import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import ScreenContainer from "../../../../components/ScreenContainer";
import globals from "../../../../util/globalStyles";
import globalImages from "../../../../util/globalImages";
import HeaderContainer from "../../../../components/HeaderContainer";
import AppTextInput from "../../../../components/AppTextInput";
import Button from "../../../../components/Button";
import PropTypes from "prop-types";
import {styles} from "./styles";
import {images} from "../../../MainContainer/HomeContainer/SportCardDetailsScreen/SportCardDetailsView/styles";

const RegistrationView = ({
  setFirstName,
  setLastName,
  setUsername,
  setPassword,
  profileImage,
  onPressUploadImage,
  enterTheDen,
  goBack,
}) => {
  return (
    <ScreenContainer isScrollable>
      <HeaderContainer>
        <View>
          <TouchableOpacity onPress={goBack}>
            <Image source={globalImages.backIcon} style={globals.COMMON_STYLES.icon}/>
          </TouchableOpacity>
        </View>
        {/*<Image*/}
        {/*  source={globalImages.backIcon}*/}
        {/*  style={globals.COMMON_STYLES.icon}*/}
        {/*  onPress={goBack}*/}
        {/*/>*/}
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
        onPress={enterTheDen}
      />
    </ScreenContainer>
  )
};

RegistrationView.propTypes = {
  setFirstName: PropTypes.func,
  setLastName: PropTypes.func,
  setUsername: PropTypes.func,
  setPassword: PropTypes.func,
  enterTheDen: PropTypes.func,
  goBack: PropTypes.func,
};

export default RegistrationView;
