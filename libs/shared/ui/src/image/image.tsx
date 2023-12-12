import { FC } from 'react';
import {
  Image as NativeImage,
  ImageProps as NativeImageProps,
} from 'react-native';
import { StyledComponent } from 'nativewind';

export const Image: FC<NativeImageProps> = ({ className, ...rest }) => {
  return (
    <StyledComponent component={NativeImage} className={className} {...rest} />
  );
};
