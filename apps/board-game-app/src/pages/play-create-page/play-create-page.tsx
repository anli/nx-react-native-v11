import {
  Button,
  ListHeader,
  TopNavigation,
  View,
} from '@nx-react-native/shared-ui';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BackNavigationButton, useYupValidationResolver } from '@shared';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useCurrentPlayer } from '@entities';
import { useEffect } from 'react';
import { startOfDay } from 'date-fns';
import { Controller, useForm } from 'react-hook-form';
import { GameSelectChip } from './game-select-chip';
import { DateSelectChip } from './date-select-chip';
import { PlayPlayerItem } from './play-player-item';
import * as yup from 'yup';

const results: Record<
  string,
  {
    isWinner?: boolean;
    points: number;
    isMe?: boolean;
  }
> = {
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

type FormData = {
  gameId: string;
  date: string;
  playerIds: string[];
};

const validationSchema = yup.object({
  gameId: yup.string().required('Required'),
  date: yup.string().required('Required'),
  playerIds: yup.array().min(1),
});

export const PlayCreatePage = () => {
  const resolver = useYupValidationResolver(validationSchema);
  const { canGoBack, goBack, navigate } = useNavigation();
  const { data: currentPlayer } = useCurrentPlayer();
  const defaultValues = {
    gameId: undefined,
    date: startOfDay(new Date()).toISOString(),
    playerIds: [currentPlayer.id],
  };
  const { params: { gameId, playerIds } = {} } =
    useRoute<ReactNavigation.RouteProps<'PlayCreatePage'>>();
  const {
    control,
    setValue,
    handleSubmit,
    formState: { isValid },
  } = useForm<FormData>({
    defaultValues,
    resolver,
  });

  useEffect(() => {
    setValue('gameId', gameId, { shouldValidate: true });
  }, [gameId, setValue]);

  useEffect(() => {
    setValue('playerIds', playerIds, { shouldValidate: true });
  }, [playerIds, setValue]);

  const handleSave = handleSubmit((data) => {
    canGoBack() && goBack();
  });

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
            <Controller
              name="gameId"
              control={control}
              render={({ field: { value } }) => <GameSelectChip id={value} />}
            />
            <Controller
              name="date"
              control={control}
              render={({ field: { value, onChange } }) => (
                <DateSelectChip value={value} onChange={onChange} />
              )}
            />
          </View>

          <Controller
            name="playerIds"
            control={control}
            render={({ field: { value } }) => (
              <>
                <ListHeader
                  title="Players"
                  buttonType="text"
                  buttonTitle="Select"
                  onPress={() =>
                    navigate('PlayerSelectPage', { playerIds: value })
                  }
                />
                {value?.map((playerId) => (
                  <PlayPlayerItem
                    key={playerId}
                    playerId={playerId}
                    {...results[playerId]}
                  />
                ))}
              </>
            )}
          />
        </View>

        <View className="p-4">
          <Button.Box disabled={!isValid} onPress={handleSave}>
            Save
          </Button.Box>
        </View>
      </SafeAreaView>
    </View>
  );
};
