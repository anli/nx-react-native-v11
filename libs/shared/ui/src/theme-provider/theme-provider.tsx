import { FC, PropsWithChildren } from 'react';
import { PortalProvider, PortalHost } from '@gorhom/portal';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <SafeAreaProvider>
      <PortalProvider>
        {children}
        <PortalHost name="snackbar" />
        <PortalHost name="toast" />
        <PortalHost name="popup" />
        <PortalHost name="progress-linear" />
      </PortalProvider>
    </SafeAreaProvider>
  );
};
