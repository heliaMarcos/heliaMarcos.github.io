import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslint from 'vite-plugin-eslint';
import stylelint from 'vite-plugin-stylelint';
import svgLoader from 'vite-svg-loader';
import { resolve } from 'path';
import Components from 'unplugin-vue-components/vite';
import path from 'path'
const pathSrc = path.resolve(__dirname, "./src");

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    base: process.env.VITE_BASE_PUBLIC_PATH,
    server: {
      hmr: {
        overlay: true
      }
    },
    plugins: [
      eslint({ cache: false, fix: true }),
      stylelint(),
      svgLoader(),
      vue(),
      Components({
        // allow auto load markdown components under `./src/components/`
        extensions: ['vue', 'md'],
        // allow auto import and register components used in markdown
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
        dts: 'src/components.d.ts',
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')      },
    },
    extensions: ['.ts']
  });
};
