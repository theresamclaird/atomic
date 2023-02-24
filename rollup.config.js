import babel from 'rollup-plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import commonjs from '@rollup/plugin-commonjs';
import cleaner from 'rollup-plugin-cleaner';
import { terser } from 'rollup-plugin-terser';

export default [
  {
    input: './src/index.js',
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
    external: ['react', 'react-dom', 'prop-types'],
    plugins: [
      cleaner({ targets: ['./dist/'] }),
      commonjs(),
      babel({
        exclude: 'node_modules/**',
        presets: ['@babel/preset-react'],
      }),
      external(),
      nodeResolve({ extensions: ['.js', '.jsx', '.mjs', '.json'] }),
      terser()
    ],
  }
];