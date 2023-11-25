import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ToneGeneratorPage } from '../pages';

const Stack = createNativeStackNavigator();
const screenDefaultOptions = {
  headerShown: false,
};

export const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="ToneGeneratorPage"
            component={ToneGeneratorPage}
            options={screenDefaultOptions}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};
