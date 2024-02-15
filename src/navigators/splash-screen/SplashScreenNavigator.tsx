import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { SplashScreen } from './screens';

const Stack = createNativeStackNavigator<SplashScreenParamList>();

export function SplashScreenNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
    </Stack.Navigator>
  );
}
