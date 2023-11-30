module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ["module-resolver", {
        "root": ["./src"],
        "alias":{
          '@assets':'./src/assets',
          '@components':'./src/components',
          "@utils":'./src/utils',
          "@screens":'./src/screens',
          "@routes":'./src/routes',
          "@theme":"./src/theme"
        }
      }],
      'react-native-reanimated/plugin'
    ]
  };
};
