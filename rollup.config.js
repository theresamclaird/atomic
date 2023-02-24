import babel from 'rollup-plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import commonjs from '@rollup/plugin-commonjs';
import cleaner from 'rollup-plugin-cleaner';
// import { terser } from 'rollup-plugin-terser';
import jsx from 'rollup-plugin-jsx';

const packageJson = require('./package.json');

export default [
  {
    input: './src/index.js',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    external: ['react', 'react-dom', 'prop-types'],
    plugins: [
      cleaner({ targets: ['./dist/'] }),
      nodeResolve({ extensions: ['.js', '.jsx', '.mjs', '.json'] }),
      commonjs(),
      babel({
        exclude: 'node_modules/**',
        presets: ['@babel/preset-env', '@babel/preset-react'],
      }),
      jsx({ factory: 'React.createElement' }),
      external(),
      // terser()
    ],
  }
];