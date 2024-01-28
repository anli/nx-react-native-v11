import { Button, TopNavigation, View } from '@nx-react-native/shared-ui';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BackNavigationButton } from '@shared';
import { useNavigation } from '@react-navigation/native';

export const PlayerCreatePage = () => {
  const { canGoBack, goBack } = useNavigation();

  const handleSave = () => {
    canGoBack() && goBack();
  };

  return (
    <View className="bg-white flex-1">
      <SafeAreaView edges={['bottom']} style={{ flex: 1, paddingTop: 8 }}>
        <TopNavigation.Regular
          title="Create Player"
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
        <View className="flex-1"></View>

        <View className="p-4">
          <Button.Box onPress={handleSave}>Save</Button.Box>
        </View>
      </SafeAreaView>
    </View>
  );
};
