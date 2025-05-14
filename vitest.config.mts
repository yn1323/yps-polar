import { storybookTest } from '@storybook/experimental-addon-test/vitest-plugin';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig, defineWorkspace, mergeConfig } from 'vitest/config';

const dirname =
  typeof __dirname !== 'undefined'
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

const sharedConfig = defineConfig({
  test: {
    exclude: ['node_modules'],
  },
});

const storybookConfig = defineConfig({
  plugins: [
    storybookTest({
      configDir: path.join(dirname, '.storybook'),
    }),
  ],
  test: {
    globals: true,
    name: 'storybook',
    setupFiles: ['.storybook/vitest.setup.ts'],
    browser: {
      enabled: true,
      headless: true,
      name: 'chromium',
      provider: 'playwright',
    },
  },
});

const vitestConfig = defineConfig({
  test: {
    globals: true,
    name: 'vitest',
    setupFiles: ['./src/configs/vitest/vitest-setup.ts'],
    include: ['**/*.test.ts'],
    env: {
      NEXT_PUBLIC_SUPABASE_URL: 'https://example.com',
      NEXT_PUBLIC_SUPABASE_ANON_KEY: 'example',
    },
  },
  resolve: {
    alias: {
      '@/app': path.resolve(__dirname, './app'),
      '@/src': path.resolve(__dirname, './src'),
      '@/e2e': path.resolve(__dirname, './e2e'),
      '@/prisma': path.resolve(__dirname, './prisma'),
    },
  },
});

const workspace = defineWorkspace([
  mergeConfig(sharedConfig, storybookConfig),
  mergeConfig(sharedConfig, vitestConfig),
]);

export default defineConfig({
  test: {
    globals: true,
    workspace,
  },
});
