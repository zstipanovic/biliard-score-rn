module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          //'~/assets': './src/assets',
          //'~/modules': './src/modules',
          '~/navigators': './src/navigators',
        },
      },
    ],
  ],
};
