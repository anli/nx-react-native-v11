import type { Meta, StoryObj } from '@storybook/react';

import { TopNavigation } from './top-navigation';
import { View } from '../view';

import {
  PlayIcon,
  ChatBubbleBottomCenterIcon,
} from 'react-native-heroicons/outline';
import { XMarkIcon } from 'react-native-heroicons/solid';

const meta: Meta<typeof TopNavigation.Regular> = {
  tags: ['autodocs'],
  title: 'Common Component/Top Navigation',
  component: (args) => {
    return <TopNavigation.Regular {...args} />;
  },
  decorators: [
    (Story) => (
      <View className="p-4 flex-1 bg-slate-100">
        <Story />
      </View>
    ),
  ],
  args: {
    title: 'Title',
    buttons: [
      { Component: PlayIcon },
      { Component: ChatBubbleBottomCenterIcon },
    ],
    closeButton: { Component: XMarkIcon },
  },
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof TopNavigation.Regular>;

export const Regular: Story = {
  args: {},
};
