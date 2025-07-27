import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'

import AddScreen from "../../../containers/MainContainer/AddContainer";

const AddStack = createStackNavigator();

const AddNavigation = () => {
  return (
    <AddStack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <AddStack.Screen name={'Add'} component={AddScreen} />
    </AddStack.Navigator>
  )
}

export default AddNavigation
