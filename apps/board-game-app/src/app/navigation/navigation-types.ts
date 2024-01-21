import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Tabs: undefined;
  PlayCreatePage?: { gameId?: string, date?: string };
  StatsPage: undefined;
  PlaysPage: undefined;
  GameSelectPage: undefined;
};


declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList { }

    type RouteProps<T extends keyof RootStackParamList> = NativeStackScreenProps<
      RootStackParamList,
      T
    >['route'];
  }
}
