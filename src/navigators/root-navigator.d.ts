type NavigatorScreenParams<T> = {
  screen: keyof T;
  params?: T[keyof T];
};

type RootStackParamList = {
  SplashScreen?: NavigatorScreenParams<SplashScreenParamList>;
};
