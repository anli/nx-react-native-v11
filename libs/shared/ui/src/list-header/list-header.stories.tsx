import type { Meta, StoryObj } from '@storybook/react';

import { ListHeader } from './list-header';
import { View } from '../view';
import { StarIcon } from 'react-native-heroicons/solid';

const meta: Meta<typeof ListHeader> = {
  tags: ['autodocs'],
  component: (args) => {
    return <ListHeader {...args} />;
  },
  title: 'Common Component/List Header',
  decorators: [
    (Story) => (
      <View className="p-4 flex-1 bg-slate-100">
        <Story />
      </View>
    ),
  ],
  args: {
    title: 'Lorem ipsum',
  },
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ListHeader>;

export const TextOnly: Story = {
  args: {},
};

export const TextOnlyTextButton: Story = {
  args: {
    buttonType: 'text',
    buttonTitle: 'See more',
  },
};

export const TextOnlyIconButton: Story = {
  args: {
    buttonType: 'right',
  },
};

export const TextOnlyDropdownButton: Story = {
  args: {
    buttonType: 'down',
  },
};

export const IconTextDropdownButton: Story = {
  args: {
    renderTitleIcon: (props) => <StarIcon {...props} />,
    buttonType: 'down',
  },
};
