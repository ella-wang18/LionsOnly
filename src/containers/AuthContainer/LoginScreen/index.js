import React, {useState} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import LoginView from './LoginView';
import {loginUser} from '../../../redux/actions/authActions';

const LoginScreen = ({
  navigation,
  loginUser,
}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const enterTheDen = () => {
    loginUser();
  };

  return (
    <LoginView
      enterTheDen={enterTheDen}
      username={username}
      password={password}
      setUsername={setUsername}
      setPassword={setPassword}
      goToRegistrationScreen={() => navigation.navigate('Register')}
    />
  )
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
)(LoginScreen);
