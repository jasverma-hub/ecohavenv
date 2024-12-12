import React from "react";

export const Card = ({ children, className = "" }) => {
  return (
    <div className={`p-6 rounded-lg bg-black/80 border border-white/10 ${className}`}>
      {children}
    </div>
  );
};

export const CardHeader = ({ children, className = "" }) => {
  return <div className={`mb-4 ${className}`}>{children}</div>;
};

export const CardContent = ({ children, className = "" }) => {
  return <div className={`text-gray-400 ${className}`}>{children}</div>;
};

export const CardFooter = ({ children, className = "" }) => {
  return <div className={`mt-4 ${className}`}>{children}</div>;
};
