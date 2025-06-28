import React, {useState} from 'react';
import LoginView from './LoginView';

const LoginScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <LoginView
    username={username}
    password={password}
    setUsername={setUsername}
    setPassword={setPassword}
    goToRegistrationScreen={() => navigation.navigate('Register')}
    />
  )
};

export default LoginScreen;
