import { FC, PropsWithChildren } from 'react';
import { Text } from '../../text';
import clsx from 'clsx';
import { Pressable } from '../../pressable';
import { View } from '../../view';
import {
  PlusIcon as PlusIconNative,
  CheckIcon as CheckIconNative,
} from 'react-native-heroicons/solid';
import { styled } from 'nativewind';
import { FilterChipProvider, useFilterChip } from './filter-chip-context';

const PlusIcon = styled(PlusIconNative, { classProps: ['fill', 'stroke'] });

const CheckIcon = styled(CheckIconNative, { classProps: ['fill', 'stroke'] });

type FilterChipProps = {
  fixed?: boolean;
  onValueChange?: (value?: string) => void;
  defaultValue?: string;
};

const FilterChipComponent: FC<PropsWithChildren<FilterChipProps>> = ({
  fixed = false,
  onValueChange,
  defaultValue,
  children,
}) => {
  return (
    <FilterChipProvider
      defaultValue={defaultValue}
      fixed={fixed}
      onValueChange={onValueChange}
    >
      <View className={clsx('flex-row flex-wrap')} style={{ gap: 12 }}>
        {children}
      </View>
    </FilterChipProvider>
  );
};

type FilterChipOptionProps = {
  title: string;
  id: string;
};

const FilterChipOption: FC<FilterChipOptionProps> = ({ id, title }) => {
  const { value, setValue, fixed } = useFilterChip();
  const selected = value === id;

  const handlePress = () => setValue((_id) => (id === _id ? undefined : id));

  return (
    <Pressable
      className={clsx(
        'flex-row bg-white rounded-md active:opacity-50 items-center justify-between px-3 border-solid border',
        selected ? 'border-green-500' : 'border border-gray-300',
        fixed ? 'flex-1' : ''
      )}
      style={{ gap: 8 }}
      onPress={handlePress}
    >
      <Text
        type="body2"
        className={clsx('py-2.5', 'text-black')}
        numberOfLines={1}
      >
        {title}
      </Text>
      {selected && (
        <CheckIcon fill="fill-green-500" stroke="stroke-green-500" size={16} />
      )}
      {!selected && (
        <PlusIcon fill="fill-gray-400" stroke="stroke-gray-400" size={16} />
      )}
    </Pressable>
  );
};

export const FilterChip = Object.assign(FilterChipComponent, {
  Option: FilterChipOption,
});
