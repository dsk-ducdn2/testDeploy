
import React from "react";

export function Button({ children, variant = "default", ...props }) {
  const base = "px-4 py-1 rounded text-sm font-medium";
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-gray-400 text-gray-700",
    secondary: "bg-gray-200 hover:bg-gray-300",
    destructive: "bg-red-500 text-white hover:bg-red-600"
  };
  return (
    <button className={`${base} ${variants[variant]}`} {...props}>
      {children}
    </button>
  );
}
