import { usePlayers } from "./use-players";

export const usePlayerSearch = (text: string) => {
  const { data: players } = usePlayers()

  return {
    data: players.filter(_player => _player.name.includes(text)),
  };
};
