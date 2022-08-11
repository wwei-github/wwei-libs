module.exports = {
  "stories": [
    "../packages/components/stories/**/*.stories.mdx",
    "../packages/components/stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-addon-swc",
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
    "storybook-dark-mode"
  ],
  "framework": "@storybook/react",
  "core": {
    builder: {
      name: 'webpack5',
      options: {
        lazyCompilation: true,
        fsCache: true,
      },
    },
  },
  "webpackFinal": async (config, { configType }) => {
    const fileRule = config.module.rules.find(r => r.test && r.test.test('.svg'))
    fileRule.exclude = /\.svg$/i;


    config.module.rules.push({
      test: /\.svg$/i,
      type: 'asset',
      resourceQuery: /url/, // *.svg?url
    }, {
      test: /\.svg$/i,
      enforce: "pre",
      use: ['@svgr/webpack'],
      resourceQuery: { not: [/url/] },
    });

    // Return the altered config
    return config;
  },
}