module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    "plugins": [
      [
        "module-resolver",
        {
          "root": ["./"],
          "alias": {
            "@navigators": "./src/navigators",
            "@screens": "./src/screens",
          }
        },
      ],
    ],
  };
};
