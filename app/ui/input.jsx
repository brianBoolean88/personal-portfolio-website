// Input component extends from shadcnui - https://ui.shadcn.com/docs/components/input
"use client";;
import * as React from "react";
import { cn } from "/lib/utils";
import { useMotionTemplate, useMotionValue, motion } from "motion/react";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  const radius = 100; // change this to increase the rdaius of the hover effect
  const [visible, setVisible] = React.useState(false);

  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY
  }) {
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }
  return (
    <motion.div
      style={{
        background: useMotionTemplate`
      radial-gradient(
        ${visible ? radius + "px" : "0px"} circle at ${mouseX}px ${mouseY}px,
        #E7EFC7,
        transparent 80%
      )
    `,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className="group/input rounded-lg p-[2px] transition duration-300">

      {type === "textarea" ? (
        <textarea
          className={cn(
            `shadow-input flex min-h-[120px] w-full rounded-md border-none bg-[#AEC8A4] px-3 py-2 text-base text-black resize-y transition duration-400 group-hover/input:shadow-none placeholder:text-slate-700 focus-visible:ring-[2px] focus-visible:ring-neutral-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50`,
            className
          )}
          ref={ref}
          {...props}
        />
      ) : (
        <input
          type={type}
          className={cn(
            `shadow-input flex h-12 w-full rounded-md border-none bg-[#AEC8A4] px-4 py-3 text-base text-black transition duration-400 group-hover/input:shadow-none file:border-0 file:bg-transparent file:text-base file:font-medium placeholder:text-slate-700 focus-visible:ring-[2px] focus-visible:ring-neutral-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50`,
            className
          )}
          ref={ref}
          {...props}
        />
      )}
    </motion.div >
  );
});
Input.displayName = "Input";

export { Input };
