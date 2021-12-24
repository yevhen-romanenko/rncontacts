import { createStackNavigator } from '@react-navigation/stack';
import { Text, View } from 'react-native';

import React from 'react';
import { RouteKey } from '../../../shared/enums/route-key';

import SignInScreen from '../../auth/screens/signIn.screen';
import SignUpScreen from '../../auth/screens/signUp.screen';

export const AuthNavigator = () => {
  const AuthStack = createStackNavigator();

  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name={RouteKey.SIGN_IN}
        component={SignInScreen}></AuthStack.Screen>
      <AuthStack.Screen
        name={RouteKey.SIGN_UP}
        component={SignUpScreen}></AuthStack.Screen>
    </AuthStack.Navigator>
  );
};
