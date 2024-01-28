import { formatDistanceToNow } from 'date-fns';
import { Icon, List, View } from '@nx-react-native/shared-ui';
import { FC } from 'react';
import { PlayerImageThumbnail } from '@entities';

type PlayListItemProps = {
  title: string;
  playerCount: number;
  playedDate: string;
  players: {
    id: string;
    isWinner: boolean;
    isMe: boolean;
    name: string;
    imageUrl: string;
  }[];
  LeftComponent?: JSX.Element;
};

export const PlayListItem: FC<PlayListItemProps> = ({
  title,
  playerCount,
  playedDate,
  players,
  LeftComponent,
}) => {
  const label = `${playerCount.toLocaleString()} players · ${formatDistanceToNow(
    playedDate,
    {
      addSuffix: true,
    }
  )}`;

  return (
    <List.Item
      title={title}
      description={label}
      LeftComponent={LeftComponent}
      RightComponent={
        <View className="flex-row">
          {[...players]
            .filter((player) => player.isWinner)
            .sort((a, b) => Number(a.isMe ?? 0) - Number(b.isMe ?? 0))
            .map((player) => {
              return (
                <View key={player.name}>
                  <PlayerImageThumbnail
                    id={player.id}
                    renderIcon={(props) => (
                      <Icon name="TrophyIcon" {...props} />
                    )}
                  />
                </View>
              );
            })}
        </View>
      }
    />
  );
};
