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

type Format = 'none' | 'percentage';

const getFormattedText = (value: BadgeNumberProps['value'], format: Format) => {
  if (format === 'percentage') {
    return value * 100 + '%';
  }

  return value > 999 ? '999+' : value;
};

type BadgeNumberProps = {
  value: number;
  type?: TypeConfigKey;
  format?: Format;
};

export const BadgeNumber: FC<BadgeNumberProps> = ({
  value,
  type = 'primary',
  format = 'none',
}) => {
  const text = getFormattedText(value, format);
  const typeConfig = typeConfigs[type];

  return (
    <View className="self-center rounded-full p-0.5 bg-white">
      <View className={clsx('rounded-full px-1.5', typeConfig.container)}>
        <Text type="title5" className={clsx(typeConfig.text)}>
          {text}
        </Text>
      </View>
    </View>
  );
};
