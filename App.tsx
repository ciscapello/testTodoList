import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BottomTabNavigation } from './src/navigation';
import store from './src/store';
import { persistor } from './src/store/store';

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <BottomTabNavigation />
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
