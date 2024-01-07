import { NumberProp, SvgProps } from 'react-native-svg';
import { Text } from '../text';
import { View } from '../view';
import { FC } from 'react';
import { Pressable } from '../pressable';
import { PressableProps, StyleSheet } from 'react-native';

const iconSize = 24;

type BottomNavigationButtonProps = PressableProps & {
  title?: string;
  titleClassName?: string;
  renderIcon: (props: SvgProps & { size?: NumberProp }) => JSX.Element;
  renderBadge?: () => JSX.Element;
};

export const BottomNavigationButton: FC<BottomNavigationButtonProps> = ({
  title,
  renderIcon,
  renderBadge,
  titleClassName,
  ...rest
}) => {
  return (
    <Pressable
      className="bg-white items-center justify-end w-14 h-14 flex-1"
      style={styles.container}
      {...rest}
    >
      {renderIcon({ size: iconSize, stroke: 'black' })}
      {!!title && (
        <Text type="body4" numberOfLines={1} className={titleClassName}>
          {title}
        </Text>
      )}
      {!!renderBadge && (
        <View className="absolute top-0 right-0">{renderBadge?.()}</View>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: { gap: 2 },
});
