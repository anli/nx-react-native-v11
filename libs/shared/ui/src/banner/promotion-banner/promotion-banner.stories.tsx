import type { Meta, StoryObj } from '@storybook/react';
import { PromotionBanner } from './promotion-banner';
import { View } from '../../view';
import { BoltIcon } from 'react-native-heroicons/solid';

const meta: Meta<typeof PromotionBanner> = {
  tags: ['autodocs'],
  component: (args) => <PromotionBanner {...args} />,
  title: 'Design System/Banner/Promotion Banner',
  decorators: [
    (Story) => (
      <View className="m-4">
        <Story />
      </View>
    ),
  ],
  args: {
    title: 'Get free coupon in COFFEE Pay event',
    small: false,
  },
  argTypes: {
    small: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof PromotionBanner>;

export const DefaultBadgeTitle: Story = {
  args: {
    renderHeader: (props) => (
      <PromotionBanner.Badge {...props}>POINTS</PromotionBanner.Badge>
    ),
    RightComponent: <BoltIcon fill="white" size={64} />,
  },
};

export const DefaultBadgeTitleDescription: Story = {
  args: {
    renderHeader: (props) => (
      <PromotionBanner.Badge {...props}>POINTS</PromotionBanner.Badge>
    ),
    description: 'Move to COFFEE event',
    RightComponent: <BoltIcon fill="white" size={64} />,
  },
};

export const DefaultCaptionTitle: Story = {
  args: {
    renderHeader: (props) => (
      <PromotionBanner.Caption {...props}>POINTS</PromotionBanner.Caption>
    ),
    RightComponent: <BoltIcon fill="white" size={64} />,
  },
};

export const SmallNone: Story = {
  args: {
    small: true,
  },
};

export const SmallImage: Story = {
  args: {
    small: true,
    renderHeader: (props) => (
      <PromotionBanner.Badge {...props}>POINTS</PromotionBanner.Badge>
    ),
  },
};

meta.parameters = {
  controls: {
    include: Object.keys(meta.args as object),
  },
};
