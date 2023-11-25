import {
  Pressable,
  ActivityIndicator,
  ViewStyle,
  StyleProp,
} from 'react-native';
import * as Icons from 'react-native-heroicons/solid';
import { styled } from 'nativewind';
import { FC, useState } from 'react';

const PlayIcon = styled(Icons.PlayIcon);
type Mode = 'READY' | 'PLAYING';
type ButtonPlayProps = {
  onPress?: () => Promise<void>;
  iconStyle?: StyleProp<ViewStyle>;
};

const BaseButtonPlay: FC<ButtonPlayProps> = ({
  onPress,
  iconStyle,
  ...rest
}) => {
  const [mode, setMode] = useState<Mode>('READY');

  const handlePlay = async () => {
    try {
      setMode('PLAYING');
      await onPress?.();
    } finally {
      setMode('READY');
    }
  };

  return (
    <Pressable
      className="active:opacity-50 h-14 w-14 rounded-full self-center items-center justify-center"
      onPress={handlePlay}
      disabled={mode === 'PLAYING'}
      {...rest}
    >
      {mode === 'PLAYING' && <ActivityIndicator className="blue-700" />}
      {mode === 'READY' && <PlayIcon size={24} style={iconStyle} />}
    </Pressable>
  );
};

export const ButtonPlay = styled(BaseButtonPlay, {
  props: {
    iconStyle: true,
  },
});
