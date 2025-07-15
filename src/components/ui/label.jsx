
import React from "react";

export function Label({ children, htmlFor, ...props }) {
  return (
    <label htmlFor={htmlFor} className="block text-xs font-medium text-gray-700 mb-1" {...props}>
      {children}
    </label>
  );
}
