import type { Meta, StoryObj } from '@storybook/react';

import { PageIndicator } from './page-indicator';
import { View } from '../view';

const meta: Meta<typeof PageIndicator> = {
  tags: ['autodocs'],
  component: (args) => {
    return <PageIndicator {...args} />;
  },
  title: 'Common Component/Page Indicator',
  decorators: [
    (Story) => (
      <View className="p-4 flex-1 bg-slate-100">
        <Story />
      </View>
    ),
  ],
  args: {
    count: 5,
    current: 1,
  },
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof PageIndicator>;

export const Dot: Story = {
  args: {},
};
