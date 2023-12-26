import clsx, { ClassValue } from 'clsx';
import { View } from '../../view';
import { FC } from 'react';

type TypeConfigKey = 'primary' | 'danger';

const typeConfigs: Record<
  TypeConfigKey,
  {
    container: ClassValue;
  }
> = {
  primary: {
    container: 'bg-green-500',
  },
  danger: {
    container: 'bg-red-500',
  },
};

type BadgeDotProps = {
  type?: TypeConfigKey;
};

export const BadgeDot: FC<BadgeDotProps> = ({ type = 'primary' }) => {
  const typeConfig = typeConfigs[type];

  return (
    <View
      className={clsx('self-start rounded-full p-1.5', typeConfig.container)}
    />
  );
};
