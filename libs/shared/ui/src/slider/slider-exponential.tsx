import NativeSlider, { SliderProps } from '@react-native-community/slider';
import { styled } from 'nativewind';
import { FC } from 'react';

const StyledSlider = styled(NativeSlider);

export const SliderExponential: FC<SliderProps> = ({
  minimumValue = 0,
  maximumValue = 1,
  value = 0,
  onValueChange,
  ...rest
}) => {
  const sliderValue = Math.log10(value);
  const sliderMinValue = Math.log10(minimumValue);
  const sliderMaxValue = Math.log10(maximumValue);

  const handleSliderChange = (_value: number) => {
    onValueChange?.(Math.floor(Math.pow(10, _value)));
  };

  return (
    <StyledSlider
      minimumValue={sliderMinValue}
      maximumValue={sliderMaxValue}
      value={sliderValue}
      onValueChange={handleSliderChange}
      {...rest}
    />
  );
};
