
import React, { useEffect, useRef, useState } from "react";

interface AnimatedSectionProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  threshold?: number;
  animation?: "fade-up" | "fade-in" | "slide-right";
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  delay = 0,
  className = "",
  threshold = 0.1,
  animation = "fade-up",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [threshold]);

  const getAnimationClass = () => {
    switch (animation) {
      case "fade-up":
        return "animate-fade-in-up";
      case "slide-right":
        return "animate-slide-in-right";
      default:
        return "animate-fade-in";
    }
  };

  const styles = {
    opacity: 0,
    transition: "opacity 0.5s, transform 0.5s",
    animationDelay: `${delay}ms`,
    animationFillMode: "both" as const,
    animationPlayState: isVisible ? "running" : "paused" as const,
  };

  return (
    <div
      ref={sectionRef}
      className={`${className} ${isVisible ? getAnimationClass() : ""}`}
      style={isVisible ? { ...styles } : { opacity: 0 }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
