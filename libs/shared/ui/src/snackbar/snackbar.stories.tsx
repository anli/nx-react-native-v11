import type { Meta, StoryObj } from '@storybook/react';

import { Snackbar } from './snackbar';
import { View } from '../view';

const meta: Meta<typeof Snackbar> = {
  tags: ['autodocs'],
  component: (args) => {
    return <Snackbar {...args} />;
  },
  title: 'Common Component/Dialog/Snackbar',
  decorators: [
    (Story) => (
      <View className="p-4 flex-1 bg-slate-100">
        <Story />
      </View>
    ),
  ],
  args: {
    backgroundType: 'basic',
  },
  argTypes: {
    backgroundType: {
      control: 'radio',
      options: ['basic', 'dim'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Snackbar>;

export const Title: Story = {
  args: {
    title: 'Lorem ipsum',
    buttonTitle: 'vel',
  },
};

export const TitleDescription: Story = {
  args: {
    title: 'Lorem ipsum',
    description:
      'lor sit amet, consectetur adipiscing elit. Curabitur consectetur metus',
    buttonTitle: 'vel',
  },
};

export const Description: Story = {
  args: {
    description:
      'lor sit amet, consectetur adipiscing elit. Curabitur consectetur metus',
    buttonTitle: 'vel',
  },
};

export const DimTitle: Story = {
  args: {
    backgroundType: 'dim',
    title: 'Lorem ipsum',
    buttonTitle: 'vel',
  },
};
