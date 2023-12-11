import { Text } from '../../text';
import { FC } from 'react';
import clsx, { ClassValue } from 'clsx';
import { PressableProps, TextProps } from 'react-native';
import { Pressable } from '../../pressable';

type ConfigKey =
  | 'solid-primary'
  | 'solid-danger'
  | 'outline-primary'
  | 'outline-secondary';

type Configs = Record<
  ConfigKey,
  {
    container: ClassValue;
    text: ClassValue;
  }
>;

const enabledConfigs: Configs = {
  'solid-primary': {
    container: 'bg-green-500',
    text: 'text-white',
  },
  'solid-danger': {
    container: 'bg-red-500',
    text: 'text-white',
  },
  'outline-primary': {
    container: 'border-solid border-2 border-green-500',
    text: 'text-green-500',
  },
  'outline-secondary': {
    container: 'border-solid border-2 border-gray-300',
    text: 'text-black',
  },
};

const disabledConfigs: Configs = {
  'solid-primary': {
    container: 'bg-gray-300',
    text: 'text-white',
  },
  'solid-danger': {
    container: 'bg-gray-300',
    text: 'text-white',
  },
  'outline-primary': {
    container: 'border-solid border-2 bg-white border-gray-300',
    text: 'text-gray-300',
  },
  'outline-secondary': {
    container: 'border-solid border-2 bg-white border-gray-300',
    text: 'text-gray-300',
  },
};

type BoxButtonProps = PressableProps &
  Pick<TextProps, 'children'> & {
    type?: ConfigKey;
  };

export const BoxButton: FC<BoxButtonProps> = ({
  type = 'solid-primary',
  children,
  className,
  disabled = false,
  ...rest
}) => {
  const config = disabled ? disabledConfigs[type] : enabledConfigs[type];

  return (
    <Pressable
      className={clsx('p-3 rounded-md active:opacity-50', config.container)}
      disabled={disabled}
      {...rest}
    >
      <Text type="title3" className={clsx('text-center', config.text)}>
        {children}
      </Text>
    </Pressable>
  );
};
