import { NavigationContainer } from '@react-navigation/native';

import { ThemeProvider } from '@nx-react-native/shared-ui';
import { RootStack } from './navigation';
import { AuthenticationProvider } from '@shared';

export const App = () => {
  return (
    <AuthenticationProvider
      domain="anlitz.au.auth0.com"
      clientId="bVpau6JDWcVK9FIaQpoHTEJbFJc8aVA2"
    >
      <ThemeProvider>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </ThemeProvider>
    </AuthenticationProvider>
  );
};
