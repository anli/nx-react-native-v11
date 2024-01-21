import { Icon, Pressable } from '@nx-react-native/shared-ui';
import { useNavigation } from '@react-navigation/native';

export const PlayCreateButton = (props) => {
  const { navigate } = useNavigation();

  const handleCreatePlay = () => {
    navigate('PlayCreatePage');
  };

  return (
    <Pressable onPress={handleCreatePlay}>
      <Icon name="PlusIcon" {...props} />
    </Pressable>
  );
};
