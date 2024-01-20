import { formatDistanceToNow } from 'date-fns';
import { Badge, Icon, List, Profile, View } from '@nx-react-native/shared-ui';
import { FC } from 'react';

type PlayListItemProps = {
  title: string;
  playerCount: number;
  playedDate: string;
  players: {
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
                  <Profile
                    source={{ uri: player.imageUrl }}
                    size="xs"
                    renderBadge={player.isMe ? () => <Badge.Dot /> : undefined}
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
