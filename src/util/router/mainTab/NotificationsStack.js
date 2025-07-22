import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'

import NotificationsScreen from "../../../containers/MainContainer/NotificationsContainer";

const NotificationsStack = createStackNavigator();

const NotificationsNavigation = () => {
  return (
    <NotificationsStack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <NotificationsStack.Screen name={'Notifications'} component={NotificationsScreen} />
    </NotificationsStack.Navigator>
  )
}

export default NotificationsNavigation
