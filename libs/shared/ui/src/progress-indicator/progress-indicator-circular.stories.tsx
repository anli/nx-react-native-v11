import type { Meta, StoryObj } from '@storybook/react';

import { ProgressIndicator } from './progress-indicator';
import { View } from '../view';
import { StopIcon } from 'react-native-heroicons/solid';

const meta: Meta<typeof ProgressIndicator.Circular> = {
  tags: ['autodocs'],
  component: (args) => {
    return <ProgressIndicator.Circular {...args} />;
  },
  title: 'Common Component/Progress Indicator/Circular',
  decorators: [
    (Story) => (
      <View className="p-4 flex-1 bg-slate-400">
        <Story />
      </View>
    ),
  ],
  args: {
    size: 'sm',
    renderIcon: (props) => <StopIcon {...props} />,
    progress: 0.5,
  },
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ProgressIndicator.Circular>;

export const ProgressSmall: Story = {
  args: {},
};

export const ProgressLarge: Story = {
  args: {
    size: 'lg',
  },
};
