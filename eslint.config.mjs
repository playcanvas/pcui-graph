import playcanvasConfig from '@playcanvas/eslint-config';
import babelParser from '@babel/eslint-parser';
import globals from 'globals';

export default [
    ...playcanvasConfig,
    {
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
                ...globals.node,
                'Ammo': 'readonly',
                'earcut': 'readonly',
                'opentype': 'readonly',
                'pc': 'readonly',
                'TWEEN': 'readonly',
                'twgsl': 'readonly',
                'webkitAudioContext': 'readonly'
            }
        },
        rules: {
            'import/order': 'off'
        }
    },
    {
        ignores: [
            'tests/**/*',
            'examples/lib/*',
            'scripts/textmesh/*.min.js',
            'src/polyfill/*',
            'scripts/spine/*'
        ]
    }
];
