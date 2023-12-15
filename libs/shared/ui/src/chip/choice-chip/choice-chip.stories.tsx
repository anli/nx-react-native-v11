import type { Meta, StoryObj } from '@storybook/react';

import { ChoiceChip } from './choice-chip';
import { View } from '../../view';

const meta: Meta<typeof ChoiceChip> = {
  tags: ['autodocs'],
  component: (args) => {
    return (
      <ChoiceChip {...args}>
        <ChoiceChip.Option id="1" title="Label" />
        <ChoiceChip.Option id="2" title="Label" />
      </ChoiceChip>
    );
  },
  title: 'Common Component/Chips/Choice Chip',
  decorators: [
    (Story) => (
      <View className="p-4 flex-1 bg-slate-100">
        <Story />
      </View>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ChoiceChip>;

export const Default: Story = {
  args: {},
};
