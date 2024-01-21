import { FC } from 'react';
import { Text } from '../text';
import { Pressable } from 'react-native';
import {
  ChevronDownIcon,
  ChevronRightIcon,
  ChevronUpIcon,
} from 'react-native-heroicons/solid';
import { NumberProp, SvgProps } from 'react-native-svg';
import { View } from '../view';

type ListHeaderProps = {
  renderTitleIcon?: (props: SvgProps & { size?: NumberProp }) => JSX.Element;
  title?: string;
  buttonType?: 'up' | 'text' | 'down' | 'right';
  buttonTitle?: string;
  onPress?: () => void;
};

export const ListHeader: FC<ListHeaderProps> = ({
  renderTitleIcon,
  title,
  buttonType,
  buttonTitle,
  onPress,
}) => {
  return (
    <Pressable
      className="bg-white py-2 px-4 justify-between flex-row items-center active:opacity-50"
      onPress={onPress}
    >
      <View className="flex-row items-center gap-2">
        {renderTitleIcon?.({ size: 16, color: 'black' })}
        <Text type="heading3">{title}</Text>
      </View>
      {buttonType === 'text' && (
        <Text type="heading4" className="text-gray-400">
          {buttonTitle}
        </Text>
      )}
      {buttonType === 'right' && <ChevronRightIcon size={16} color="gray" />}
      {buttonType === 'down' && <ChevronDownIcon size={16} color="gray" />}
      {buttonType === 'up' && <ChevronUpIcon size={16} color="gray" />}
    </Pressable>
  );
};
