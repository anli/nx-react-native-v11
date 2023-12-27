import { FC } from 'react';
import { View } from '../view';
import { Text } from '../text';
import { NumberProp, SvgProps } from 'react-native-svg';
import { Button } from '../button';

type EmptyProps = {
  renderIcon?: (props: SvgProps & { size?: NumberProp }) => JSX.Element;
  title?: string;
  description?: string;
  outlineButtonConfig?: { title?: string; onPress?: () => void };
  solidButtonConfig?: { title?: string; onPress?: () => void };
};

export const Empty: FC<EmptyProps> = ({
  renderIcon,
  title,
  description,
  outlineButtonConfig,
  solidButtonConfig,
}) => {
  const hasButtons = !!outlineButtonConfig || !!solidButtonConfig;

  return (
    <View className="bg-white justify-center items-center w-[305px] p-4 gap-2">
      {renderIcon?.({ size: 56, color: 'gray' })}

      <View>
        {!!title && (
          <Text className="text-center" type="heading2">
            {title}
          </Text>
        )}
        <Text className="text-center text-gray-400" type="body2">
          {description}
        </Text>
      </View>

      {hasButtons && (
        <View className="flex-row gap-2">
          {!!outlineButtonConfig && (
            <Button.Box
              type="outline-secondary"
              onPress={outlineButtonConfig.onPress}
              size="sm"
            >
              {outlineButtonConfig.title}
            </Button.Box>
          )}
          {!!solidButtonConfig && (
            <Button.Box
              type="solid-primary"
              onPress={solidButtonConfig.onPress}
              size="sm"
            >
              {solidButtonConfig.title}
            </Button.Box>
          )}
        </View>
      )}
    </View>
  );
};
