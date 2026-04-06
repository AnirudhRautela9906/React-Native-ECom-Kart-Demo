import { Platform } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Colors } from '@utils/Constants';
import Home from '@modules/home';
import Categories from '@modules/categories';
import Account from '@modules/account';
import Cart from '@modules/cart';
import { AccountIcon, CartIcon, CategoriesIcon, HomeIcon } from './TabIcons';

const Tab = createBottomTabNavigator();
const MainNavigator = () => {
  const count = 2;
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: Colors.active,
        tabBarInactiveTintColor: Colors.inactive,
        lazy: true,
        tabBarStyle: {
          paddingTop: Platform.OS === 'android' ? 0 : 10,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, focused, size }) => (
            <HomeIcon focused={focused} size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Categories"
        component={Categories}
        options={{
          tabBarIcon: ({ color, focused, size }) => (
            <CategoriesIcon focused={focused} size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: ({ color, focused, size }) => (
            <AccountIcon focused={focused} size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({ color, focused, size }) => (
            <CartIcon focused={focused} size={size} color={color} />
          ),
          tabBarBadge: count > 0 ? count : undefined,
          tabBarBadgeStyle: { height: 16, width: 16 },
        }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigator;
