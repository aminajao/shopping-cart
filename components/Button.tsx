import React, { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
  small?: boolean;
  outline?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  className = '',
  children,
  small = false,
  outline = false,
  type = 'button',
  ...props
}) => {
  return (
    <button
      className={`${className} relative disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover:opacity-80 transition w-full 
      ${
        outline
          ? 'bg-white border-black text-black'
          : 'bg-rose-500 border-rose-500 text-white'
      }
      ${
        small
          ? 'py-1 text-sm font-light border-[1px]'
          : 'py-3 text-base font-semibold border-2'
      }
      `}
      {...props}
      type={type}
    >
      {children}
    </button>
  );
};
