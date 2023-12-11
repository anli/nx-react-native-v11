import { Text, TextProps } from '../../text';
import { FC } from 'react';
import clsx, { ClassValue } from 'clsx';
import { ColorValue, PressableProps } from 'react-native';
import { Pressable } from '../../pressable';
import { ActivityIndicator } from '../../activity-indicator';
import type { NumberProp, SvgProps } from 'react-native-svg';

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
    iconColor: ColorValue;
  }
>;

const enabledConfigs: TypeConfigs = {
  'solid-primary': {
    container: 'bg-green-500',
    text: 'text-white',
    iconColor: 'white',
  },
  'solid-danger': {
    container: 'bg-red-500',
    text: 'text-white',
    iconColor: 'white',
  },
  'outline-primary': {
    container: 'border-solid border-2 border-green-500',
    text: 'text-green-500',
    iconColor: 'gray',
  },
  'outline-secondary': {
    container: 'border-solid border-2 border-gray-300',
    text: 'text-black',
    iconColor: 'gray',
  },
};

const disabledConfigs: TypeConfigs = {
  'solid-primary': {
    container: 'bg-gray-300',
    text: 'text-white',
    iconColor: 'white',
  },
  'solid-danger': {
    container: 'bg-gray-300',
    text: 'text-white',
    iconColor: 'white',
  },
  'outline-primary': {
    container: 'border-solid border-2 bg-white border-gray-300',
    text: 'text-gray-300',
    iconColor: 'gray',
  },
  'outline-secondary': {
    container: 'border-solid border-2 bg-white border-gray-300',
    text: 'text-gray-300',
    iconColor: 'gray',
  },
};

type SizeConfigKey = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

type SizeConfigs = Record<
  SizeConfigKey,
  {
    container?: ClassValue;
    textType: TextProps['type'];
    iconSize: number;
  }
>;

const sizeConfigs: SizeConfigs = {
  xs: {
    container: 'p-1',
    textType: 'title5',
    iconSize: 14,
  },
  sm: {
    container: 'p-2',
    textType: 'title4',
    iconSize: 16,
  },
  md: {
    container: 'p-3',
    textType: 'title3',
    iconSize: 16,
  },
  lg: {
    container: 'p-4',
    textType: 'title2',
    iconSize: 18,
  },
  xl: {
    container: 'p-5',
    textType: 'title2',
    iconSize: 20,
  },
};

type BoxButtonProps = PressableProps &
  Pick<TextProps, 'children'> & {
    type?: TypeConfigKey;
    size?: SizeConfigKey;
    loading?: boolean;
    renderIcon?: (props: SvgProps & { size?: NumberProp }) => JSX.Element;
  };

export const BoxButton: FC<BoxButtonProps> = ({
  type = 'solid-primary',
  children,
  className,
  disabled = false,
  size = 'md',
  loading = false,
  renderIcon,
  ...rest
}) => {
  const typeConfig = disabled ? disabledConfigs[type] : enabledConfigs[type];
  const sizeConfig = sizeConfigs[size];
  const showContent = !loading;
  const Icon = renderIcon?.({
    size: sizeConfig.iconSize,
    fill: typeConfig.iconColor,
  });
  const isHorizontal = !!Icon && !!children;

  return (
    <Pressable
      className={clsx(
        'rounded-md active:opacity-50  justify-center items-center',
        isHorizontal ? 'flex-row' : '',
        typeConfig.container,
        sizeConfig?.container
      )}
      disabled={disabled}
      {...rest}
    >
      {loading && <ActivityIndicator color={typeConfig?.iconColor} />}
      {showContent && (
        <>
          {Icon}
          {!!children && (
            <Text
              type={sizeConfig?.textType}
              className={clsx('text-center px-1', typeConfig.text)}
            >
              {children}
            </Text>
          )}
        </>
      )}
    </Pressable>
  );
};
