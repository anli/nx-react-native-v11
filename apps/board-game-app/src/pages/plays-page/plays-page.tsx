import { SearchBar, TopNavigation, View } from '@nx-react-native/shared-ui';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PlayList } from '@widgets';
import { PlayCreateButton } from '@entities';

export const PlaysPage = () => {
  return (
    <View className="bg-white flex-1">
      <SafeAreaView edges={['top']} style={{ flex: 1 }}>
        <TopNavigation.Emphasize
          title="Plays"
          buttons={[
            {
              Component: PlayCreateButton,
            },
          ]}
        />
        <SearchBar />
        <PlayList />
      </SafeAreaView>
    </View>
  );
};
