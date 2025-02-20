const config = {
    stories: ['./**/*.stories.@(js|jsx|ts|tsx|mdx)'],

    addons: [
        '@storybook/addon-essentials',
        '@storybook/addon-links',
        '@storybook/preset-create-react-app'
    ],

    webpackFinal: async (config, { configType }) => {
        // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
        // You can change the configuration based on that.
        // 'PRODUCTION' is used when building the static version of storybook.

        config.module.rules = config.module.rules.filter(rule => {
            if (!rule.test) return true;
            return !rule.test.test(".scss");
        });

        return config;
    },

    framework: {
        name: '@storybook/react-webpack5',
        options: {}
    },

    docs: {}
};

export default config;
