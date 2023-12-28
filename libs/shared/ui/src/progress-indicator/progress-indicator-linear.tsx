import { FC } from 'react';
import { View } from '../view';
import { NumberProp, SvgProps } from 'react-native-svg';
import * as Progress from 'react-native-progress';
import colors from 'tailwindcss/colors';
import { Text } from '../text';
import { XMarkIcon } from 'react-native-heroicons/solid';
import clsx from 'clsx';

type ProgressIndicatorLinearProps = Progress.BarPropTypes & {
  renderIcon: (props: SvgProps & { size?: NumberProp }) => JSX.Element;
  title: string;
  onDismiss: () => void;
  floating?: boolean;
};

export const ProgressIndicatorLinear: FC<ProgressIndicatorLinearProps> = ({
  floating = false,
  renderIcon,
  title,
  onDismiss,
  ...rest
}) => {
  return (
    <View
      className={clsx(
        'bg-white justify-center items-center p-4 flex-row',
        floating ? 'rounded-md shadow-sm w-[305px]' : ''
      )}
      style={{ gap: 8 }}
    >
      {renderIcon({ size: 36, color: 'black' })}
      <View className="flex-1" style={{ gap: 4 }}>
        <Text type="heading3">{title}</Text>
        <Progress.Bar
          width={null}
          height={3}
          color={colors.green['500']}
          unfilledColor={colors.gray['200']}
          useNativeDriver
          animationType="timing"
          borderWidth={0}
          {...rest}
        />
      </View>
      <XMarkIcon size="24" color="gray" onPress={onDismiss} />
    </View>
  );
};
