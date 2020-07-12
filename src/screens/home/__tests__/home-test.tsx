import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';

import Daily from 'screens/home/Daily';
import Monthly from 'screens/home/Monthly';
import Weekly from 'screens/home/Weekly';
import Yearly from 'screens/home/Yearly';

it('renders correctly Daily', async () => {
  render(<Daily />);
});
it('renders correctly Monthly', async () => {
  render(<Monthly />);
});
it('renders correctly Weekly', async () => {
  render(<Weekly />);
});
it('renders correctly Yearly', async () => {
  render(<Yearly />);
});
