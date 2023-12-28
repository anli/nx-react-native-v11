import { FC } from 'react';
import { View } from '../view';
import { NumberProp, SvgProps } from 'react-native-svg';
import * as Progress from 'react-native-progress';
import colors from 'tailwindcss/colors';

type SizeConfigKey = 'sm' | 'lg';

type SizeConfigs = Record<
  SizeConfigKey,
  {
    progressSize: number;
    iconSize: number;
  }
>;

const sizeConfigs: SizeConfigs = {
  sm: {
    progressSize: 40,
    iconSize: 16,
  },
  lg: {
    progressSize: 64,
    iconSize: 40,
  },
};

type ProgressIndicatorCircularProps = Partial<
  Omit<Progress.CirclePropTypes, 'size'>
> & {
  renderIcon: (props: SvgProps & { size?: NumberProp }) => JSX.Element;
  title?: string;
  size?: SizeConfigKey;
};

export const ProgressIndicatorCircular: FC<ProgressIndicatorCircularProps> = ({
  renderIcon,
  title,
  size = 'sm',
  ...rest
}) => {
  return (
    <View className="self-start justify-center items-center">
      <Progress.Circle
        size={sizeConfigs[size].progressSize}
        color="white"
        borderWidth={0}
        unfilledColor={colors.gray['300']}
        thickness={4}
        {...rest}
      />
      <View className="absolute flex-1">
        {renderIcon({
          size: sizeConfigs[size].iconSize,
          color: 'white',
        })}
      </View>
    </View>
  );
};
