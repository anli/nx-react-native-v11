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
  LeftComponent?: JSX.Element;
};

const ListItem: FC<ListItemProps> = ({
  title,
  description,
  RightComponent,
  LeftComponent,
  ...rest
}) => {
  const titleType = description ? 'title5' : 'title3';

  return (
    <Pressable
      className="bg-white px-4 py-2 flex-row active:opacity-50 items-center"
      style={{ gap: 16 }}
      {...rest}
    >
      {LeftComponent}
      <View className="flex-1 justify-center">
        <Text type={titleType}>{title}</Text>
        {!!description && (
          <Text type="body2" className="text-gray-500">
            {description}
          </Text>
        )}
      </View>
      {RightComponent}
    </Pressable>
  );
};

export const List = Object.assign(ListComponent, {
  Item: ListItem,
});
