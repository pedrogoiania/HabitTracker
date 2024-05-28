module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'react-native-reanimated/plugin',
      {
        relativeSourceLocation: true,
      },
    ],
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          screens: './src/screens',
          components: './src/components',
          utils: './src/utils',
          test: './__tests__',
        },
      },
    ],
    [
      'babel-plugin-inline-import',
      {
        extensions: ['.svg', '.png'],
      },
    ],
  ],
};
