import type { Meta, StoryObj } from '@storybook/react';

import { Tabs } from './tabs';
import { View } from '../view';
import { SceneMap } from 'react-native-tab-view';

const Screen = () => <View style={{ flex: 1, backgroundColor: '#ff4081' }} />;

const renderScene = SceneMap({
  all: Screen,
  news: Screen,
  shopping: Screen,
});

const meta: Meta<typeof Tabs> = {
  tags: ['autodocs'],
  component: (args) => {
    return <Tabs {...args} renderScene={renderScene} />;
  },
  title: 'Common Component/Tabs',
  decorators: [
    (Story) => (
      <View className="p-4 flex-1 bg-slate-100">
        <Story />
      </View>
    ),
  ],
  args: {
    routes: [
      { key: 'all', title: 'All' },
      { key: 'news', title: 'News' },
      { key: 'shopping', title: 'Shopping' },
    ],
  },
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  args: {},
};

export const Fixed: Story = {
  args: {
    fixed: true,
  },
};
