import babel from 'rollup-plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import cleaner from 'rollup-plugin-cleaner';
// import { terser } from 'rollup-plugin-terser';

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
    plugins: [
      cleaner({ targets: ['./dist/'] }),
      commonjs(),
      babel({
        runtimeHelpers: true,
        exclude: 'node_modules/**',
        presets: ['@babel/preset-env', '@babel/preset-react'],
      }),
      nodeResolve({ extensions: ['.js', '.jsx', '.mjs', '.json'] }),
      // terser()
    ],
  }
];