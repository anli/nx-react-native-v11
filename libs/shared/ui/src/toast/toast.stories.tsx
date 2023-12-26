import type { Meta, StoryObj } from '@storybook/react';

import { Toast } from './toast';
import { View } from '../view';
import { CheckIcon } from 'react-native-heroicons/solid';

const meta: Meta<typeof Toast> = {
  tags: ['autodocs'],
  component: (args) => {
    return <Toast {...args} />;
  },
  title: 'Common Component/Dialog/Toast',
  decorators: [
    (Story) => (
      <View className="p-4 flex-1 bg-slate-100">
        <Story />
      </View>
    ),
  ],
  args: {},
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Spinner: Story = {
  args: {
    loading: true,
  },
};

export const SpinnerText: Story = {
  args: {
    loading: true,
    title: 'Loading',
  },
};

export const Text: Story = {
  args: {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
  },
};

export const IconText: Story = {
  args: {
    renderIcon: (props) => <CheckIcon {...props} />,
    title: 'Removed',
  },
};
