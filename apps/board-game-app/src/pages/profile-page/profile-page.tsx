import { Button, View } from '@nx-react-native/shared-ui';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuthentication } from '@shared';

export const ProfilePage = () => {
  const { logout } = useAuthentication();

  return (
    <View className="bg-white flex-1">
      <SafeAreaView edges={['top']} className="flex-1 justify-end">
        <Button.Box className="m-4" onPress={logout} type="plain">
          Sign out
        </Button.Box>
      </SafeAreaView>
    </View>
  );
};
