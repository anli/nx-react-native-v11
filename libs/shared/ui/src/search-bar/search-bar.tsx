import { FC } from 'react';
import { View } from '../view';
import { Pressable, TextInput, TextInputProps } from 'react-native';
import {
  ChevronLeftIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from 'react-native-heroicons/solid';

type SearchBarProps = TextInputProps & {
  onPress?: () => void;
  onCancel?: () => void;
  onBack?: () => void;
};

export const SearchBar: FC<SearchBarProps> = ({
  onPress,
  editable = true,
  onCancel,
  onBack,
  ...rest
}) => {
  const pointerEvents = editable ? undefined : 'box-only';

  return (
    <View
      className="bg-white py-2 px-4 flex-row items-center"
      style={{ gap: 8 }}
    >
      {onBack && <ChevronLeftIcon color="black" size={24} onPress={onBack} />}
      <Pressable
        className="bg-gray-100 p-3 rounded-md flex-1"
        onPress={onPress}
        pointerEvents={pointerEvents}
      >
        <View className="flex-row items-center gap-1">
          <MagnifyingGlassIcon size={16} color="gray" />
          <TextInput
            placeholder="Search"
            editable={editable}
            style={{ paddingVertical: 0, height: 20 }}
            {...rest}
          />
        </View>
      </Pressable>
      {onCancel && <XMarkIcon color="black" size={24} onPress={onCancel} />}
    </View>
  );
};
