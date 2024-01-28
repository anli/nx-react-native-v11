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
import { useCurrentPlayer, useGameOne, usePlayerOne } from '@entities';
import DatePicker from 'react-native-date-picker';
import { FC, useState } from 'react';
import { format, startOfDay } from 'date-fns';

const results = {
  P1: {
    isWinner: true,
    points: 45,
    isMe: true,
  },
  P2: {
    points: 45,
    isWinner: true,
  },
};

export const PlayCreatePage = () => {
  const { canGoBack, goBack, navigate, setParams } = useNavigation();
  const { data: currentPlayer } = useCurrentPlayer();
  const defaultValues = {
    gameId: undefined,
    date: startOfDay(new Date()).toISOString(),
    playerIds: [currentPlayer.id],
  };
  const { params: { gameId, date, playerIds } = defaultValues } =
    useRoute<ReactNavigation.RouteProps<'PlayCreatePage'>>();
  const { data: gameData } = useGameOne(gameId);
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);

  const handleSave = () => {
    canGoBack() && goBack();
  };

  const handleGameSelect = () => navigate('GameSelectPage');

  const handleDatePickerChangeValue = (date: Date) => {
    setIsDatePickerVisible(false);
    setParams({ date: startOfDay(date).toISOString() });
  };

  const handleDatePickerToggle = () =>
    setIsDatePickerVisible((_visible) => !_visible);

  const handleSelectPlayer = () => navigate('PlayerSelectPage', { playerIds });

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
          <ListHeader
            title="Players"
            buttonType="text"
            buttonTitle="Select"
            onPress={handleSelectPlayer}
          />
          {playerIds?.map((playerId) => (
            <PlayPlayerItem
              key={playerId}
              playerId={playerId}
              {...results[playerId]}
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

const PlayPlayerItem: FC<{
  playerId: string;
  points: number;
  isWinner?: boolean;
}> = ({ playerId, points, isWinner }) => {
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
