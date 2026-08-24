"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "fade";
};

const hiddenClasses: Record<NonNullable<ScrollRevealProps["direction"]>, string> =
  {
    up: "translate-y-8 opacity-0",
    down: "-translate-y-8 opacity-0",
    left: "translate-x-8 opacity-0",
    right: "-translate-x-8 opacity-0",
    fade: "opacity-0",
  };

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -48px 0px",
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none ${
        isVisible
          ? "translate-x-0 translate-y-0 opacity-100"
          : hiddenClasses[direction]
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
