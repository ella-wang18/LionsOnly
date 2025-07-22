import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthenticationNavigation from "./authenticationStack";
import MainTab from "./mainTab";

export const MainContainer = () => {
  return (
    <NavigationContainer>
      <MainTab />
    </NavigationContainer>
  )
}

export const AuthenticationContainer = () => {
  return (
    <NavigationContainer>
      <AuthenticationNavigation />
    </NavigationContainer>
  )
}
