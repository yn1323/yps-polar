import type { ReactNode } from 'react';
import { cn } from '@/src/lib/utils';

type Props = {
  children: ReactNode | ReactNode[];
  fullScreen?: boolean;
};

export const Animation = ({ children, fullScreen = true }: Props) => {
  const childComponents = Array.isArray(children) ? children : [children];

  return (
    <div
      className={cn(
        'animate-in fade-in-0 duration-100',
        fullScreen ? 'w-full h-full' : 'w-auto h-auto'
      )}
    >
      {childComponents}
    </div>
  );
};
