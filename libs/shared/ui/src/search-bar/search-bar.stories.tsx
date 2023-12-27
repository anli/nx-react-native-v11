import type { Meta, StoryObj } from '@storybook/react';

import { SearchBar } from './search-bar';
import { View } from '../view';

const meta: Meta<typeof SearchBar> = {
  tags: ['autodocs'],
  component: (args) => {
    return <SearchBar {...args} />;
  },
  title: 'Common Component/Search Bar',
  decorators: [
    (Story) => (
      <View className="p-4 flex-1 bg-slate-100">
        <Story />
      </View>
    ),
  ],
  args: {},
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof SearchBar>;

export const Default: Story = {
  args: {
    editable: false,
  },
};

export const BackCancelButton: Story = {
  args: {
    onBack: () => {},
    onCancel: () => {},
  },
};

export const CancelButton: Story = {
  args: {
    onCancel: () => {},
  },
};
