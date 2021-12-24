import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { RouteKey } from '../../../shared/enums/route-key';
import ContactsScreen from '../../contacts/screens/contacts.screen';
import ContactDetailScreen from '../../contacts/screens/contact-detail.screen';
import CreateContactScreen from '../../contacts/screens/create-contact.screen';
import SettingsScreen from '../screens/settings.screen';

export const HomeNavigator = () => {
  const HomeStack = createStackNavigator();
  return (
    <HomeStack.Navigator initialRouteName={RouteKey.CONTACT_LIST}>
      <HomeStack.Screen
        name={RouteKey.CONTACT_LIST}
        component={ContactsScreen}></HomeStack.Screen>
      <HomeStack.Screen
        name={RouteKey.CONTACT_DETAIL}
        component={ContactDetailScreen}></HomeStack.Screen>

      <HomeStack.Screen
        name={RouteKey.CREATE_CONTACT}
        component={CreateContactScreen}></HomeStack.Screen>

      <HomeStack.Screen
        name={RouteKey.SETTINGS}
        component={SettingsScreen}></HomeStack.Screen>
    </HomeStack.Navigator>
  );
};
