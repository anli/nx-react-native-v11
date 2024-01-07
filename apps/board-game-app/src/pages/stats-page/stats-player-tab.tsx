import { Badge, List } from '@nx-react-native/shared-ui';
import { FlatList, ListRenderItem } from 'react-native';
import { formatDistanceToNow } from 'date-fns';
import { styled } from 'nativewind';

const StyledFlatList = styled(FlatList, {
  props: {
    contentContainerStyle: true,
  },
});
type Item = {
  name: string;
  playsCount: number;
  lastPlayed: string;
  winRatio: number;
};
const data: Item[] = [
  {
    name: 'John',
    playsCount: 2000,
    lastPlayed: '2023-10-22T08:00:00.000Z',
    winRatio: 0.5,
  },
  {
    name: 'Mary',
    playsCount: 529,
    lastPlayed: '2023-01-05T08:00:00.000Z',
    winRatio: 0.2,
  },
  {
    name: 'Jane',
    playsCount: 633,
    lastPlayed: '2022-04-03T08:00:00.000Z',
    winRatio: 0.9,
  },
];

export const StatsPlayerTab = () => {
  const renderItem: ListRenderItem<Item> = ({ item }) => {
    const label = `${item.playsCount.toLocaleString()} plays · ${formatDistanceToNow(
      item.lastPlayed,
      {
        addSuffix: true,
      }
    )}`;

    return (
      <List.Item
        title={item.name}
        description={label}
        RightComponent={
          <Badge.Number
            value={item.winRatio}
            format="percentage"
            type={item.winRatio >= 0.5 ? 'primary' : 'danger'}
          />
        }
      />
    );
  };

  return (
    <StyledFlatList
      data={data}
      renderItem={renderItem}
      contentContainerStyle="py-2"
    />
  );
};
