import { FC } from 'react';
import { Text } from '../text';
import { View } from '../view';
import clsx from 'clsx';
import { NumberProp, SvgProps } from 'react-native-svg';
import { Button } from '../button';
import type { BoxButtonProps } from '../button/box-button';

type PopupProps = {
  renderIcon?: (props: SvgProps & { size?: NumberProp }) => JSX.Element;
  title: string;
  description: string;
  buttons?: (Omit<BoxButtonProps, 'children'> & { title: string })[];
};

export const Popup: FC<PopupProps> = ({
  renderIcon,
  title,
  description,
  buttons,
}) => {
  const hasButtons = !!buttons && buttons?.length > 0;

  return (
    <View
      className={clsx(
        'items-center justify-center p-5 rounded-lg bg-white max-w-[305px] gap-y-2'
      )}
    >
      {renderIcon?.({ size: 64, color: 'gray' })}

      <View className="gap-1">
        <Text className="text-center" type="title3">
          {title}
        </Text>
        <Text className="text-center text-gray-400" type="body3">
          {description}
        </Text>
      </View>
      {hasButtons && (
        <View className="w-full gap-y-2">
          {buttons.map(({ title, ...rest }) => (
            <Button.Box key={title} size="md" {...rest}>
              {title}
            </Button.Box>
          ))}
        </View>
      )}
    </View>
  );
};
