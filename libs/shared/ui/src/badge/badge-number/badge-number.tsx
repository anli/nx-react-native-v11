import clsx, { ClassValue } from 'clsx';
import { Text } from '../../text';
import { View } from '../../view';
import { FC } from 'react';

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

export const BadgeNumber: FC<BadgeNumberProps> = ({
  value,
  type = 'primary',
}) => {
  const text = value > 999 ? '999+' : value;
  const typeConfig = typeConfigs[type];

  return (
    <View className="self-start rounded-full p-0.5 bg-white">
      <View className={clsx('rounded-full px-1.5', typeConfig.container)}>
        <Text type="body4" className={clsx(typeConfig.text)}>
          {text}
        </Text>
      </View>
    </View>
  );
};
