import path from 'path';

// 1st party plugins
import alias from '@rollup/plugin-alias';
import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';

// 3rd party plugins
import jscc from 'rollup-plugin-jscc';
import builtins from 'rollup-plugin-node-builtins';
import globals from 'rollup-plugin-node-globals';
import postcss from 'rollup-plugin-postcss';

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


const styles = {
    input: 'src/styles/index.js',
    output: {
        file: 'styles/dist/index.mjs',
        format: 'esm'
    },
    plugins: [
        resolve(),
        postcss({
            minimize: false,
            extensions: ['.css', '.scss']
        })
    ]
};


let targets;
if (process.env.target) {
    switch (process.env.target.toLowerCase()) {
        case "umd":      targets = [umd]; break;
        case "module":      targets = [module]; break;
        case "styles":      targets = [styles]; break;
        case "all":      targets = [umd, module, styles]; break;
    }
}

export default targets;
