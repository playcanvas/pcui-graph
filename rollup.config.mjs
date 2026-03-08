import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';

const umd = {
    input: 'src/index.ts',
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
        postcss({
            minimize: false,
            extensions: ['.css', '.scss']
        }),
        commonjs({ transformMixedEsModules: true }),
        typescript({
            noEmitOnError: true,
            tsconfig: 'tsconfig.json',
            sourceMap: true
        }),
        resolve(),
        process.env.NODE_ENV === 'production' && terser()
    ]
};

const module = {
    input: 'src/index.ts',
    output: {
        file: 'dist/pcui-graph.mjs',
        format: 'module'
    },
    external: ['@playcanvas/observer', '@playcanvas/pcui'],
    plugins: [
        commonjs({ transformMixedEsModules: true }),
        typescript({
            noEmitOnError: true,
            tsconfig: 'tsconfig.json',
            sourceMap: true
        }),
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
switch (process.env.target?.toLowerCase()) {
    case 'umd':
        targets = [umd];
        break;
    case 'module':
        targets = [module];
        break;
    case 'styles':
        targets = [styles];
        break;
    default:
        targets = [umd, module, styles];
        break;
}

export default targets;
