import type { Meta, StoryObj } from '@storybook/react';

import { Popup } from './popup';
import { View } from '../view';
import { CheckIcon } from 'react-native-heroicons/solid';

const meta: Meta<typeof Popup> = {
  tags: ['autodocs'],
  component: (args) => {
    return <Popup {...args} />;
  },
  title: 'Common Component/Popup',
  decorators: [
    (Story) => (
      <View className="p-4 flex-1 bg-slate-100">
        <Story />
      </View>
    ),
  ],
  args: {
    title: 'Lorem ipsum',
    description: 'dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
  },
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Popup>;

export const TextOnly: Story = {
  args: {},
};

export const ImageText: Story = {
  args: {
    renderIcon: (props) => <CheckIcon {...props} />,
  },
};

export const TextOnlyThreeButton: Story = {
  args: {
    buttons: [
      {
        title: 'amet',
        type: 'solid-primary',
      },
      {
        title: 'consectetur',
        type: 'outline-secondary',
      },
      {
        title: 'elit',
        type: 'plain',
      },
    ],
  },
};

export const ImageTextTwoButton: Story = {
  args: {
    renderIcon: (props) => <CheckIcon {...props} />,
    buttons: [
      {
        title: 'amet',
        type: 'solid-primary',
      },
      {
        title: 'elit',
        type: 'plain',
      },
    ],
  },
};
