import { Icon, Pressable } from '@nx-react-native/shared-ui';
import { useNavigation } from '@react-navigation/native';

export const BackNavigationButton = (props) => {
  const { canGoBack, goBack } = useNavigation();

  const handlePress = () => {
    canGoBack() && goBack();
  };

  return (
    <Pressable onPress={handlePress}>
      <Icon name="ChevronLeftIcon" {...props} />
    </Pressable>
  );
};
