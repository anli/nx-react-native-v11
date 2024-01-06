import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatsPage } from '../pages';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const screenOptions = { headerShown: false };

const StatsTab = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="StatsPage" component={StatsPage} />
    </Stack.Navigator>
  );
};

export const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen
          name="StatsTab"
          component={StatsTab}
          options={{
            title: 'Stats',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
