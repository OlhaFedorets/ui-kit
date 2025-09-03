import {resolve} from 'path'
import { defineConfig } from 'vite'
import {dependencies, devDependencies} from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'ui-kit',
      formats: ['es'],
      // the proper extensions will be added
      fileName: 'index',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: [
        'react/jsx-runtime',
        ...Object.keys(dependencies),
        ...Object.keys(devDependencies)
      ],
      // output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        // globals: {
        //   vue: 'Vue',
        // },
      // },
    },
    sourcemap: true, //на большом проекте эту строку убрать если не будет хватать памяти
    target: 'esnext',
  },
})
