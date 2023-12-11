import type { Meta, StoryObj } from '@storybook/react';
import { BoxButton } from './box-button';
import { View } from '../../view';

const meta: Meta<typeof BoxButton> = {
  tags: ['autodocs'],
  component: (args) => <BoxButton {...args}>Button</BoxButton>,
  title: 'Design System/Buttons/Box Button',
  decorators: [
    (Story) => (
      <View className="m-4">
        <Story />
      </View>
    ),
  ],
  argTypes: {
    disabled: {
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
