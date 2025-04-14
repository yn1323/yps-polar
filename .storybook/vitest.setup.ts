import { setProjectAnnotations } from '@storybook/experimental-nextjs-vite';
import { beforeAll } from 'vitest';
import * as projectAnnotations from './preview';

declare global {
  interface Window {
    util: {
      inspect: (obj: unknown) => string;
    };
  }
}

// Polyfill for util module
if (typeof window !== 'undefined') {
  window.util = {
    inspect: (obj: unknown) => JSON.stringify(obj, null, 2),
  };
}

// This is an important step to apply the right configuration when testing your stories.
// More info at: https://storybook.js.org/docs/api/portable-stories/portable-stories-vitest#setprojectannotations
const project = setProjectAnnotations([projectAnnotations]);

beforeAll(project.beforeAll);
