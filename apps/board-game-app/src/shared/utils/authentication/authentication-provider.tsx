import { FC, PropsWithChildren } from 'react';
import { Auth0Provider } from 'react-native-auth0';

type AuthenticationProviderProps = {
  domain: string;
  clientId: string;
};

export const AuthenticationProvider: FC<
  PropsWithChildren<AuthenticationProviderProps>
> = ({ domain, clientId, children }) => {
  return (
    <Auth0Provider domain={domain} clientId={clientId}>
      {children}
    </Auth0Provider>
  );
};
