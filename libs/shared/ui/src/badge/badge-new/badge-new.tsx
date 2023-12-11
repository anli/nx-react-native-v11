import clsx from 'clsx';
import { Text } from '../../text';
import { View } from '../../view';
import { Platform } from 'react-native';

export const BadgeNew = () => {
  return (
    <View
      className={clsx(
        'self-start rounded-full py-1 px-2 bg-green-500',
        Platform.select({
          android: 'py-0.5 px-2',
          default: 'py-1 px-2',
        })
      )}
    >
      <Text type="title2" className="text-white">
        N
      </Text>
    </View>
  );
};
