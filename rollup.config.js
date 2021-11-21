import typescript from 'rollup-plugin-typescript2';
import resolve from 'rollup-plugin-node-resolve';
import {terser} from 'rollup-plugin-terser';

export default [
  {
    input: 'src/index.ts',
    plugins: [resolve(), typescript(), terser()],
    output: [
      {
        file: 'dist/obiusm-ems.min.js',
        format: 'es',
      },
      {
        file: 'dist/obiusm-iife.min.js',
        format: 'iife',
        name: 'obiusm',
      },
      {
        file: 'dist/obiusm-umd.min.js',
        format: 'umd',
        name: 'obiusm',
      },
    ],
  },
];
