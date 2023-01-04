import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import resolve from '@rollup/plugin-node-resolve'

// https://vitejs.dev/config/
// vue => vue@>=3.2.25
// reactivityTransform: true => @vitejs/plugin-vue@>=2.0.0
export default defineConfig({
    plugins: [
        vue({
            reactivityTransform: true,
        }),
        vueJsx(),
        resolve(),
    ],
})
