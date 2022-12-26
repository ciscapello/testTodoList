import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import BottomTabNavigation from './src/navigation/bottomTabNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigation />
    </NavigationContainer>
  );
};

export default App;
