import React from "react";

const Chip = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-primary-light/20 w-fit rounded-full px-2 py-0.5">
      <span className="text-primary-light text-sm font-semibold">
        {children}
      </span>
    </div>
  );
};

export default Chip;
