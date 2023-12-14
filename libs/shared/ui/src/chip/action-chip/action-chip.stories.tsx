import type { Meta, StoryObj } from '@storybook/react';

import { ActionChip } from './action-chip';
import { View } from '../../view';

const meta: Meta<typeof ActionChip> = {
  tags: ['autodocs'],
  component: (args) => <ActionChip {...args} />,
  title: 'Common Component/Chips/Action Chip',
  decorators: [
    (Story) => (
      <View className="m-4 p-4 self-start bg-slate-300">
        <Story />
      </View>
    ),
  ],
  args: {
    title: 'Chip',
    small: false,
    outlined: false,
  },
  argTypes: {
    small: {
      control: 'boolean',
    },
    outlined: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ActionChip>;

export const SolidLarge: Story = {
  args: {},
};

export const OutlinedSmall: Story = {
  args: {
    small: true,
    outlined: true,
  },
};
