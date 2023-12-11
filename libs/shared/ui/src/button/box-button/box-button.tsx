import { Text, TextProps } from '../../text';
import { FC } from 'react';
import clsx, { ClassValue } from 'clsx';
import { ColorValue, PressableProps } from 'react-native';
import { Pressable } from '../../pressable';
import { ActivityIndicator } from '../../activity-indicator';

type TypeConfigKey =
  | 'solid-primary'
  | 'solid-danger'
  | 'outline-primary'
  | 'outline-secondary';

type TypeConfigs = Record<
  TypeConfigKey,
  {
    container: ClassValue;
    text: ClassValue;
    activityIndicatorColor: ColorValue;
  }
>;

const enabledConfigs: TypeConfigs = {
  'solid-primary': {
    container: 'bg-green-500',
    text: 'text-white',
    activityIndicatorColor: 'white',
  },
  'solid-danger': {
    container: 'bg-red-500',
    text: 'text-white',
    activityIndicatorColor: 'white',
  },
  'outline-primary': {
    container: 'border-solid border-2 border-green-500',
    text: 'text-green-500',
    activityIndicatorColor: 'gray',
  },
  'outline-secondary': {
    container: 'border-solid border-2 border-gray-300',
    text: 'text-black',
    activityIndicatorColor: 'gray',
  },
};

const disabledConfigs: TypeConfigs = {
  'solid-primary': {
    container: 'bg-gray-300',
    text: 'text-white',
    activityIndicatorColor: 'white',
  },
  'solid-danger': {
    container: 'bg-gray-300',
    text: 'text-white',
    activityIndicatorColor: 'white',
  },
  'outline-primary': {
    container: 'border-solid border-2 bg-white border-gray-300',
    text: 'text-gray-300',
    activityIndicatorColor: 'gray',
  },
  'outline-secondary': {
    container: 'border-solid border-2 bg-white border-gray-300',
    text: 'text-gray-300',
    activityIndicatorColor: 'gray',
  },
};

type SizeConfigKey = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

type SizeConfigs = Record<
  SizeConfigKey,
  {
    container?: ClassValue;
    textType: TextProps['type'];
  }
>;

const sizeConfigs: SizeConfigs = {
  xs: {
    container: 'p-1',
    textType: 'title5',
  },
  sm: {
    container: 'p-2',
    textType: 'title4',
  },
  md: {
    container: 'p-3',
    textType: 'title3',
  },
  lg: {
    container: 'p-4',
    textType: 'title2',
  },
  xl: {
    container: 'p-5',
    textType: 'title2',
  },
};

type BoxButtonProps = PressableProps &
  Pick<TextProps, 'children'> & {
    type?: TypeConfigKey;
    size?: SizeConfigKey;
    loading?: boolean;
  };

export const BoxButton: FC<BoxButtonProps> = ({
  type = 'solid-primary',
  children,
  className,
  disabled = false,
  size = 'md',
  loading = false,
  ...rest
}) => {
  const typeConfig = disabled ? disabledConfigs[type] : enabledConfigs[type];
  const sizeConfig = sizeConfigs[size];
  const showText = !loading;

  return (
    <Pressable
      className={clsx(
        'rounded-md active:opacity-50',
        typeConfig.container,
        sizeConfig?.container
      )}
      disabled={disabled}
      {...rest}
    >
      {loading && (
        <ActivityIndicator color={typeConfig?.activityIndicatorColor} />
      )}
      {showText && (
        <Text
          type={sizeConfig?.textType}
          className={clsx('text-center', typeConfig.text)}
        >
          {children}
        </Text>
      )}
    </Pressable>
  );
};
