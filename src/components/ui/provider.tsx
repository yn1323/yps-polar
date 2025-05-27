'use client';

import { Toaster } from '@/src/components/ui/toaster';
import { customErrorMap } from '@/src/configs/zod/zop-setup';
import zod from 'zod';
import { ColorModeProvider, type ColorModeProviderProps } from './color-mode';

export function Provider(props: ColorModeProviderProps) {
  zod.setErrorMap(customErrorMap);
  return (
    <>
      <ColorModeProvider {...props} />
      <Toaster />
    </>
  );
}
