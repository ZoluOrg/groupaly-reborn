import { styleMerge } from "@/utils/cn";
import { VariantProps, cva } from "class-variance-authority";
import React from "react";

const buttonVariants = cva(
  " transition inline-flex gap-2 items-center justify-center font-semibold",
  {
    variants: {
      variant: {
        default: "bg-white bg-opacity-25 backdrop-blur-2xl rounded-lg",
        defaulyBlack: "bg-black bg-opacity-25 backdrop-blur-2xl rounded-lg hover:bg-opacity-40",
        cream: "bg-cream-base border border-black hover:bg-cream-n1 text-black",
        accent:
          "bg-accent-base border border-black hover:bg-accent-n1 text-black",
      },
      size: {
        norm: "px-3 py-4 h-9",
        larg: "px-[18px] py-[8px]",
        small: "p-1",
        square: "p-2.5",
      },
      fontSize: {
        sm: "text-sm",
        nm: "text-base",
        lg: "text-lg",
        xl: "text-xl",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "norm",
      fontSize: "sm",
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = ({
  className,
  variant,
  size,
  fontSize,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={buttonVariants({ variant, size, fontSize, className })}
      {...props}
    />
  );
};
