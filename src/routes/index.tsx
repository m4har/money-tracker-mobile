import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';

import HomeTab from 'screens/home';
const screenOptions: StackNavigationOptions = {
  headerStyle: {
    backgroundColor: '#65BCBF',
    shadowOpacity: 0,
    shadowOffset: {
      height: 0,
    },
    shadowRadius: 0,
    elevation: 0,
  },
  headerTintColor: '#fff',
};
const Root = () => {
  const {Navigator, Screen} = createStackNavigator();
  return (
    <NavigationContainer>
      <Navigator screenOptions={screenOptions}>
        <Screen name="home" component={HomeTab} />
      </Navigator>
    </NavigationContainer>
  );
};

export default Root;
