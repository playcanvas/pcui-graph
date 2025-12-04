import babelParser from '@babel/eslint-parser';
import playcanvasConfig from '@playcanvas/eslint-config';
import storybook from 'eslint-plugin-storybook'; // eslint-disable-line import/no-unresolved
import globals from 'globals';

export default [...playcanvasConfig, {
    files: ['**/*.js', '**/*.mjs'],
    languageOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
        parser: babelParser,
        parserOptions: {
            requireConfigFile: false
        },
        globals: {
            ...globals.browser,
            ...globals.mocha,
            ...globals.node
        }
    }
}, ...storybook.configs['flat/recommended']];
