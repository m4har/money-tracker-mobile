import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';

import Daily from '../Daily';
import Monthly from '../Monthly';
import Weekly from '../Weekly';
import Yearly from '../Yearly';

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
