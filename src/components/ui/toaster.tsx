'use client';

import { useToast } from '@/src/hooks/use-toast';
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from '@/src/components/ui/toast';

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}

import { toast } from '@/src/hooks/use-toast';

export const toaster = {
  create: ({ description, type }: { description: string; type: 'success' | 'error' }) => {
    return toast({
      description,
      variant: type === 'error' ? 'destructive' : type === 'success' ? 'success' : 'default',
    });
  },
};
