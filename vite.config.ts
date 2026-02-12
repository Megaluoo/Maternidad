import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // CAMBIA 'nombre-de-tu-repo' POR EL NOMBRE REAL DE TU REPOSITORIO
  // Ejemplo: si tu repo es https://github.com/usuario/mi-web, pon '/mi-web/'
  base: '/Maternidad/',

  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
