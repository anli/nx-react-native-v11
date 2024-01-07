import { Tabs, TopNavigation, View } from '@nx-react-native/shared-ui';
import { SceneMap } from 'react-native-tab-view';
import { StatsPlayerTab } from './stats-player-tab';
import { StatsGameTab } from './stats-game-tab';
import { SafeAreaView } from 'react-native-safe-area-context';

type SceneKey = 'players' | 'games';
const routes: { key: SceneKey; title: string }[] = [
  { key: 'players', title: 'Players' },
  { key: 'games', title: 'Game' },
];
const scenes: Record<SceneKey, () => React.JSX.Element> = {
  players: StatsPlayerTab,
  games: StatsGameTab,
};
const renderScene = SceneMap(scenes);

export const StatsPage = () => {
  return (
    <View className="bg-white flex-1">
      <SafeAreaView edges={['top']} style={{ flex: 1 }}>
        <TopNavigation.Emphasize title="Stats" />
        <Tabs routes={routes} renderScene={renderScene} />
      </SafeAreaView>
    </View>
  );
};
