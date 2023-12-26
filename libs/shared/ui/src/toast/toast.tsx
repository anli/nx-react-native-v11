import { FC } from 'react';
import { Text } from '../text';
import { View } from '../view';
import clsx from 'clsx';
import { ActivityIndicator } from '../activity-indicator';
import { NumberProp, SvgProps } from 'react-native-svg';

type ToastProps = {
  loading?: boolean;
  title?: string;
  renderIcon?: (props: SvgProps & { size?: NumberProp }) => JSX.Element;
};

export const Toast: FC<ToastProps> = ({
  loading = false,
  title,
  renderIcon,
}) => {
  const hasHeader = renderIcon || loading;

  return (
    <View
      className={clsx(
        'self-start items-center justify-center p-5 rounded-lg active:opacity-50 bg-black',
        hasHeader ? 'min-w-[123px] min-h-[123px]' : 'max-w-[305px]'
      )}
      style={{ gap: 8 }}
    >
      {hasHeader && (
        <View className="items-center justify-center">
          {loading && <ActivityIndicator size="large" color="white" />}
          {!loading && renderIcon?.({ size: 45, color: 'white' })}
        </View>
      )}

      {!!title && (
        <Text className="text-white" type="title4">
          {title}
        </Text>
      )}
    </View>
  );
};
