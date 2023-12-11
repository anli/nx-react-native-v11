import type { Meta, StoryObj } from '@storybook/react';
import { View } from '../../view';
import { BadgeDot } from './badge-dot';

const meta: Meta<typeof BadgeDot> = {
  tags: ['autodocs'],
  component: (args) => <BadgeDot {...args} />,
  title: 'Design System/Badge/Dot Badge',
  decorators: [
    (Story) => (
      <View className="m-4">
        <Story />
      </View>
    ),
  ],
  args: {
    type: 'primary',
  },
  argTypes: {
    type: {
      control: 'radio',
      options: ['primary', 'danger'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof BadgeDot>;

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
