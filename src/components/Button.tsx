import { styleMerge } from "@/utils/cn";
import { VariantProps, cva } from "class-variance-authority";
import React from "react";

const buttonVariants = cva(
  "rounded-md transition inline-flex gap-2 items-center justify-center text-sm",
  {
    variants: {
      variant: {
        accent: "bg-[#792532] hover:bg-opacity-75",
        outlined: "border-[#92303f] border hover:bg-[#92303f]",
        ghost: "hover:bg-[#792532] hover:bg-opacity-75",
      },
      size: {
        norm: "px-3 py-4 h-9",
        larg: "px-[18px] py-[8px]",
        small: "p-1",
        square: "p-2.5",
      },
    },
    defaultVariants: {
      variant: "accent",
      size: "norm",
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = ({ className, variant, size, ...props }: ButtonProps) => {
  return (
    <button
      className={buttonVariants({ variant, size, className })}
      {...props}
    />
  );
};
