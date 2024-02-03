import { Button, Text, View } from '@nx-react-native/shared-ui';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuthentication } from '@shared';

export const WelcomePage = () => {
  const { login } = useAuthentication();

  return (
    <View className="bg-white flex-1">
      <SafeAreaView edges={['top', 'bottom']} className="flex-1">
        <View className="flex-1 items-center justify-center">
          <Text type="heading1">Board Game Secretary</Text>
          <Text type="body2">Track your board games, and more!</Text>
        </View>
        <Button.Box className="m-4" onPress={login}>
          Sign in
        </Button.Box>
      </SafeAreaView>
    </View>
  );
};
