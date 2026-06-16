"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./style.module.css";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

export function Section({ children, className = "", id }: SectionProps) {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); 
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id={id}
      className={`
        w-full max-w-400 mx-auto p-4 md:px-16 lg:px-25 scroll-mt-25 md:scroll-mt-35 lg:scroll-mt-40 
        ${styles.section}
        ${inView ? styles.visible : ""}
        ${className}
      `}
    >
      {children}
    </section>
  );
}
