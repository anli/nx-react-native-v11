import { FC } from 'react';
import { Text as NativeText, TextProps as NativeTextProps } from 'react-native';
import { clsx } from 'clsx';

const typeConfig = {
  'display-medium': 'text-center text-5xl font-thin',
  'headline-large': 'text-4xl font-bold tracking-wide',
  'body-medium': '',
  heading1: 'text-2xl font-extrabold',
  heading2: 'text-lg font-bold',
  heading3: 'text-sm font-bold',
  heading4: 'text-[13px]',
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

type TextProps = NativeTextProps & {
  type?: keyof typeof typeConfig;
};

export const Text: FC<TextProps> = ({
  children,
  className,
  type = 'body-medium',
  ...rest
}) => {
  return (
    <NativeText className={clsx(typeConfig[type], className)} {...rest}>
      {children}
    </NativeText>
  );
};
