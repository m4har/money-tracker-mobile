import 'react-native';
import 'react-native-gesture-handler';
import React from 'react';
import {render} from '@testing-library/react-native';

import Routes from '../../routes';

it('renders correctly Routes', async () => {
  render(<Routes />);
});
