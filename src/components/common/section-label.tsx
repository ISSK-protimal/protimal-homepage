import React from "react";
import * as motion from "motion/react-client";
import { cn } from "@/lib/utils";

const SectionLabel = ({
  label,
  className,
}: {
  label: string;
  className?: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: 0.2 }}
      className={cn("flex items-center gap-2", className)}
    >
      <div className="size-4 md:size-6 bg-primary rounded-full" />
      <p className="md:text-2xl tracking-tight">{label}</p>
    </motion.div>
  );
};

export default SectionLabel;
