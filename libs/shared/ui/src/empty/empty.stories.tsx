import type { Meta, StoryObj } from '@storybook/react';

import { Empty } from './empty';
import { View } from '../view';
import { CheckIcon } from 'react-native-heroicons/solid';

const meta: Meta<typeof Empty> = {
  tags: ['autodocs'],
  component: (args) => {
    return <Empty {...args} />;
  },
  title: 'Common Component/Empty',
  decorators: [
    (Story) => (
      <View className="p-4 flex-1 bg-slate-100">
        <Story />
      </View>
    ),
  ],
  args: {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Empty>;

export const TitleDescriptionTwoButton: Story = {
  args: {
    renderIcon: (props) => <CheckIcon {...props} />,
    title: 'Sed ut perspiciatis',
    outlineButtonConfig: { title: 'ad' },
    solidButtonConfig: { title: 'eos' },
  },
};

export const Description: Story = {
  args: {},
};

export const TitleDescriptionOneButton: Story = {
  args: {
    renderIcon: (props) => <CheckIcon {...props} />,
    title: 'Sed ut perspiciatis',
    outlineButtonConfig: { title: 'eos' },
  },
};
