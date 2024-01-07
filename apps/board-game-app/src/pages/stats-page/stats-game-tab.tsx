import { Badge, Image, List } from '@nx-react-native/shared-ui';
import { FlatList, ListRenderItem } from 'react-native';
import { formatDistanceToNow } from 'date-fns';
import { styled } from 'nativewind';

const StyledFlatList = styled(FlatList, {
  props: {
    contentContainerStyle: true,
  },
});
type Item = {
  imageUrl: string;
  name: string;
  playsCount: number;
  lastPlayed: string;
  winRatio: number;
};
const data: Item[] = [
  {
    imageUrl:
      'https://cf.geekdo-images.com/7k_nOxpO9OGIjhLq2BUZdA__imagepagezoom/img/0dn7QcDY2l5ljFXv6OYk46irzZg=/fit-in/1200x900/filters:no_upscale():strip_icc()/pic3163924.jpg',
    name: 'Scythe',
    playsCount: 2000,
    lastPlayed: '2023-10-22T08:00:00.000Z',
    winRatio: 0.5,
  },
  {
    imageUrl:
      'https://cf.geekdo-images.com/yLZJCVLlIx4c7eJEWUNJ7w__imagepagezoom/img/yS4vL6iTCvHSvGySxyOjV_-R3dI=/fit-in/1200x900/filters:no_upscale():strip_icc()/pic4458123.jpg',
    name: 'Wingspan',
    playsCount: 529,
    lastPlayed: '2023-01-05T08:00:00.000Z',
    winRatio: 0.2,
  },
  {
    imageUrl:
      'https://cf.geekdo-images.com/x3zxjr-Vw5iU4yDPg70Jgw__imagepagezoom/img/7a0LOL48K-7JNIOSGtcsNsIxkN0=/fit-in/1200x900/filters:no_upscale():strip_icc()/pic3490053.jpg',
    name: 'Brass: Birmingham',
    playsCount: 633,
    lastPlayed: '2022-04-03T08:00:00.000Z',
    winRatio: 0.9,
  },
];

export const StatsGameTab = () => {
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
        LeftComponent={
          <Image
            source={{ uri: item.imageUrl }}
            height={40}
            width={40}
            className="rounded"
          />
        }
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
