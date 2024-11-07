import { cn } from "@/lib/utils.ts";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const buttonVariants = cva(
  "rounded-default border font-medium disabled:border-grey",
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

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
}

const CustomButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ asChild, variant, size, intent, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, intent }))}
        ref={ref}
        {...props}
      />
    );
  },
);
CustomButton.displayName = "CustomButton";

export { CustomButton, buttonVariants };
