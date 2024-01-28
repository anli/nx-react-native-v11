import { Icon, Pressable } from '@nx-react-native/shared-ui';
import { useNavigation } from '@react-navigation/native';

export const PlayerCreateButton = (props) => {
  const { navigate } = useNavigation();

  const handleCreatePlayer = () => {
    navigate('PlayerCreatePage');
  };

  return (
    <Pressable onPress={handleCreatePlayer}>
      <Icon name="PlusIcon" {...props} />
    </Pressable>
  );
};
