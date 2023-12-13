import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '../badge';
import { BottomNavigationButton } from './bottom-navigation-button';
import { ChatBubbleOvalLeftEllipsisIcon } from 'react-native-heroicons/outline';
import { View } from '../view';

const meta: Meta<typeof BottomNavigationButton> = {
  tags: ['autodocs'],
  component: (args) => <BottomNavigationButton {...args} />,
  title: 'Design System/Bottom Navigation',
  args: {
    title: 'Chats',
    renderIcon: (props) => <ChatBubbleOvalLeftEllipsisIcon {...props} />,
  },
  decorators: [
    (Story) => (
      <View className="m-4 p-4 self-start bg-slate-300">
        <Story />
      </View>
    ),
  ],
};
export default meta;
type Story = StoryObj<typeof BottomNavigationButton>;

export const Default: Story = {};

export const DotBadge: Story = {
  args: {
    renderBadge: () => <Badge.Dot />,
  },
};

export const NumberBadge: Story = {
  args: {
    renderBadge: () => <Badge.Number value={8} />,
  },
};
