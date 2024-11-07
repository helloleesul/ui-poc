import { buttonVariants, CustomButton } from "@/components/CustomButton.tsx";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { VariantProps } from "class-variance-authority";
import React from "react";

interface CustomDialogProps extends VariantProps<typeof buttonVariants> {
  triggerTitle: string;
  triggerDisabled?: boolean;
  dialogTitle: string;
  children: React.ReactNode;
  cancelText: string;
  confirmText: string;
  onConfirm: () => void;
}

export function CustomDialog({
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
}: CustomDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <CustomButton
          disabled={triggerDisabled}
          variant={variant}
          size={size}
          intent={intent}
        >
          {triggerTitle}
        </CustomButton>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{dialogTitle}</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div className="mt-4">{children}</div>
        <DialogFooter>
          <CustomButton variant="blue" intent="outline" onClick={onConfirm}>
            {confirmText}
          </CustomButton>
          <DialogClose asChild>
            <CustomButton>{cancelText}</CustomButton>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
