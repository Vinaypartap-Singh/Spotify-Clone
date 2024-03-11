import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, children, onClick, disabled, type = "button", ...props },
    ref
  ) => {
    return (
      <button
        disabled={disabled}
        ref={ref}
        type={type}
        className={twMerge(
          `
    rounded-full
    bg-green-500
    px-5
    disabled:cursor-not-allowed
    disabled:opacity-50
    text-black
    font-bold
    hover: opacity-75
    transition  
    border-none
    `,
          className
        )}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
