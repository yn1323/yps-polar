'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

type Props = {
  children: ReactNode | ReactNode[];
  fullScreen?: boolean;
};

export const Animation = ({ children, fullScreen = true }: Props) => {
  const childComponents = Array.isArray(children) ? children : [children];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: 'easeOut', duration: 0.1 }}
      style={{
        width: fullScreen ? '100%' : 'auto',
        height: fullScreen ? '100%' : 'auto',
      }}
    >
      {childComponents}
    </motion.div>
  );
};
