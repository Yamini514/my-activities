import React from "react";
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "../componenets/ui/toast";
import { useToast } from "../componenets/ui/useToast";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(({ id, title, description, action, variant, ...props }) => {
        const toastVariants = {
          default: "bg-white border",
          success: "bg-green-50 border-green-200 text-green-800",
          error: "bg-red-50 border-red-200 text-red-800",
          warning: "bg-yellow-50 border-yellow-200 text-yellow-800",
          info: "bg-blue-50 border-blue-200 text-blue-800",
        };

        return (
          <Toast
            key={id}
            className={toastVariants[variant || "default"]}
            {...props}
          >
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose className="text-gray-500 hover:text-gray-700" />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
