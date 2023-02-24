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
        file: 'dist/index.js',
        format: 'cjs',
      },
      {
        file: 'dist/index.es.js',
        format: 'es',
        exports: 'named',
      },
    ],
    external: ['react', 'react-dom', 'prop-types'],
    plugins: [
      cleaner(),
      commonjs(),
      babel({
        exclude: 'node_modules/**',
        presets: ['@babel/preset-react']
      }),
      external(),
      nodeResolve({ extensions: ['.js', '.jsx']}),
      terser()
    ],
  }
];