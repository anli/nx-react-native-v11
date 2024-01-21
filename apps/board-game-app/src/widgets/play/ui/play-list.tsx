import { GameImageThumbnail, PlayListItem, useGameOne } from '@entities';
import { styled } from 'nativewind';
import { FlatList, ListRenderItem } from 'react-native';

const StyledFlatList = styled(FlatList, {
  props: {
    contentContainerStyle: true,
  },
});

type Item = {
  gameId: string;
  playerCount: number;
  playedDate: string;
  players: {
    name: string;
    imageUrl: string;
    isWinner?: boolean;
    isMe?: boolean;
  }[];
};
const data: Item[] = [
  {
    gameId: '169786',
    playerCount: 3,
    playedDate: '2023-10-22T08:00:00.000Z',
    players: [
      {
        name: 'John',
        imageUrl: 'https://avatar.iran.liara.run/public?username=John',
        isWinner: true,
        isMe: true,
      },
      {
        name: 'Ashley',
        imageUrl: 'https://avatar.iran.liara.run/public?username=Ashley',
      },
    ],
  },
  {
    gameId: '169786',
    playerCount: 2,
    playedDate: '2023-03-22T08:00:00.000Z',
    players: [
      {
        name: 'John',
        imageUrl: 'https://avatar.iran.liara.run/public?username=John',
        isMe: true,
      },
      {
        name: 'Ashley',
        imageUrl: 'https://avatar.iran.liara.run/public?username=Ashley',
        isWinner: true,
      },
    ],
  },
  {
    gameId: '199792',
    playerCount: 2,
    playedDate: '2023-06-22T08:00:00.000Z',
    players: [
      {
        name: 'John',
        imageUrl: 'https://avatar.iran.liara.run/public?username=John',
        isMe: true,
      },
      {
        name: 'Ashley',
        imageUrl: 'https://avatar.iran.liara.run/public?username=Ashley',
        isWinner: true,
      },
    ],
  },
];

export const PlayList = () => {
  const renderItem: ListRenderItem<Item> = ({ item }) => {
    return <Item {...item} />;
  };

  return (
    <StyledFlatList
      data={data}
      renderItem={renderItem}
      contentContainerStyle="py-2"
    />
  );
};

const Item = ({ gameId, playerCount, playedDate, players }) => {
  const { data: game } = useGameOne(gameId);

  return (
    <PlayListItem
      title={game?.name}
      playerCount={playerCount}
      playedDate={playedDate}
      players={players}
      LeftComponent={<GameImageThumbnail id={gameId} />}
    />
  );
};
