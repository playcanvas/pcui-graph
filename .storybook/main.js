const config = {
    stories: ['./**/*.stories.@(js|jsx|ts|tsx|mdx)'],

    addons: ['@storybook/addon-docs'],

    webpackFinal: async (config, { configType }) => {
        config.module.rules = config.module.rules.filter(rule => {
            if (!rule.test) return true;
            return !rule.test.test(".scss");
        });
        config.module.rules.push({
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            }
        });
        config.module.rules.push({
            test: /\.scss$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ],
        });

        config.resolve.extensions.push('.js', '.jsx', '.ts', '.tsx');

        return config;
    },

    framework: {
        name: '@storybook/react-webpack5',
        options: {}
    },

    docs: {}
};

export default config;
