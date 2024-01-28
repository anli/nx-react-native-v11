import { FC } from 'react';
import { usePlayerOne } from '@entities';
import { Icon, List, Pressable } from '@nx-react-native/shared-ui';

type PlayPlayerItemProps = {
  playerId: string;
  points: number;
  isWinner?: boolean;
};

export const PlayPlayerItem: FC<PlayPlayerItemProps> = ({
  playerId,
  points,
  isWinner,
}) => {
  const { data: player } = usePlayerOne(playerId);
  const description = points ? `${points} points` : 'Tap to update result';

  return (
    <List.Item
      title={player?.name}
      description={description}
      LeftComponent={
        <Pressable className="items-center justify-center">
          {isWinner ? (
            <Icon name="TrophyIcon" size={20} color="black" type="outline" />
          ) : (
            <Icon name="UserIcon" size={20} color="black" type="outline" />
          )}
        </Pressable>
      }
      RightComponent={
        <Pressable>
          <Icon
            name="EllipsisVerticalIcon"
            size={24}
            color="gray"
            type="outline"
          />
        </Pressable>
      }
    />
  );
};
