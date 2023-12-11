import type { Meta, StoryObj } from '@storybook/react';
import { View } from '../../view';
import { BadgeNew } from './badge-new';

const meta: Meta<typeof BadgeNew> = {
  tags: ['autodocs'],
  component: (args) => <BadgeNew {...args} />,
  title: 'Design System/Badge/New Badge',
  decorators: [
    (Story) => (
      <View className="m-4">
        <Story />
      </View>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof BadgeNew>;

export const Default: Story = {};
