import type { Meta, StoryObj } from '@storybook/react';

import { Slider } from './';
import { View } from '../view';

const meta: Meta<typeof Slider> = {
  tags: ['autodocs'],
  component: (args) => <Slider {...args} />,
  title: 'Common Component/Controls/Slider',
  decorators: [
    (Story) => (
      <View className="m-4 p-4 bg-slate-300">
        <Story />
      </View>
    ),
  ],
  args: {},
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  args: {},
};
