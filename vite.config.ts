import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import resolve from '@rollup/plugin-node-resolve'

// eslint-disable-next-line no-control-regex
const INVALID_CHAR_REGEX = /[\x00-\x1F\x7F<>*#"{}|^[\]`;?:&=+$,]/g
const DRIVE_LETTER_REGEX = /^[a-z]:/i

// https://vitejs.dev/config/
// vue => vue@>=3.2.25
// reactivityTransform: true => @vitejs/plugin-vue@>=2.0.0
export default defineConfig({
    base: '/Vite4WithTailwind/',
    plugins: [
        vue({
            reactivityTransform: true,
        }),
        vueJsx(),
        resolve(),
    ],
    build: {
        rollupOptions: {
            output: {
                // https://github.com/rollup/rollup/blob/master/src/utils/sanitizeFileName.ts
                sanitizeFileName(name) {
                    const match = DRIVE_LETTER_REGEX.exec(name)
                    const driveLetter = match ? match[0] : ''
                    // substr 是被淘汰語法，因此要改 slice
                    return (
                        driveLetter +
                        name
                            .slice(driveLetter.length)
                            .replace(INVALID_CHAR_REGEX, '')
                    )
                },
            },
        },
    },
})
