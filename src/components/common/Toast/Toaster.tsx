"use client";

import { Toast, ToastProvider, ToastTitle, ToastViewport } from "@/components/common/Toast/Toast";

import { useToast } from "@/hooks/common/useToast";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, ...props }) {
        return (
          <Toast
            className="max-w-[335px] h-[52px] rounded-[28px] bg-neutral-800 mb-[24px]"
            key={id}
            duration={3000}
            {...props}
          >
            <div className="flex">
              {title && <ToastTitle className="text-white">{title}</ToastTitle>}
            </div>
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
