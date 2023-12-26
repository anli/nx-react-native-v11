import { FC } from 'react';
import { ColorValue, StatusBar, StatusBarProps } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export type BackgroundLinearGradientProps = StatusBarProps & {
  startColor: ColorValue;
  endColor: ColorValue;
};

export const BackgroundLinearGradient: FC<BackgroundLinearGradientProps> = ({
  startColor,
  endColor,
  ...rest
}) => {
  return (
    <>
      <StatusBar backgroundColor={startColor} {...rest} />
      <LinearGradient
        className="absolute h-full w-full"
        colors={[startColor as string, endColor as string]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
      />
    </>
  );
};
