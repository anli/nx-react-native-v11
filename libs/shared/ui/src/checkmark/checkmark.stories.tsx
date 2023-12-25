import type { Meta, StoryObj } from '@storybook/react';

import { Checkmark } from './checkmark';
import { View } from '../view';

const meta: Meta<typeof Checkmark> = {
  tags: ['autodocs'],
  component: (args) => <Checkmark {...args} />,
  title: 'Common Component/Controls/Checkmark',
  decorators: [
    (Story) => (
      <View className="p-4 flex-1 bg-slate-100">
        <Story />
      </View>
    ),
  ],
  args: {
    value: true,
  },
  argTypes: {
    value: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Checkmark>;

export const Unselected: Story = {
  args: {
    value: false,
  },
};

export const Selected: Story = {
  args: {
    value: true,
  },
};
