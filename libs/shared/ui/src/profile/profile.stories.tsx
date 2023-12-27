import type { Meta, StoryObj } from '@storybook/react';

import { Profile } from './profile';
import { View } from '../view';
import { PlayIcon } from 'react-native-heroicons/solid';
import { Badge } from '../badge';

const meta: Meta<typeof Profile> = {
  tags: ['autodocs'],
  component: (args) => {
    return <Profile {...args} />;
  },
  title: 'Common Component/Profile',
  decorators: [
    (Story) => (
      <View className="p-4 flex-1 bg-slate-100">
        <Story />
      </View>
    ),
  ],
  args: {
    size: 'md',
    storyRing: undefined,
    source: { uri: 'https://fakeimg.pl/95x95' },
  },
  argTypes: {
    size: {
      control: 'radio',
      options: ['2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'],
    },
    storyRing: {
      control: 'radio',
      options: ['active', 'inactive', 'none'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Profile>;

export const SingleNone: Story = {
  args: {},
};

export const SingleIcon: Story = {
  args: {
    renderIcon: (props) => <PlayIcon {...props} />,
  },
};

export const SingleStory: Story = {
  args: {
    storyRing: 'active',
  },
};

export const SingleBadge: Story = {
  args: {
    renderBadge: () => <Badge.Dot />,
  },
};
