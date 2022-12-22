import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import commonjs from '@rollup/plugin-commonjs';
import { babel } from '@rollup/plugin-babel';
import jscc from 'rollup-plugin-jscc';
import builtins from 'rollup-plugin-node-builtins';
import globals from 'rollup-plugin-node-globals';
import alias from '@rollup/plugin-alias';
import path from 'path';

const PCUI_DIR = process.env.PCUI_PATH || 'node_modules/@playcanvas/pcui';

const PCUI_PATH = path.resolve(PCUI_DIR, 'react');

// define supported module overrides
const aliasEntries = {
    'pcui': PCUI_PATH
};

const umd = {
    input: 'src/index.js',
    output: {
        file: 'dist/pcui-graph.js',
        format: 'umd',
        name: 'pcuiGraph',
        globals: {
            '@playcanvas/observer': 'observer',
            '@playcanvas/pcui': 'pcui'
        }
    },
    external: ['@playcanvas/observer', '@playcanvas/pcui'],
    plugins: [
        jscc({
            values: { _STRIP_SCSS: process.env.STRIP_SCSS }
        }),
        postcss({
            minimize: false,
            extensions: ['.css', '.scss']
        }),
        alias({ entries: aliasEntries }),
        commonjs({ transformMixedEsModules: true }),
        globals(),
        builtins(),
        babel({ babelHelpers: 'bundled' }),
        resolve(),
        process.env.NODE_ENV === 'production' && terser()
    ]
};

const module = {
    input: 'src/index.js',
    output: {
        file: 'dist/pcui-graph.mjs',
        format: 'module'
    },
    external: ['@playcanvas/observer', '@playcanvas/pcui'],
    plugins: [
        jscc({
            values: { _STRIP_SCSS: process.env.STRIP_SCSS }
        }),
        alias({ entries: aliasEntries }),
        commonjs({ transformMixedEsModules: true }),
        globals(),
        builtins(),
        babel({ babelHelpers: 'bundled' }),
        postcss({
            minimize: false,
            extensions: ['.css', '.scss']
        }),
        resolve(),
        process.env.NODE_ENV === 'production' && terser()
    ]
};


let targets;
if (process.env.target) {
    switch (process.env.target.toLowerCase()) {
        case "umd":      targets = [umd]; break;
        case "module":      targets = [module]; break;
        case "all":      targets = [umd, module]; break;
    }
}

export default targets;
