import { FC } from 'react';
import {
  PageIndicator as NativePageIndicator,
  PageIndicatorProps as NativePageIndicatorProps,
} from 'react-native-page-indicator';
import { StyledComponent } from 'nativewind';

export const PageIndicator: FC<NativePageIndicatorProps> = ({
  className,
  variant = 'beads',
  ...rest
}) => {
  return (
    <StyledComponent
      component={NativePageIndicator}
      className={className}
      variant={variant}
      {...rest}
    />
  );
};
