import type { Meta, StoryObj } from '@storybook/react-native';
import { Text } from './text';

const meta: Meta<typeof Text> = {
  component: Text,
  title: 'Text',
};
export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  render: () => <Text>Text</Text>,
};

export const DisplayMedium: Story = {
  render: () => <Text type="display-medium">Text</Text>,
};
