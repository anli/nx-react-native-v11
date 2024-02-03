import { useAuth0 } from 'react-native-auth0';

export const useAuthentication = () => {
  const { authorize, clearSession, ...rest } = useAuth0()

  const login = async () => {
    await authorize();
  }

  const logout = async () => {
    await clearSession()
  }

  return { login, logout, ...rest }
}
