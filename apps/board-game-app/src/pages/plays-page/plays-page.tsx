import {
  Badge,
  Icon,
  Image,
  List,
  Profile,
  SearchBar,
  TopNavigation,
  View,
} from '@nx-react-native/shared-ui';
import { FlatList, ListRenderItem } from 'react-native';
import { formatDistanceToNow } from 'date-fns';
import { styled } from 'nativewind';
import { SafeAreaView } from 'react-native-safe-area-context';

const StyledFlatList = styled(FlatList, {
  props: {
    contentContainerStyle: true,
  },
});
type Item = {
  game: {
    imageUrl: string;
    name: string;
  };
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
    game: {
      imageUrl:
        'https://cf.geekdo-images.com/7k_nOxpO9OGIjhLq2BUZdA__imagepagezoom/img/0dn7QcDY2l5ljFXv6OYk46irzZg=/fit-in/1200x900/filters:no_upscale():strip_icc()/pic3163924.jpg',
      name: 'Scythe',
    },
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
    game: {
      imageUrl:
        'https://cf.geekdo-images.com/7k_nOxpO9OGIjhLq2BUZdA__imagepagezoom/img/0dn7QcDY2l5ljFXv6OYk46irzZg=/fit-in/1200x900/filters:no_upscale():strip_icc()/pic3163924.jpg',
      name: 'Scythe',
    },
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
];

export const PlaysPage = () => {
  const handleCreatePlay = () => {
    // Open play create page
  };

  const renderItem: ListRenderItem<Item> = ({ item }) => {
    const label = `${item.playerCount.toLocaleString()} players · ${formatDistanceToNow(
      item.playedDate,
      {
        addSuffix: true,
      }
    )}`;

    return (
      <List.Item
        title={item.game.name}
        description={label}
        LeftComponent={
          <Image
            source={{ uri: item.game.imageUrl }}
            height={40}
            width={40}
            className="rounded"
          />
        }
        RightComponent={
          <View className="flex-row">
            {[...item.players]
              .filter((player) => player.isWinner)
              .sort((a, b) => Number(a.isMe ?? 0) - Number(b.isMe ?? 0))
              .map((player) => {
                return (
                  <View key={player.name}>
                    <Profile
                      source={{ uri: player.imageUrl }}
                      size="xs"
                      renderBadge={
                        player.isMe ? () => <Badge.Dot /> : undefined
                      }
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

  return (
    <View className="bg-white flex-1">
      <SafeAreaView edges={['top']} style={{ flex: 1 }}>
        <TopNavigation.Emphasize
          title="Plays"
          buttons={[
            {
              Component: (props) => (
                <Icon name="PlusIcon" {...props} onPress={handleCreatePlay} />
              ),
            },
          ]}
        />
        <SearchBar />
        <StyledFlatList
          data={data}
          renderItem={renderItem}
          contentContainerStyle="py-2"
        />
      </SafeAreaView>
    </View>
  );
};
