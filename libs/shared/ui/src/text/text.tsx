import { FC } from 'react';
import { Text as NativeText, TextProps as NativeTextProps } from 'react-native';
import { clsx } from 'clsx';

type TextProps = NativeTextProps & {
  type?: 'display-medium' | 'headline-large' | 'body-medium';
};
const typeConfig: Record<NonNullable<TextProps['type']>, string> = {
  'display-medium': 'text-center text-5xl font-thin',
  'headline-large': 'text-4xl font-bold tracking-wide',
  'body-medium': '',
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
