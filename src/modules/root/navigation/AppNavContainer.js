import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AuthNavigator } from './AuthNavigator';
import { DrawerNavigator } from './DrawerNavigator';
import { GlobalContext } from '../../../store';

export const AppNavContainer = () => {
  // const isLoading = false; //true - redirect to Contacts

  const {
    authState: { isLoggedIn },
  } = useContext(GlobalContext);
  console.log('isLoggedIn: >>', isLoggedIn);

  return (
    <NavigationContainer>
      {isLoggedIn ? <DrawerNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};
