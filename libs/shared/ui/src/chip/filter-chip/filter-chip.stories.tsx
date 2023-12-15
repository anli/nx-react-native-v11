import type { Meta, StoryObj } from '@storybook/react';

import { FilterChip } from './filter-chip';
import { View } from '../../view';

const meta: Meta<typeof FilterChip> = {
  tags: ['autodocs'],
  component: (args) => {
    return (
      <FilterChip {...args}>
        <FilterChip.Option id="1" title="Label" />
        <FilterChip.Option id="2" title="Label" />
      </FilterChip>
    );
  },
  title: 'Common Component/Chips/Filter Chip',
  decorators: [
    (Story) => (
      <View className="p-4 flex-1 bg-slate-100">
        <Story />
      </View>
    ),
  ],
  args: {
    fixed: false,
  },
  argTypes: {
    fixed: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof FilterChip>;

export const FlexibleIcon: Story = {
  args: {},
};

export const FixedIcon: Story = {
  args: {
    fixed: true,
  },
};
