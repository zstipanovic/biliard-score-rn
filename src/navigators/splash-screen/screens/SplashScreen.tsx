import { Image, StyleSheet } from 'react-native';

export function SplashScreen(): JSX.Element {
  return (
    <Image
      source={require('assets/images/SplashScreen.png')}
      style={styles.splashScreen}
    />
  );
}

const styles = StyleSheet.create({
  splashScreen: {
    width: '100%',
    height: '100%',
  },
});
