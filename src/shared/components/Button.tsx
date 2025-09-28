// components/ui/Button.tsx
import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    className?: string;
};

export default function Button({ children, className = "", ...props }: ButtonProps) {
    return (
        <button
            className={`cursor-pointer ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
