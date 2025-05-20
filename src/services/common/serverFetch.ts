import { getEnv } from '@/src/helpers/utils/env';
import type { RequestInit } from 'next/dist/server/web/spec-extension/request';
import { headers } from 'next/headers';

export const makePath = async (path: string) => {
  const scheme = process.env.NEXT_PUBLIC_IS_LOCAL ? 'http' : 'https';
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const host = ((await headers()) as any).get('host');
  return `${scheme}://${host}${path[0] === '/' ? '' : '/'}${path}`;
};

export type BaseFetch = {
  response: unknown;
  requestOptions?: {
    method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    query?: Record<string, any>;
    cache?: RequestInit['cache'];
    next?: {
      tags?: string[];
      revalidate?: number;
    };
  };
};

const baseFetch = async <T extends BaseFetch>(
  path: string,
  options?: T['requestOptions'],
): Promise<T['response']> => {
  const method = options?.method ?? 'GET';
  const query = options?.query ?? {};

  const targetUrl =
    method === 'GET' && query && Object.keys(query).length > 0
      ? `${await makePath(path)}?${Object.entries(query)
          .map(([key, value]) => `${key}=${value}`)
          .join('&')}`
      : await makePath(path);

  const body = method === 'GET' ? {} : { body: JSON.stringify(query) };

  const cache = { cache: options?.cache ?? 'no-store' };
  const next = { next: options?.next ?? {} };

  const { IS_LOCAL } = getEnv();

  const res = await fetch(targetUrl, {
    method,
    ...body,
    headers: {
      'Content-Type': 'application/json',
    },
    ...(IS_LOCAL ? { cache: 'no-store' } : options?.next ? next : cache),
  });
  // biome-ignore lint/style/useBlockStatements: <explanation>
  if (!res.ok) return {};
  const json: T['response'] = await res.json().catch((e) => {
    console.error('Failed fetch: ', targetUrl);
    console.error(e);
  });
  return json ?? {};
};

export const serverFetch = async <T extends BaseFetch>(
  path: string,
  options?: T['requestOptions'],
): Promise<T['response']> => {
  return await baseFetch(path, options);
};
