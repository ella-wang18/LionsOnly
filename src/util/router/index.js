import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthenticationNavigation from "./authenticationStack";

export const AuthenticationContainer = () => {
  return (
    <NavigationContainer>
      <AuthenticationNavigation />
    </NavigationContainer>
  )
}
