import React from 'react';
import { cn } from '@/utils/cn';

interface MeteorsProps {
  number?: number;
  className?: string;
}

export const Meteors = ({ number, className }: MeteorsProps) => {
  const meteors = new Array(number || 40).fill(true);

  return (
    <>
      {meteors.map((_, idx) => (
        <span
          key={"meteor" + idx}
          className={cn(
            "animate-meteor-effect absolute h-1 w-1 rounded-full bg-slate-500 shadow-[0_0_0_1px_#ffffff10]",
            "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#64748b] before:to-transparent",
            className
          )}
          style={{
            top: Math.floor(Math.random() * 100) + "%",
            left: Math.floor(Math.random() * 100) + "%",
            animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + "s",
            animationDuration: Math.floor(Math.random() * (10 - 2) + 2) + "s", // Adjust speed
          }}
        ></span>
      ))}
    </>
  );
};
