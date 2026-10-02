import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';

function serveLocalAssets() {
  return {
    name: 'serve-local-assets',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        try {
          const rawUrl = (req.url || '').split('?')[0];
          const decodedUrl = decodeURIComponent(rawUrl);
          
          if (decodedUrl.startsWith('/images/') || decodedUrl.startsWith('/bgm_music/')) {
            const relPath = decodedUrl.replace(/^\//, '');
            const filePath = path.resolve(process.cwd(), relPath);

            if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
              const ext = path.extname(filePath).toLowerCase();
              const mimeTypes = {
                '.png': 'image/png',
                '.jpg': 'image/jpeg',
                '.jpeg': 'image/jpeg',
                '.gif': 'image/gif',
                '.svg': 'image/svg+xml',
                '.webp': 'image/webp',
                '.mp3': 'audio/mpeg',
                '.wav': 'audio/wav',
                '.ogg': 'audio/ogg',
              };
              res.setHeader('Content-Type', mimeTypes[ext] || 'application/octet-stream');
              res.setHeader('Cache-Control', 'public, max-age=3600');
              return fs.createReadStream(filePath).pipe(res);
            }
          }
        } catch (err) {
          console.error('Asset server error:', err);
        }
        next();
      });
    },
    closeBundle() {
      // Copy images and bgm_music to dist for production build
      const distDir = path.resolve(process.cwd(), 'dist');
      if (fs.existsSync(distDir)) {
        const copyRecursive = (src, dest) => {
          if (!fs.existsSync(src)) return;
          if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
          const entries = fs.readdirSync(src, { withFileTypes: true });
          for (const entry of entries) {
            const srcPath = path.join(src, entry.name);
            const destPath = path.join(dest, entry.name);
            if (entry.isDirectory()) {
              copyRecursive(srcPath, destPath);
            } else {
              fs.copyFileSync(srcPath, destPath);
            }
          }
        };
        copyRecursive(path.resolve(process.cwd(), 'images'), path.join(distDir, 'images'));
        copyRecursive(path.resolve(process.cwd(), 'bgm_music'), path.join(distDir, 'bgm_music'));
      }
    }
  };
}

export default defineConfig({
  plugins: [react(), serveLocalAssets()],
  server: {
    port: 5173,
    host: true,
  },
});
