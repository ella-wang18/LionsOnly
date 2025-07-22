import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'

import StoreScreen from "../../../containers/MainContainer/StoreScreen";

const StoreStack = createStackNavigator();

const StoreNavigation = () => {
  return (
    <StoreStack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <StoreStack.Screen name={'Store'} component={StoreScreen} />
    </StoreStack.Navigator>
  )
}

export default StoreNavigation
