import React, {useState} from 'react';
import ImagePicker from 'react-native-image-picker';
import {loginUser} from '../../../redux/actions/authActions';
import RegistrationView from './RegistrationView';
import {onPressUploadImage} from '../../../util/helpers'
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

const RegistrationScreen = ({loginUser, route, navigation}) => {
  const [profileImage, setProfileImage] = useState(null);
  const enterTheDen = () => {
    loginUser();
  };

  return (
    <RegistrationView
      profileImage={profileImage}
      onPressUploadImage={() => onPressUploadImage(setProfileImage)}
      enterTheDen={enterTheDen}
      data={route.params}
      goBack={() => navigation.goBack()}
    />
  );
};

const mapStateToProps = () => {

};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loginUser,
  }, dispatch)
};

export default connect(
  null,
  mapDispatchToProps,
)(RegistrationScreen);
