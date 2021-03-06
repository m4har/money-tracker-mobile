import * as React from 'react';
import {
  createMaterialTopTabNavigator,
  MaterialTopTabBarOptions,
} from '@react-navigation/material-top-tabs';

import Daily from './Daily';
import Monthly from './Monthly';
import Weekly from './Weekly';
import Yearly from './Yearly';

const tabBarOptions: MaterialTopTabBarOptions = {
  style: {
    backgroundColor: '#65BCBF',
  },
  labelStyle: {
    // color: '#000',
    fontWeight: 'bold',
  },
  indicatorStyle: {
    backgroundColor: '#fff',
  },
  activeTintColor: '#fff',
};
const HomeTab = () => {
  const {Navigator, Screen} = createMaterialTopTabNavigator();
  return (
    <Navigator tabBarOptions={tabBarOptions}>
      <Screen name="daily" component={Daily} />
      <Screen name="weekly" component={Weekly} />
      <Screen name="monthly" component={Monthly} />
      <Screen name="yearly" component={Yearly} />
    </Navigator>
  );
};

export default HomeTab;
