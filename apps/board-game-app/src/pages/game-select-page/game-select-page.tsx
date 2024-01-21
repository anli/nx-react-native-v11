import {
  List,
  RadioButton,
  SearchBar,
  TopNavigation,
  View,
} from '@nx-react-native/shared-ui';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BackNavigationButton } from '@shared';
import { GameImageThumbnail, useGameSearch } from '@entities';
import { FlatList } from 'react-native';
import { styled } from 'nativewind';
import { useMemo, useState } from 'react';
import debounce from 'lodash.debounce';
import { useNavigation } from '@react-navigation/native';

const StyledFlatList = styled(FlatList, {
  props: {
    contentContainerStyle: true,
  },
});

const timeout = 1000;

export const GameSelectPage = () => {
  const [searchText, setSearchText] = useState<string>('');
  const { data } = useGameSearch(searchText);
  const { navigate } = useNavigation();

  const handleSearch = (text: string) => {
    text.length >= 3 && setSearchText(text);
  };

  const debouncedHandleSearch = useMemo(
    () => debounce(handleSearch, timeout),
    []
  );

  const handleSelect = (id: string) => {
    return navigate({
      name: 'PlayCreatePage',
      params: {
        gameId: id,
      },
      merge: true,
    });
  };

  const renderItem = ({ item }) => {
    return (
      <List.Item
        onPress={() => handleSelect(item.id)}
        title={item.name}
        LeftComponent={<GameImageThumbnail id={item.id} />}
      />
    );
  };

  return (
    <View className="bg-white flex-1">
      <SafeAreaView edges={['bottom']} style={{ flex: 1, paddingTop: 8 }}>
        <RadioButton>
          <TopNavigation.Regular
            title="Select game"
            buttons={[
              {
                Component: () => (
                  <BackNavigationButton
                    name="XMarkIcon"
                    size={24}
                    color="black"
                  />
                ),
              },
            ]}
          />
          <SearchBar
            onChangeText={debouncedHandleSearch}
            placeholder="Search game"
          />

          <StyledFlatList
            data={data}
            renderItem={renderItem}
            contentContainerStyle="py-2"
          />
        </RadioButton>
      </SafeAreaView>
    </View>
  );
};
