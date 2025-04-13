'use client';

import { customErrorMap } from '@/src/configs/zod/zop-setup';
import zod from 'zod';

zod.setErrorMap(customErrorMap);
