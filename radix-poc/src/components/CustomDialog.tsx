import * as Dialog from "@radix-ui/react-dialog";
import { VariantProps } from "class-variance-authority";
import React from "react";
import CustomButton, { ButtonVariants } from "./CustomButton.tsx";

interface CustomDialogProps extends VariantProps<typeof ButtonVariants> {
  triggerTitle: string;
  triggerDisabled?: boolean;
  dialogTitle: string;
  children: React.ReactNode;
  cancelText: string;
  confirmText: string;
  onConfirm: () => void;
}

const CustomDialog = ({
  triggerTitle,
  triggerDisabled,
  dialogTitle,
  children,
  variant,
  intent,
  size,
  cancelText,
  confirmText,
  onConfirm,
}: CustomDialogProps) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <CustomButton
          disabled={triggerDisabled}
          variant={variant}
          size={size}
          intent={intent}
        >
          {triggerTitle}
        </CustomButton>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-opacity-40 bg-black data-[state=open]:animate-overlayShow" />
        <Dialog.Content className="fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none data-[state=open]:animate-contentShow">
          <Dialog.Title className="m-0 text-[17px] font-medium">
            {dialogTitle}
          </Dialog.Title>
          <Dialog.Description></Dialog.Description>
          <div className="mt-4">{children}</div>
          <div className="mt-[25px] flex justify-end gap-3">
            <CustomButton variant="blue" intent="outline" onClick={onConfirm}>
              {confirmText}
            </CustomButton>
            <Dialog.Close asChild>
              <CustomButton>{cancelText}</CustomButton>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default CustomDialog;
