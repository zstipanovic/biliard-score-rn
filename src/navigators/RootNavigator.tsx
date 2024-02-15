import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createRef } from 'react';
import { SplashScreenNavigator } from './splash-screen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const rootNavigatorRef =
  createRef<NavigationContainerRef<RootStackParamList>>();

export function RootNavigator() {
  let defaultAppNavigator: keyof RootStackParamList = 'SplashScreen';

  return (
    <NavigationContainer ref={rootNavigatorRef}>
      <Stack.Navigator
        initialRouteName={defaultAppNavigator}
        screenOptions={{ headerShown: false, orientation: 'portrait' }}>
        <Stack.Screen name="SplashScreen" component={SplashScreenNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
