import type { Meta, StoryObj } from '@storybook/react';
import { View } from '../../view';
import { BadgeNumber } from '.';

const meta: Meta<typeof BadgeNumber> = {
  tags: ['autodocs'],
  component: (args) => <BadgeNumber {...args} />,
  title: 'Common Component/Badge/Number Badge',
  decorators: [
    (Story) => (
      <View className="m-4 p-4 self-start bg-slate-300">
        <Story />
      </View>
    ),
  ],
  args: {
    value: 8,
    type: 'primary',
  },
  argTypes: {
    value: {
      control: 'radio',
      options: [8, 1000],
    },
    type: {
      control: 'radio',
      options: ['primary', 'danger'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof BadgeNumber>;

export const Primary: Story = {
  args: {
    type: 'primary',
  },
};

export const Danger: Story = {
  args: {
    type: 'danger',
  },
};
