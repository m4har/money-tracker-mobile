import 'react-native-gesture-handler';
import * as React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import Root from './routes/index';
export default () => {
  return (
    <SafeAreaProvider>
      <Root />
    </SafeAreaProvider>
  );
};
