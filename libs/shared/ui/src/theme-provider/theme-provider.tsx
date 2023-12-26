import { FC, PropsWithChildren } from 'react';
import { PortalProvider, PortalHost } from '@gorhom/portal';

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <PortalProvider>
      {children}
      <PortalHost name="snackbar" />
      <PortalHost name="toast" />
    </PortalProvider>
  );
};
