import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'

import StoreScreen from "../../../containers/MainContainer/StoreContainer/StoreScreen";
import ProductDetailsScreen from "../../../containers/MainContainer/StoreContainer/ProductDetailsScreen";
import ShoppingCartScreen from "../../../containers/MainContainer/StoreContainer/ShoppingCartScreen";
import CheckoutScreen from "../../../containers/MainContainer/StoreContainer/CheckoutScreen";

const StoreStack = createStackNavigator();

const StoreNavigation = ({navigation, route}) => {
  if (route?.state?.index > 0) {
    navigation.setOptions({tabBarVisible: false});
  } else {
    navigation.setOptions({tabBarVisible: true});
  }
  return (
    <StoreStack.Navigator
      mode="modal"
      screenOptions={{
        headerShown: false
      }}
    >
      <StoreStack.Screen name={'Store'} component={StoreScreen} />
      <StoreStack.Screen name={'ProductDetails'} component={ProductDetailsScreen} />
      <StoreStack.Screen name={'ShoppingCart'} component={ShoppingCartScreen} />
      <StoreStack.Screen name={'Checkout'} component={CheckoutScreen} />
    </StoreStack.Navigator>
  )
}

export default StoreNavigation
