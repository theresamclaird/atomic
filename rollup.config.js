import cleaner from 'rollup-plugin-cleaner';
import { babel } from '@rollup/plugin-babel';
import visualizer from 'rollup-plugin-visualizer';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import multiInput from 'rollup-plugin-multi-input';
import json from '@rollup/plugin-json';

export default [
  {
    input: 'src/index.js',
    external: ['react', 'react-dom', 'prop-types'],
    output: [
      {
        dir: 'dist',
        format: 'esm',
        exports: 'named',
      },
      {
        dir: 'dist/cjs',
        format: 'cjs',
        exports: 'named',
      },
    ],
    plugins: [
      cleaner({ targets: ['./dist/'] }),
      multiInput(),
      commonjs(),
      babel({
        configFile: './babel.config.json',
        babelHelpers: 'runtime',
      }),
      nodeResolve({
        extensions: ['.js', '.jsx', '.mjs', '.json'],
      }),
      visualizer({ open: false, gzipSize: true }),
      json(),
    ],
  }
];