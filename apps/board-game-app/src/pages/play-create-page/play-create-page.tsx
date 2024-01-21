import {
  ActionChip,
  Button,
  Icon,
  List,
  ListHeader,
  Pressable,
  TopNavigation,
  View,
} from '@nx-react-native/shared-ui';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BackNavigationButton } from '@shared';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useGameOne } from '@entities';
import DatePicker from 'react-native-date-picker';
import { useState } from 'react';
import { format, startOfDay } from 'date-fns';

const players = [
  {
    name: 'John',
    isWinner: true,
    isMe: true,
    points: 45,
  },
  {
    name: 'Ashley',
    points: 45,
    isWinner: true,
  },
  {
    name: 'Mary',
    isMe: true,
    points: 20,
  },
  {
    name: 'Jane',
    points: 10,
  },
];

export const PlayCreatePage = () => {
  const { canGoBack, goBack, navigate, setParams } = useNavigation();
  const { params: { gameId, date } = {} } =
    useRoute<ReactNavigation.RouteProps<'PlayCreatePage'>>();
  const { data: gameData } = useGameOne(gameId);
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);

  const handleSave = () => {
    canGoBack() && goBack();
  };

  const handleGameSelect = () => {
    navigate('GameSelectPage');
  };

  const handleDatePickerChangeValue = (date: Date) => {
    setIsDatePickerVisible(false);
    setParams({ date: startOfDay(date).toISOString() });
  };

  const handleDatePickerToggle = () =>
    setIsDatePickerVisible((_visible) => !_visible);

  return (
    <View className="bg-white flex-1">
      <SafeAreaView edges={['top', 'bottom']} style={{ flex: 1 }}>
        <TopNavigation.Regular
          title="Create Play"
          closeButton={{
            Component: BackNavigationButton,
          }}
        />
        <View className="flex-1">
          <ListHeader title="Game" />
          <View className="px-4 py-2 flex-row flex-wrap" style={{ gap: 12 }}>
            {gameId && gameData ? (
              <ActionChip
                title={gameData.name}
                imagePath={gameData.thumbnail}
                small
                outlined
                onPress={handleGameSelect}
              />
            ) : (
              <ActionChip
                title="What did you played?"
                small
                outlined
                onPress={handleGameSelect}
              />
            )}

            {date ? (
              <ActionChip
                title={format(
                  new Date(startOfDay(date).toISOString()),
                  'E, d MMM yyyy'
                )}
                small
                outlined
                onPress={handleDatePickerToggle}
              />
            ) : (
              <ActionChip
                title="Played on?"
                small
                outlined
                onPress={handleDatePickerToggle}
              />
            )}
          </View>
          <ListHeader title="Players" buttonType="text" buttonTitle="Add" />
          {players.map((player) => (
            <List.Item
              key={player.name}
              title={player.name}
              description={`${player.points} points`}
              LeftComponent={
                <Pressable className="items-center justify-center">
                  {player.isWinner ? (
                    <Icon
                      name="TrophyIcon"
                      size={20}
                      color="black"
                      type="outline"
                    />
                  ) : (
                    <Icon
                      name="UserIcon"
                      size={20}
                      color="black"
                      type="outline"
                    />
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
          ))}
        </View>

        <View className="p-4">
          <Button.Box onPress={handleSave}>Save</Button.Box>
        </View>
        <DatePicker
          modal
          open={isDatePickerVisible}
          date={date ? new Date(date) : new Date()}
          onConfirm={handleDatePickerChangeValue}
          onCancel={handleDatePickerToggle}
          mode="date"
        />
      </SafeAreaView>
    </View>
  );
};
