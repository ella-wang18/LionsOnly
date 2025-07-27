import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'

import HomeScreen from "../../../containers/MainContainer/HomeContainer/HomeScreen";
import SportsCardDetailsScreen from "../../../containers/MainContainer/HomeContainer/SportCardDetailsScreen";
import SportsCardDetails from "../../../containers/MainContainer/HomeContainer/SportCardDetailsScreen";

const HomeStack = createStackNavigator();

const HomeNavigation = ({navigation, route}) => {
  if (route?.state?.index > 0) {
    navigation.setOptions({tabBarVisible: false});
  } else {
    navigation.setOptions({tabBarVisible: true});
  }
  return (
    <HomeStack.Navigator
      mode="modal"
      screenOptions={{
        headerShown: false
      }}
    >
      <HomeStack.Screen name={'Home'} component={HomeScreen} />
      <HomeStack.Screen name={'SportCardDetailsScreen'} component={SportsCardDetails} />
    </HomeStack.Navigator>
  )
}

export default HomeNavigation
