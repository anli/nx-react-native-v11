import { FC, PropsWithChildren } from 'react';
import { Text } from '../../text';
import clsx from 'clsx';
import { Pressable } from '../../pressable';
import { View } from '../../view';
import {
  FilterChipProvider,
  useFilterChip,
} from '../filter-chip/filter-chip-context';

type ChoiceChipProps = {
  onValueChange?: (value?: string) => void;
  defaultValue?: string;
};

const ChoiceChipComponent: FC<PropsWithChildren<ChoiceChipProps>> = ({
  onValueChange,
  defaultValue,
  children,
}) => {
  return (
    <FilterChipProvider
      defaultValue={defaultValue}
      fixed={false}
      onValueChange={onValueChange}
    >
      <View className={clsx('flex-row')} style={{ gap: 12 }}>
        {children}
      </View>
    </FilterChipProvider>
  );
};

type ChoiceChipOptionProps = {
  title: string;
  id: string;
};

const ChoiceChipOption: FC<ChoiceChipOptionProps> = ({ id, title }) => {
  const { value, setValue } = useFilterChip();
  const selected = value === id;

  const handlePress = () => setValue((_id) => (id === _id ? undefined : id));

  return (
    <Pressable
      className={clsx(
        'flex-row rounded-md active:opacity-50 items-center justify-between px-3 border-solid border',
        selected ? 'border-green-500' : 'border-transparent'
      )}
      style={{ gap: 8 }}
      onPress={handlePress}
    >
      <Text
        type="title3"
        className={clsx('py-3', selected ? 'text-green-500' : 'text-black')}
        numberOfLines={1}
      >
        {title}
      </Text>
    </Pressable>
  );
};

export const ChoiceChip = Object.assign(ChoiceChipComponent, {
  Option: ChoiceChipOption,
});
