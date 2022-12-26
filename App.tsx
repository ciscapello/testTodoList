import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Provider } from 'react-redux';
import BottomTabNavigation from './src/navigation/bottomTabNavigation';
import store from './src/store';

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <BottomTabNavigation />
      </Provider>
    </NavigationContainer>
  );
};

export default App;
