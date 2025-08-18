"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner, ToasterProps, toast as sonnerToast } from "sonner";
import CheckCircle from "@/components/icons/check-circle";
import AlertCircle from "@/components/icons/alert-circle";

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
        } as React.CSSProperties
      }
      {...props}
    />
  );
};
interface ToastProps {
  id: string | number;
  description: string;
  mode: "success" | "error" | "default";
  button: {
    label: string;
    onClick?: () => void;
  };
}

const toast = (toast: Omit<ToastProps, "id">) => {
  return sonnerToast.custom((id) => {
    return (
      <Toast
        id={id}
        mode={toast.mode}
        description={toast.description}
        button={{
          label: toast.button.label,
          onClick: () => console.log("Button clicked"),
        }}
      />
    );
  });
};

const Toast = (props: ToastProps) => {
  const { mode, description, button, id } = props;
  const hasIcon = mode === "success" || mode === "error";
  return (
    <div className="flex gap-2.5 justify-between items-center rounded-xl bg-[#1a1c20] px-3 py-4 min-w-80">
      {hasIcon && (
        <div className="shrink-0 size-fit">
          {mode === "success" ? <CheckCircle /> : <AlertCircle />}
        </div>
      )}
      <div
        className="grow-1 text-white text-[clamp(11.2px,0.875rem,17.79px)]"
        dangerouslySetInnerHTML={{ __html: description }}
      />
      {button && (
        <button
          className="cursor-pointer text-primary-light text-[clamp(11.2px,0.875rem,17.79px)]"
          onClick={() => {
            button.onClick?.();
            sonnerToast.dismiss(id);
          }}
        >
          {button.label}
        </button>
      )}
    </div>
  );
};

export { Toaster, toast };
