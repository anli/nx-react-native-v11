import { NavigationContainer } from '@react-navigation/native';

import { ThemeProvider } from '@nx-react-native/shared-ui';
import { RootStack } from './navigation';

export const App = () => {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </ThemeProvider>
  );
};
