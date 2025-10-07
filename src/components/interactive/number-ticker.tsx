"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface NumberTickerProps {
  value: number;
  duration?: number;
  delay?: number;
  decimalPlaces?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  onComplete?: () => void;
  /** If true, animation starts when the element enters the viewport */
  animateOnVisible?: boolean;
}

const NumberTicker: React.FC<NumberTickerProps> = ({
  value,
  duration = 2000,
  delay = 0,
  decimalPlaces = 0,
  prefix = "",
  suffix = "",
  className = "",
  onComplete,
  animateOnVisible = false,
}) => {
  const [displayValue, setDisplayValue] = useState(0);
  const elementRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    let animationId: number | undefined;
    let timeoutId: number | undefined;
    let observer: IntersectionObserver | undefined;

    const startAnimation = () => {
      const startTime = performance.now();
      const startValue = 0; // Always start from 0

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Smooth easing function
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentValue = startValue + (value - startValue) * easeOutQuart;

        setDisplayValue(currentValue);

        if (progress < 1) {
          animationId = requestAnimationFrame(animate);
        } else {
          onComplete?.();
        }
      };

      animationId = requestAnimationFrame(animate);
    };

    const scheduleStart = () => {
      // Respect delay while avoiding multiple timers
      if (timeoutId) window.clearTimeout(timeoutId);
      timeoutId = window.setTimeout(startAnimation, delay);
    };

    if (animateOnVisible && elementRef.current) {
      observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          if (entry && entry.isIntersecting) {
            scheduleStart();
            observer?.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(elementRef.current);
    } else {
      scheduleStart();
    }

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
      if (timeoutId) clearTimeout(timeoutId);
      if (observer) observer.disconnect();
    };
  }, [value, duration, delay, onComplete, animateOnVisible]);

  const formatNumber = (num: number): string => {
    return num.toFixed(decimalPlaces).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <span ref={elementRef} className={cn("inline-block", className)}>
      {prefix}
      {formatNumber(displayValue)}
      {suffix}
    </span>
  );
};

export default NumberTicker;
