import NativeSlider from '@react-native-community/slider';
import { styled } from 'nativewind';
import { SliderExponential } from './slider-exponential';

const StyledSlider = styled(NativeSlider);

export const Slider = Object.assign(StyledSlider, {
  Exponential: SliderExponential,
});
