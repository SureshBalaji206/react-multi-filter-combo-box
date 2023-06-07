import React from 'react';
import ComboBox from '../components/ComboBox/index';

const data = [
  { label: 'America', value: '1' },
  { label: 'Califoria', value: '2' },
  { label: 'Bengaluru', value: '3' },
];

export const Simple = () => <ComboBox dataProvider={data} />;

export default {
  title: 'Combo Box',
  component: ComboBox,
};
