import { FC } from 'react';
import { Text as NativeText, TextProps as NativeTextProps } from 'react-native';
import { ClassValue, clsx } from 'clsx';
import { StyledComponent } from 'nativewind';

type ConfigKey =
  | 'heading1'
  | 'heading2'
  | 'heading3'
  | 'heading4'
  | 'title1'
  | 'title2'
  | 'title3'
  | 'title4'
  | 'title5'
  | 'body1'
  | 'body2'
  | 'body3'
  | 'body4';

const typeConfigs: Record<ConfigKey, ClassValue> = {
  heading1: 'text-2xl font-extrabold',
  heading2: 'text-lg font-bold',
  heading3: 'text-sm font-bold',
  heading4: 'text-[13px] font-bold',
  title1: 'text-[23px] font-bold',
  title2: 'text-[19px] font-bold',
  title3: 'text-base font-semibold',
  title4: 'text-[15px] font-semibold',
  title5: 'text-sm font-semibold',
  body1: 'text-base',
  body2: 'text-sm',
  body3: 'text-[13px]',
  body4: 'text-xs',
};

export type TextProps = NativeTextProps & {
  type?: ConfigKey;
};

export const Text: FC<TextProps> = ({
  children,
  className,
  type = 'body1',
  ...rest
}) => {
  return (
    <StyledComponent
      component={NativeText}
      className={clsx('text-black', typeConfigs[type], className)}
      {...rest}
    >
      {children}
    </StyledComponent>
  );
};
