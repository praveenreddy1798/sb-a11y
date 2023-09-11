import React from 'react';
import { Button } from './Button';

export default {
  component: Button,
  title: 'Components/Button',
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  colorScheme: 'brand',
};

export const Secondary = Template.bind({});

Secondary.args = {
  colorScheme: 'red',
  // colorScheme: 'red.400',
};
