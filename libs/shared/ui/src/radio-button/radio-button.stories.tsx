import type { Meta, StoryObj } from '@storybook/react';

import { RadioButton } from './radio-button';
import { View } from '../view';

const meta: Meta<typeof RadioButton> = {
  tags: ['autodocs'],
  component: (args) => {
    return (
      <RadioButton {...args} defaultValue="1">
        <View style={{ gap: 8 }}>
          <RadioButton.Option id="1" />
          <RadioButton.Option id="2" />
        </View>
      </RadioButton>
    );
  },
  title: 'Common Component/Controls/Radio button',
  decorators: [
    (Story) => (
      <View className="p-4 flex-1 bg-slate-100">
        <Story />
      </View>
    ),
  ],
  args: {
    disabled: false,
  },
  argTypes: {
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof RadioButton>;

export const Enabled: Story = {
  args: {
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
