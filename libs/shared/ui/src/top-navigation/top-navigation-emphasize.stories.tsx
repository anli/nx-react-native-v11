import type { Meta, StoryObj } from '@storybook/react';

import { TopNavigation } from './top-navigation';
import { View } from '../view';

import {
  PlayIcon,
  ChatBubbleBottomCenterIcon,
} from 'react-native-heroicons/outline';

const meta: Meta<typeof TopNavigation.Emphasize> = {
  tags: ['autodocs'],
  title: 'Common Component/Top Navigation',
  component: (args) => {
    return <TopNavigation.Emphasize {...args} />;
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
  },
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof TopNavigation.Emphasize>;

export const Emphasize: Story = {
  args: {
    onMenu: () => {},
  },
};
