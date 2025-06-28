import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'

import LoginScreen from "../../containers/AuthContainer/LoginScreen";
import RegistrationScreen from "../../containers/AuthContainer/RegistrationScreen";

const AuthenticationStack = createStackNavigator();

const AuthenticationNavigation = () => {
  return (
    <AuthenticationStack.Navigator screenOptions={{headerShown: false}}>
      <AuthenticationStack.Screen name={'Login'} component={LoginScreen} />
      <AuthenticationStack.Screen name={'Register'} component={RegistrationScreen} />
    </AuthenticationStack.Navigator>
  )
}

export default AuthenticationNavigation
