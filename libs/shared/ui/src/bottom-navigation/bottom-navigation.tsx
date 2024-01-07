import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View } from '../view';
import { FC } from 'react';
import { BottomNavigationButton } from './bottom-navigation-button';
import { Icon, type IconProps } from '../icon';

export type BottomNavigationProps = BottomTabBarProps & {
  iconConfigs: Record<string, IconProps>;
};

export const BottomNavigation: FC<BottomNavigationProps> = ({
  state,
  descriptors,
  navigation,
  iconConfigs,
}) => {
  const { bottom } = useSafeAreaInsets();

  return (
    <View
      className="flex-row android:mb-1 border-t border-gray-200"
      style={{ paddingBottom: bottom }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;
        const iconConfig: IconProps = {
          ...iconConfigs[route.name],
          type: isFocused ? 'solid' : 'outline',
          color: 'black',
          stroke: 'black',
        };

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        return (
          <BottomNavigationButton
            key={route.key}
            title={options.title}
            titleClassName={isFocused ? 'font-medium' : ''}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            renderIcon={(props) => <Icon {...props} {...iconConfig} />}
          />
        );
      })}
    </View>
  );
};
