import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'

import ProfileScreen from "../../../containers/MainContainer/ProfileScreen";

const ProfileStack = createStackNavigator();

const ProfileNavigation = () => {
  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <ProfileStack.Screen name={'Profile'} component={ProfileScreen} />
    </ProfileStack.Navigator>
  )
}

export default ProfileNavigation
