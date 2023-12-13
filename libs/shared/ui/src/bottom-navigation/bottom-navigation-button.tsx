import { NumberProp, SvgProps } from 'react-native-svg';
import { Text } from '../text';
import { View } from '../view';
import { FC } from 'react';

type BottomNavigationButtonProps = {
  title: string;
  renderIcon: (props: SvgProps & { size?: NumberProp }) => JSX.Element;
  renderBadge?: () => JSX.Element;
};

export const BottomNavigationButton: FC<BottomNavigationButtonProps> = ({
  title,
  renderIcon,
  renderBadge,
}) => {
  return (
    <View className="bg-white items-center justify-end w-14 h-14">
      {renderIcon({ size: 36, stroke: 'black' })}
      {!!title && (
        <Text type="body4" numberOfLines={1}>
          {title}
        </Text>
      )}
      {!!renderBadge && (
        <View className="absolute top-0 right-0">{renderBadge?.()}</View>
      )}
    </View>
  );
};
