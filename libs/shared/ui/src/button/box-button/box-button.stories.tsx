import type { Meta, StoryObj } from '@storybook/react';
import { BoxButton } from './box-button';
import { View } from '../../view';
import { PlayIcon } from 'react-native-heroicons/solid';

const meta: Meta<typeof BoxButton> = {
  tags: ['autodocs'],
  component: ({ children, ...args }) => (
    <BoxButton {...args}>{children}</BoxButton>
  ),
  title: 'Common Component/Buttons/Box Button',
  decorators: [
    (Story) => (
      <View className="m-4">
        <Story />
      </View>
    ),
  ],
  args: {
    type: 'solid-primary',
    disabled: false,
    loading: false,
    size: 'md',
    children: 'Button',
  },
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    loading: {
      control: 'boolean',
    },
    type: {
      control: 'radio',
      options: [
        'solid-primary',
        'solid-danger',
        'outline-primary',
        'outline-secondary',
      ],
    },
    size: {
      control: 'radio',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof BoxButton>;

export const SolidPrimary: Story = {
  args: {
    type: 'solid-primary',
  },
};

export const SolidDanger: Story = {
  args: {
    type: 'solid-danger',
  },
};

export const OutlinePrimary: Story = {
  args: {
    type: 'outline-primary',
  },
};

export const OutlineSecondary: Story = {
  args: {
    type: 'outline-secondary',
  },
};

export const SolidDisabled: Story = {
  args: {
    type: 'solid-primary',
    disabled: true,
  },
};

export const OutlineDisabled: Story = {
  args: {
    type: 'outline-primary',
    disabled: true,
  },
};

export const IconText: Story = {
  args: {
    type: 'solid-primary',
    renderIcon: (props) => <PlayIcon {...props} />,
  },
};

export const IconOnly: Story = {
  args: {
    type: 'solid-primary',
    renderIcon: (props) => <PlayIcon {...props} />,
    children: null,
  },
  decorators: [
    (Story) => (
      <View className="flex-row justify-center">
        <Story />
      </View>
    ),
  ],
};
