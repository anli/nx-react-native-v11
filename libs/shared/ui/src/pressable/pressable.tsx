import { FC } from 'react';
import {
  Pressable as NativePressable,
  PressableProps as NativePressableProps,
} from 'react-native';
import { StyledComponent } from 'nativewind';

export const Pressable: FC<NativePressableProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <StyledComponent
      component={NativePressable}
      className={className}
      {...rest}
    >
      {children}
    </StyledComponent>
  );
};
