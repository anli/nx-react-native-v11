import { FC } from 'react';
import { Text } from '../text';
import { View } from '../view';
import clsx from 'clsx';
import { Pressable } from '../pressable';

const config = {
  container: {
    backgroundType: {
      basic: 'bg-gray-400',
      dim: 'bg-black',
    },
  },
};

type SnackbarProps = {
  backgroundType?: 'basic' | 'dim';
  buttonTitle?: string;
  onPress?: () => void;
  title?: string;
  description?: string;
};

export const Snackbar: FC<SnackbarProps> = ({
  backgroundType = 'basic',
  title,
  description,
  buttonTitle,
  onPress,
}) => {
  return (
    <Pressable
      className={clsx(
        'flex-row items-center p-5 rounded-xl active:opacity-50',
        config.container.backgroundType[backgroundType]
      )}
      onPress={onPress}
    >
      <View className="flex-1">
        {!!title && (
          <Text numberOfLines={2} className="text-white" type="title3">
            {title}
          </Text>
        )}
        {!!description && (
          <Text numberOfLines={2} className=" text-white" type="body1">
            {description}
          </Text>
        )}
      </View>
      {!!buttonTitle && (
        <Text type="title3" className="text-white pl-2">
          {buttonTitle}
        </Text>
      )}
    </Pressable>
  );
};
