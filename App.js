import 'react-native-gesture-handler';
import React from 'react';

import { SafeAreaView, StatusBar, Text, useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import { AppNavContainer } from './src/modules/root/navigation/AppNavContainer';
import GlobalProvider from './src/store';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <GlobalProvider>
      <AppNavContainer></AppNavContainer>
    </GlobalProvider>
  );
};

export default App;
