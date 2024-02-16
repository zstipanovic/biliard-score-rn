import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export function SplashScreen(): JSX.Element {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.font}>Splash Screen</Text>
        <Text style={styles.fontDva}>Basic font</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  font: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 24,
  },

  fontDva: {
    fontSize: 24,
  },
});
