import { FC } from 'react';
import { Text } from '../../text';
import clsx from 'clsx';
import { Pressable } from '../../pressable';
import { PressableProps } from 'react-native';

type ActionChipProps = PressableProps & {
  title: string;
  small: boolean;
  outlined: boolean;
};

export const ActionChip: FC<ActionChipProps> = ({
  title,
  small = false,
  outlined = false,
}) => {
  return (
    <Pressable
      className={clsx(
        'self-start rounded-md active:opacity-50',
        small ? 'py-2 px-3' : 'py-3 px-4',
        outlined ? 'bg-white' : 'bg-green-500 '
      )}
    >
      <Text
        type={small ? 'body2' : 'body1'}
        className={clsx(outlined ? 'text-black' : 'text-white')}
      >
        {title}
      </Text>
    </Pressable>
  );
};
