import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import fs from 'fs';
import { ConfigEnv, loadEnv } from 'vite';
import type { ServerOptions } from 'https';

export default ({ mode }: ConfigEnv) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  const isDev = process.env.VITE_DEVELOP == 'true';

  return defineConfig({
    plugins: [react()],
    server: {
      https: isDev
        ? ({
            key: fs.readFileSync('./key/localhost-key.pem'),
            cert: fs.readFileSync('./key/localhost.pem'),
          } as ServerOptions)
        : undefined,
      host: 'localhost',
    },
  });
};
