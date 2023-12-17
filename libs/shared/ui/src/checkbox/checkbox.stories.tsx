import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from './checkbox';
import { View } from '../view';

const meta: Meta<typeof Checkbox> = {
  tags: ['autodocs'],
  component: (args) => <Checkbox {...args} />,
  title: 'Common Component/Controls/Checkbox',
  decorators: [
    (Story) => (
      <View className="p-4 flex-1 bg-slate-100">
        <Story />
      </View>
    ),
  ],
  args: {
    value: false,
    disabled: false,
  },
  argTypes: {
    value: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Unselected: Story = {
  args: {},
};

export const Selected: Story = {
  args: {
    value: true,
  },
};

export const UnselectedDisabled: Story = {
  args: {
    disabled: true,
  },
};

export const SelectedDisabled: Story = {
  args: {
    value: true,
    disabled: true,
  },
};
