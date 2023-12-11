import { FC } from 'react';
import {
  ActivityIndicator as NativeActivityIndicator,
  ActivityIndicatorProps as NativeActivityIndicatorProps,
} from 'react-native';
import { StyledComponent } from 'nativewind';

export const ActivityIndicator: FC<NativeActivityIndicatorProps> = ({
  className,
  ...rest
}) => {
  return (
    <StyledComponent
      component={NativeActivityIndicator}
      className={className}
      {...rest}
    />
  );
};
