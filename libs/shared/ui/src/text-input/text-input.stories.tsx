import type { Meta, StoryObj } from '@storybook/react';

import { TextInput } from './text-input';
import { View } from '../view';

const meta: Meta<typeof TextInput> = {
  tags: ['autodocs'],
  component: (args) => {
    return <TextInput {...args} />;
  },
  title: 'Common Component/Text Inputs',
  decorators: [
    (Story) => (
      <View className="p-4 flex-1 bg-slate-100">
        <Story />
      </View>
    ),
  ],
  args: {
    placeholder: 'Placeholder',
    message: 'Hint',
  },
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof TextInput>;

export const Default: Story = {
  args: {},
};

export const Required: Story = {
  args: {
    required: true,
  },
};

export const TextCounter: Story = {
  args: {
    textCounter: true,
  },
};

export const Error: Story = {
  args: {
    error: true,
  },
};
