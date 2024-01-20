import { Image } from '@nx-react-native/shared-ui';
import { useGetGame } from '../model';
import { FC } from 'react';

type GameImageThumbnailProps = {
  id: string;
};

export const GameImageThumbnail: FC<GameImageThumbnailProps> = ({ id }) => {
  const { data: gameData } = useGetGame(id);

  return (
    <Image
      source={{ uri: gameData?.thumbnail }}
      height={40}
      width={40}
      className="rounded"
    />
  );
};
