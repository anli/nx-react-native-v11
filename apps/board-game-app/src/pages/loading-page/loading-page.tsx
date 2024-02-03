import { Spinner, Text, View } from '@nx-react-native/shared-ui';
import { SafeAreaView } from 'react-native-safe-area-context';

export const LoadingPage = () => {
  return (
    <View className="bg-white flex-1">
      <SafeAreaView
        edges={['top', 'bottom']}
        className="flex-1 justify-center items-center gap-2"
      >
        <Spinner color="black" size="lg" />
        <Text>Loading</Text>
      </SafeAreaView>
    </View>
  );
};
