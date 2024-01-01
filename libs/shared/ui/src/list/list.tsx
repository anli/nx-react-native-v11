import { FC, PropsWithChildren } from 'react';
import { View } from '../view';
import { Text } from '../text';
import { Pressable } from '../pressable';
import { PressableProps } from 'react-native';

const ListComponent: FC<PropsWithChildren> = ({ children }) => {
  return <View>{children}</View>;
};

type ListItemProps = PressableProps & {
  title: string;
  description?: string;
  RightComponent?: JSX.Element;
};

const ListItem: FC<ListItemProps> = ({
  title,
  description,
  RightComponent,
  ...rest
}) => {
  return (
    <Pressable
      className="bg-white p-5 flex-row items-center active:opacity-50"
      style={{ gap: 16 }}
      {...rest}
    >
      <View className="flex-1">
        <Text type="title2">{title}</Text>
        <Text type="body2" className="text-gray-500">
          {description}
        </Text>
      </View>
      {RightComponent}
    </Pressable>
  );
};

export const List = Object.assign(ListComponent, {
  Item: ListItem,
});
