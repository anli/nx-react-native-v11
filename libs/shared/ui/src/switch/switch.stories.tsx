import type { Meta, StoryObj } from '@storybook/react';

import { Switch } from './switch';
import { View } from '../view';

const meta: Meta<typeof Switch> = {
  tags: ['autodocs'],
  component: (args) => <Switch {...args} />,
  title: 'Common Component/Controls/Switch',
  decorators: [
    (Story) => (
      <View className="m-4 p-4 self-start bg-slate-300">
        <Story />
      </View>
    ),
  ],
  args: {
    value: true,
    disabled: false,
  },
  argTypes: {
    value: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const EnabledOn: Story = {
  args: {
    value: true,
    disabled: false,
  },
};

export const EnabledOff: Story = {
  args: {
    value: false,
    disabled: false,
  },
};

export const DisabledOn: Story = {
  args: {
    value: true,
    disabled: true,
  },
};

export const DisabledOff: Story = {
  args: {
    value: false,
    disabled: true,
  },
};
