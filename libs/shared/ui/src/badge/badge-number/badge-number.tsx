import clsx, { ClassValue } from 'clsx';
import { Text } from '../../text';
import { View } from '../../view';
import { Platform } from 'react-native';

type TypeConfigKey = 'primary' | 'danger';

const typeConfigs: Record<
  TypeConfigKey,
  {
    container: ClassValue;
    text: ClassValue;
  }
> = {
  primary: {
    container: 'bg-green-500',
    text: 'text-white',
  },
  danger: {
    container: 'bg-red-500',
    text: 'text-white',
  },
};

type BadgeNumberProps = {
  value: number;
  type?: TypeConfigKey;
};

export const BadgeNumber = ({ value, type = 'primary' }: BadgeNumberProps) => {
  const text = value > 999 ? '999+' : value;
  const typeConfig = typeConfigs[type];

  return (
    <View className="self-start rounded-full p-1 bg-white">
      <View
        className={clsx(
          'rounded-full',
          Platform.select({
            android: 'py-0.5 px-2.5',
            default: 'py-1 px-2.5',
          }),
          typeConfig.container
        )}
      >
        <Text type="title2" className={clsx(typeConfig.text)}>
          {text}
        </Text>
      </View>
    </View>
  );
};
