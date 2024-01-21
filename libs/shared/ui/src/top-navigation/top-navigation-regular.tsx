import { FC } from 'react';
import { View } from '../view';
import { Text } from '../text';

import { NumberProp, SvgProps } from 'react-native-svg';

type TopNavigationRegularProps = {
  title: string;
  buttons?: {
    Component: (props: SvgProps & { size?: NumberProp }) => JSX.Element;
    onPress?: () => void;
  }[];
  onMenu?: () => void;
  closeButton?: {
    Component: (props: SvgProps & { size?: NumberProp }) => JSX.Element;
    onPress?: () => void;
  };
};

export const TopNavigationRegular: FC<TopNavigationRegularProps> = ({
  title,
  buttons,
  closeButton,
}) => {
  return (
    <View className="bg-white px-4 h-[50px] justify-between flex-row items-center">
      <View className="absolute right-0 left-0 items-center">
        <Text type="heading2">{title}</Text>
      </View>
      <View>
        {!!closeButton && (
          <closeButton.Component
            size={24}
            color="black"
            onPress={closeButton?.onPress}
          />
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
