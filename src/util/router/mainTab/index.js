import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FooterIcon from '../../../components/FooterIcon';
import globals from '../../globalStyles';

// Stacks
import HomeNavigation from "./HomeStack";
import StoreNavigation from "./StoreStack";
import AddNavigation from "./AddStack";
import NotificationsNavigation from "./NotificationsStack";
import ProfileNavigation from "./ProfileStack";


const Tab = createBottomTabNavigator();

export const MainTab = () => {
  return(
    <Tab.Navigator
      tabBarOptions={{
          showLabel: false,
          style: {
            height: globals.DEVICE_TYPE ? globals.SCREEN_SIZE.height * 0.11 : globals.SCREEN_SIZE.height * 0.09,
            paddingVertical: 5,
            backgroundColor: globals.COLORS.backgroundColor,
          },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeNavigation}
        options={{
        tabBarIcon: ({focused}) => {
          return (
            <FooterIcon isFocused={focused} tabBarIndex={0} />
          );
        },
      }}
      />
      <Tab.Screen
        name="Store"
        component={StoreNavigation}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <FooterIcon isFocused={focused} tabBarIndex={1} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Add"
        component={AddNavigation}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <FooterIcon isFocused={focused} tabBarIndex={2} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationsNavigation}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <FooterIcon isFocused={focused} tabBarIndex={3} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileNavigation}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <FooterIcon isFocused={focused} tabBarIndex={4} />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default MainTab;
