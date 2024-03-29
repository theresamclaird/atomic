import cleaner from 'rollup-plugin-cleaner';
import { babel } from '@rollup/plugin-babel';
import visualizer from 'rollup-plugin-visualizer';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import image from '@rollup/plugin-image';

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
      commonjs(),
      image(),
      babel({
        configFile: './babel.config.json',
        babelHelpers: 'runtime',
      }),
      nodeResolve({
        extensions: ['.js', '.jsx', '.mjs', '.json', 'svg'],
      }),
      visualizer({ open: false, gzipSize: true }),
      json(),
    ],
  },
];
