import { Button } from "@radix-ui/themes";
import { cva, VariantProps } from "class-variance-authority";
import React, { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "../lib/utils.ts";

export const ButtonVariants = cva(
  `rounded-default border font-medium disabled:border-grey`,
  {
    variants: {
      intent: {
        solid: "disabled:bg-grey text-white",
        outline: "disabled:text-grey disabled:border-grey",
      },
      variant: {
        black: "bg-black border-black",
        blue: "bg-primary border-primary",
      },
      size: {
        sm: "text-xs px-5 h-[28px]",
        md: "text-base px-[30px] h-[36px]",
        lg: "text-xl px-[60px] h-[44px]",
        icon: "w-[40px] h-[40px] p-0 flex items-center justify-center",
      },
    },
    compoundVariants: [
      {
        intent: "outline",
        variant: "black",
        className: "text-black bg-transparent",
      },
      {
        intent: "outline",
        variant: "blue",
        className: "text-primary bg-transparent",
      },
    ],
    defaultVariants: {
      intent: "solid",
      variant: "blue",
      size: "md",
    },
  },
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ButtonVariants> {
  asChild?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
}

const CustomButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ asChild, children, disabled, variant, size, intent, onClick }, ref) => {
    return (
      <Button
        className={cn(ButtonVariants({ variant, size, intent }))}
        disabled={disabled}
        asChild={asChild}
        onClick={onClick}
        ref={ref}
      >
        {children}
      </Button>
    );
  },
);

CustomButton.displayName = "CustomButton";

export default CustomButton;
