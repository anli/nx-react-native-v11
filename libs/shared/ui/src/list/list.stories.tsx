import type { Meta, StoryObj } from '@storybook/react';

import { List } from './list';
import { View } from '../view';
import { Checkbox } from '../checkbox';
import { ChevronRightIcon } from 'react-native-heroicons/solid';

const meta: Meta<typeof List.Item> = {
  tags: ['autodocs'],
  component: (args) => {
    return (
      <List>
        <List.Item {...args} />
      </List>
    );
  },
  title: 'Contents Component/List',
  decorators: [
    (Story) => (
      <View className="p-4 flex-1 bg-slate-100">
        <Story />
      </View>
    ),
  ],
  args: {
    title: 'Lorem ipsum',
  },
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof List.Item>;

export const IconButton: Story = {
  args: {
    description: 'dolor sit amet, consectetur adipiscing elit',
    RightComponent: <ChevronRightIcon color="gray" size={20} />,
  },
};

export const CheckboxButton: Story = {
  args: {
    description: 'dolor sit amet, consectetur adipiscing elit',
    RightComponent: <Checkbox />,
  },
};
