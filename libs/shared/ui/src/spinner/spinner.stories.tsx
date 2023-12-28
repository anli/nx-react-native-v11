import type { Meta, StoryObj } from '@storybook/react';

import { Spinner } from './spinner';
import { View } from '../view';

const meta: Meta<typeof Spinner> = {
  tags: ['autodocs'],
  component: (args) => {
    return <Spinner {...args} />;
  },
  title: 'Common Component/Spinner',
  decorators: [
    (Story) => (
      <View className="p-4 flex-1 bg-slate-300">
        <Story />
      </View>
    ),
  ],
  args: {
    size: 'sm',
  },
  argTypes: {
    size: {
      control: 'radio',
      options: ['sm', 'lg', 'xl'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Large: Story = {
  args: {
    size: 'lg',
  },
};

export const Small: Story = {
  args: {},
};
