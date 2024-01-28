import { useGameOne } from '@entities';
import { ActionChip, ActionChipProps } from '@nx-react-native/shared-ui';
import { useNavigation } from '@react-navigation/native';
import { FC } from 'react';

type GameSelectChipProps = Partial<ActionChipProps> & { id: string };

export const GameSelectChip: FC<GameSelectChipProps> = ({ id, ...rest }) => {
  const { navigate } = useNavigation();
  const { data } = useGameOne(id);

  const handleGameSelect = () => navigate('GameSelectPage');

  if (data) {
    return (
      <ActionChip
        title={data.name}
        imagePath={data.thumbnail}
        small
        outlined
        onPress={handleGameSelect}
        {...rest}
      />
    );
  }

  return (
    <ActionChip
      title="What did you played?"
      small
      outlined
      onPress={handleGameSelect}
      {...rest}
    />
  );
};
