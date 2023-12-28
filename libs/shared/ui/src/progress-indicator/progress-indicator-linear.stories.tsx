import type { Meta, StoryObj } from '@storybook/react';

import { ProgressIndicator } from './progress-indicator';
import { View } from '../view';
import { ArrowUpCircleIcon } from 'react-native-heroicons/outline';

const meta: Meta<typeof ProgressIndicator.Linear> = {
  tags: ['autodocs'],
  component: (args) => {
    return <ProgressIndicator.Linear {...args} />;
  },
  title: 'Common Component/Progress Indicator/Linear',
  decorators: [
    (Story) => (
      <View className="p-4 flex-1 bg-slate-100">
        <Story />
      </View>
    ),
  ],
  args: {
    title: 'Loading...',
    renderIcon: (props) => <ArrowUpCircleIcon {...props} />,
    progress: 0.5,
  },
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ProgressIndicator.Linear>;

export const Icon: Story = {
  args: {},
};

export const IconFloating: Story = {
  args: {
    floating: true,
  },
};
