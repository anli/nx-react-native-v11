import { Badge, Profile, ProfileProps } from '@nx-react-native/shared-ui';
import { FC } from 'react';
import { usePlayerOne } from '../model';

type PlayerImageThumbnailProps = Partial<ProfileProps> & {
  id: string;
};

export const PlayerImageThumbnail: FC<PlayerImageThumbnailProps> = ({
  id,
  ...rest
}) => {
  const { data } = usePlayerOne(id);

  if (data?.imageUrl) {
    return (
      <Profile
        source={{ uri: data.imageUrl }}
        size="xs"
        renderBadge={data.isMe ? () => <Badge.Dot /> : undefined}
        {...rest}
      />
    );
  }

  return null;
};
