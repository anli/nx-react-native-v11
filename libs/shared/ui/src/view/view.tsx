import { FC } from 'react';
import {
  View as NativeView,
  ViewProps as NativeViewProps,
} from 'react-native';
import { StyledComponent } from 'nativewind';

export const View: FC<NativeViewProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <StyledComponent
      component={NativeView}
      className={className}
      {...rest}
    >
      {children}
    </StyledComponent>
  );
};
