import babel from 'rollup-plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import commonjs from '@rollup/plugin-commonjs';
import cleaner from 'rollup-plugin-cleaner';
// import { terser } from 'rollup-plugin-terser';
import multiInput from 'rollup-plugin-multi-input';

const packageJson = require('./package.json');

export default [
  {
    input: './src/index.js',
    output: [
      {
        dir: 'dist/cjs',
        format: 'cjs',
      },
      {
        dir: 'dist/esm',
        format: 'esm',
      },
    ],
    external: ['react', 'react-dom', 'prop-types'],
    plugins: [
      cleaner({ targets: ['./dist/'] }),
      multiInput(),
      commonjs(),
      babel({
        runtimeHelpers: true,
        exclude: 'node_modules/**',
        presets: ['@babel/preset-env', '@babel/preset-react'],
      }),
      external(),
      nodeResolve({ extensions: ['.js', '.jsx', '.mjs', '.json'] }),
      // terser()
    ],
  }
];