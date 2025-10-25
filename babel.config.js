module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['@react-native-firebase/app'],
    [
      'react-native-reanimated/plugin',
      {
        relativeParentDir: '.',
      },
    ],
    [
      'module-resolver',
      {
        alias: {
          '@components': './src/components',
          '@screens': './src/screens',
          '@services': './src/services',
          '@store': './src/store',
          '@hooks': './src/hooks',
          '@utils': './src/utils',
          '@styles': './src/styles',
          '@types': './src/types',
          '@navigation': './src/navigation',
          '@config': './src/config',
          '@assets': './src/assets',
        },
      },
    ],
  ],
};
