import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import del from 'rollup-plugin-delete';
import { terser } from 'rollup-plugin-terser';
import summary from 'rollup-plugin-summary';
import sveltePreprocess from 'svelte-preprocess';
import pkg from './package.json';

const bundleComponents = true;
const production = !process.env.ROLLUP_WATCH;

const name = pkg.name
  .replace(/^(@\S+\/)?(svelte-)?(\S+)/, '$3')
  .replace(/^\w/, (m) => m.toUpperCase())
  .replace(/-\w/g, (m) => m[1].toUpperCase());

export default {
  input: 'lib/index.js',
  output: bundleComponents
    ? [
        { file: pkg.module, format: 'es' },
        { file: pkg.main, format: 'umd', name },
      ]
    : [
        {
          dir: 'dist/',
          format: 'es',
          chunkFileNames: '[name].js',
          manualChunks: { svelte: ['svelte'] },
        },
      ],
  plugins: [
    del({ targets: 'dist' }),
    svelte({
      include: /\.wc\.svelte$/,
      compilerOptions: {
        dev: !production,
        customElement: true,
      },
      preprocess: sveltePreprocess(),
    }),
    svelte({
      exclude: /\.wc\.svelte$/,
      compilerOptions: {
        dev: !production,
      },
    }),
    resolve(),
    terser(),
    summary()
  ],
};
