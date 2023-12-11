import clsx, { ClassValue } from 'clsx';
import { View } from '../../view';

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

export const BadgeDot = ({ type = 'primary' }: BadgeDotProps) => {
  const typeConfig = typeConfigs[type];

  return (
    <View
      className={clsx('self-start rounded-full p-1.5', typeConfig.container)}
    />
  );
};
