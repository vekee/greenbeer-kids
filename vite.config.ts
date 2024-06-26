// Plugins
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import ViteFonts from 'unplugin-fonts/vite'
import Components from 'unplugin-vue-components/vite'

// Utilities
import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isProd = mode === 'production'
  return {
    // base: isProd ? '/greenbeer-kids/' : './',
    base: isProd ? '/' : './',
    plugins: [
      vue({
        template: { transformAssetUrls }
      }),
      vueJsx(),
      Vuetify(),
      Components(),
      ViteFonts({
        google: {
          families: [
            {
              name: 'Roboto',
              styles: 'wght@100;300;400;500;700;900'
            }
          ]
        }
      })
    ],
    define: { 'process.env': {} },
    resolve: {
      alias: [
        { find: '/@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
        { find: '/IMG', replacement: fileURLToPath(new URL('./src/assets/images/', import.meta.url)) },
        { find: '/FONT', replacement: fileURLToPath(new URL('./src/assets/fonts/', import.meta.url)) }
      ],
      extensions: ['.js', '.json', '.jsx', '.mjs', '.ts', '.tsx', '.vue']
    },
    server: {
      port: 3000
    }
  }
})
