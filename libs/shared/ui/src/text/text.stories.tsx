import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './text';

const meta: Meta<typeof Text> = {
  tags: ['autodocs'],
  component: (args) => <Text {...args}>Text</Text>,
  title: 'Design System/Text',
};
export default meta;
type Story = StoryObj<typeof Text>;

export const Heading1: Story = {
  args: {
    type: 'heading1',
  },
};

export const Heading2: Story = {
  args: {
    type: 'heading2',
  },
};

export const Heading3: Story = {
  args: {
    type: 'heading3',
  },
};

export const Heading4: Story = {
  args: {
    type: 'heading4',
  },
};

export const Title1: Story = {
  args: {
    type: 'title1',
  },
};

export const Title2: Story = {
  args: {
    type: 'title2',
  },
};

export const Title3: Story = {
  args: {
    type: 'title3',
  },
};

export const Title4: Story = {
  args: {
    type: 'title4',
  },
};

export const Title5: Story = {
  args: {
    type: 'title5',
  },
};

export const Body1: Story = {
  args: {
    type: 'body1',
  },
};

export const Body2: Story = {
  args: {
    type: 'body2',
  },
};

export const Body3: Story = {
  args: {
    type: 'body3',
  },
};

export const Body4: Story = {
  args: {
    type: 'body4',
  },
};
