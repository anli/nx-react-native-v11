import { FC } from 'react';
import { View } from '../view';
import clsx, { ClassValue } from 'clsx';
import { Image } from '../image';
import { NumberProp, SvgProps } from 'react-native-svg';
import { ImageSourcePropType } from 'react-native';

type SizeConfigKey = '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
type SizeConfigs = Record<
  SizeConfigKey,
  {
    container: ClassValue;
    iconContainer: ClassValue;
    iconSize: number;
  }
>;
const sizeConfigs: SizeConfigs = {
  '2xs': {
    container: 'h-[30px] w-[30px]',
    iconContainer: 'p-0.5 border',
    iconSize: 6,
  },
  xs: {
    container: 'h-[32px] w-[32px]',
    iconContainer: 'p-0.5 border',
    iconSize: 6,
  },
  sm: {
    container: 'h-[42px] w-[42px]',
    iconContainer: 'p-1 border',
    iconSize: 7,
  },
  md: {
    container: 'h-[50px] w-[50px]',
    iconContainer: 'p-1 border-2',
    iconSize: 8,
  },
  lg: {
    container: 'h-[56px] w-[56px]',
    iconContainer: 'p-1 border-2',
    iconSize: 10,
  },
  xl: {
    container: 'h-[60px] w-[60px]',
    iconContainer: 'p-1 border-2',
    iconSize: 10,
  },
  '2xl': {
    container: 'h-[87px] w-[87px]',
    iconContainer: 'p-1 border-2',
    iconSize: 15,
  },
  '3xl': {
    container: 'h-[95px] w-[95px]',
    iconContainer: 'p-1 border-2',
    iconSize: 16,
  },
};

type StoryRingConfigKey = 'active' | 'inactive' | 'none';
type StoryRingConfigs = Record<StoryRingConfigKey, ClassValue>;
const storyRingConfigs: StoryRingConfigs = {
  active: 'border-green-500',
  inactive: 'border-gray-300',
  none: 'border-transparent',
};

export type ProfileProps = {
  size?: SizeConfigKey;
  storyRing?: StoryRingConfigKey;
  renderIcon?: (props: SvgProps & { size?: NumberProp }) => JSX.Element;
  renderBadge?: () => JSX.Element;
  source: ImageSourcePropType;
};

export const Profile: FC<ProfileProps> = ({
  size = 'md',
  storyRing,
  renderIcon,
  renderBadge,
  source,
}) => {
  return (
    <View
      className={clsx(
        'self-start border-2 rounded-full p-0.5',
        storyRing ? storyRingConfigs[storyRing] : 'border-transparent'
      )}
    >
      <Image
        source={source}
        className={clsx(
          'self-start rounded-full bg-white',
          sizeConfigs[size].container
        )}
      />
      {!!renderIcon && (
        <View
          className={clsx(
            'absolute bottom-0 right-0 bg-green-500 rounded-full border-white',
            sizeConfigs[size].iconContainer
          )}
        >
          {renderIcon?.({ size: sizeConfigs[size].iconSize, color: 'white' })}
        </View>
      )}
      {!!renderBadge && (
        <View className="absolute top-0 right-0">{renderBadge?.()}</View>
      )}
    </View>
  );
};
