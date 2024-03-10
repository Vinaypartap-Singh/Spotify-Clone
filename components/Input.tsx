import { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  disabled?: boolean;
  propTypes?: any;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, propTypes, disabled, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={`w-full p-3 bg-neutral-700 rounded-md border border-transparent focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 ${className}`}
        disabled={disabled}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;
