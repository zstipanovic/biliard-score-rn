import React from 'react';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { SafeAreaView, Text, View } from 'react-native';

if (__DEV__) {
  console.log('Running in dev mode');
  firestore().useEmulator('localhost', 8080);
  auth().useEmulator('http://localhost:9099');
}

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <View>
        <Text>Test</Text>
      </View>
    </SafeAreaView>
  );
}

export default App;
