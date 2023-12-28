import { StyledComponent } from 'nativewind';
import { FC } from 'react';
import { CircleSnail, CircleSnailPropTypes } from 'react-native-progress';
import { View } from '../view';

type SizeConfigKey = 'sm' | 'lg' | 'xl';

type SizeConfigs = Record<
  SizeConfigKey,
  {
    size: number;
  }
>;

const sizeConfigs: SizeConfigs = {
  sm: {
    size: 24,
  },
  lg: {
    size: 30,
  },
  xl: {
    size: 42,
  },
};

type SpinnerProps = Partial<Omit<CircleSnailPropTypes, 'size'>> & {
  size?: SizeConfigKey;
};

export const Spinner: FC<SpinnerProps> = ({
  size = 'sm',
  color = 'white',
  className,
  ...rest
}) => {
  return (
    <View className="self-center">
      <StyledComponent
        component={CircleSnail}
        className={className}
        size={sizeConfigs[size].size}
        color={color}
        {...rest}
      />
    </View>
  );
};
