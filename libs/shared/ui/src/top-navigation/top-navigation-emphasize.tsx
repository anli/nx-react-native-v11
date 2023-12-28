import { FC } from 'react';
import { View } from '../view';
import { Text } from '../text';

import { NumberProp, SvgProps } from 'react-native-svg';
import { ChevronDownIcon } from 'react-native-heroicons/solid';

type TopNavigationEmphasizeProps = {
  title: string;
  buttons?: {
    Component: (props: SvgProps & { size?: NumberProp }) => JSX.Element;
    onPress?: () => void;
  }[];
  onMenu?: () => void;
};

export const TopNavigationEmphasize: FC<TopNavigationEmphasizeProps> = ({
  title,
  buttons,
  onMenu,
}) => {
  return (
    <View className="bg-white px-4 h-[50px] justify-between flex-row items-center">
      <View className="flex-row items-center" style={{ gap: 8 }}>
        <Text type="heading1">{title}</Text>
        {!!onMenu && (
          <ChevronDownIcon color="black" size={20} onPress={onMenu} />
        )}
      </View>
      <View className="flex-row" style={{ gap: 16 }}>
        {buttons?.map((button, index) => (
          <button.Component
            key={index}
            color="black"
            size={24}
            onPress={button?.onPress}
          />
        ))}
      </View>
    </View>
  );
};
