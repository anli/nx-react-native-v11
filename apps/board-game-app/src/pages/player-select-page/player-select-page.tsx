import {
  Button,
  Checkbox,
  List,
  RadioButton,
  TopNavigation,
  View,
} from '@nx-react-native/shared-ui';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BackNavigationButton } from '@shared';
import { PlayerImageThumbnail, usePlayers } from '@entities';
import { FlatList } from 'react-native';
import { styled } from 'nativewind';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useState } from 'react';

const StyledFlatList = styled(FlatList, {
  props: {
    contentContainerStyle: true,
  },
});

export const PlayerSelectPage = () => {
  const {
    params: { playerIds = [] },
  } = useRoute<ReactNavigation.RouteProps<'PlayerSelectPage'>>();
  const { data: players } = usePlayers();
  const { navigate } = useNavigation();
  const [selectedPlayerIds, setSelectedPlayerIds] =
    useState<string[]>(playerIds);

  const handleToggleSelect = (id: string) => {
    return setSelectedPlayerIds((_selectedPlayerIds) => {
      if (_selectedPlayerIds.includes(id)) {
        return _selectedPlayerIds.filter((playerId) => playerId !== id);
      }

      return [..._selectedPlayerIds, id];
    });
  };

  const renderItem = ({ item }) => {
    return (
      <List.Item
        onPress={() => handleToggleSelect(item.id)}
        title={item.name}
        LeftComponent={<PlayerImageThumbnail id={item.id} />}
        RightComponent={
          <Checkbox
            value={selectedPlayerIds.includes(item.id)}
            onChange={() => handleToggleSelect(item.id)}
          />
        }
      />
    );
  };

  const handleSave = () => {
    return navigate({
      name: 'PlayCreatePage',
      params: {
        playerIds: selectedPlayerIds,
      },
      merge: true,
    });
  };

  const handleCreatePlayer = () => {
    navigate('PlayerCreatePage');
  };

  return (
    <View className="bg-white flex-1">
      <SafeAreaView edges={['bottom']} style={{ flex: 1, paddingTop: 8 }}>
        <RadioButton>
          <TopNavigation.Regular
            title="Select player"
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
          <StyledFlatList
            data={players}
            renderItem={renderItem}
            contentContainerStyle="py-2"
          />
        </RadioButton>

        <View className="p-4" style={{ gap: 8 }}>
          <Button.Box onPress={handleSave}>Continue</Button.Box>
          <Button.Box type="plain" onPress={handleCreatePlayer}>
            Add New Player
          </Button.Box>
        </View>
      </SafeAreaView>
    </View>
  );
};
