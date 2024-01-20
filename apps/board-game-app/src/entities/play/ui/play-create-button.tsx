import { Icon } from '@nx-react-native/shared-ui';

export const PlayCreateButton = (props) => {
  const handleCreatePlay = () => {
    // Open play create page
  };

  return <Icon name="PlusIcon" {...props} onPress={handleCreatePlay} />;
};
