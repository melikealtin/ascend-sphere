"use client";

import { toast as sonnerToast } from "sonner";

type ToastProps = {
  title?: string;
  description?: string;
  variant?: "default" | "destructive";
};

export function useToast() {
  return {
    toast: ({ title, description, variant }: ToastProps) => {
      if (variant === "destructive") {
        return sonnerToast.error(title || description || "", {
          description: title ? description : undefined,
        });
      }

      return sonnerToast(title || description || "", {
        description: title ? description : undefined,
      });
    },
  };
}

export const toast = ({ title, description, variant }: ToastProps) => {
  if (variant === "destructive") {
    return sonnerToast.error(title || description || "", {
      description: title ? description : undefined,
    });
  }

  return sonnerToast(title || description || "", {
    description: title ? description : undefined,
  });
};
