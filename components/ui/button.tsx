"use client";

import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "small" | "medium" | "large";
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "medium",
  children,
  className,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded font-medium transition-all duration-200 focus:outline-none focus:ring";

  const variantStyles = {
    primary: "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-300",
    secondary: "bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-300",
    outline:
      "bg-transparent border border-gray-500 text-gray-500 hover:bg-gray-100 focus:ring-gray-300",
  };

  const sizeStyles = {
    small: "px-3 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className || ""}`;

  return (
    // <button className={combinedStyles} {...props}>
    //   {children}
    // </button>

<button  {...props} className="inline-flex  animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%]  p-2 lg:p-3 font-medium text-slate-200 transition-colors ">
    {children}
</button>
  );
};

export default Button;


