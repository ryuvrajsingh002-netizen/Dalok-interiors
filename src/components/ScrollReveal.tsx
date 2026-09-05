import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade' | 'zoom';
  delay?: number; // Delay in milliseconds
  duration?: number; // Duration in milliseconds
  distance?: number; // Distance in pixels (default: 36)
  threshold?: number; // Viewport intersection threshold (0 - 1)
  rootMargin?: string;
  className?: string;
  once?: boolean;
  style?: React.CSSProperties;
  id?: string;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 700,
  distance = 36,
  threshold = 0.12,
  rootMargin = '0px 0px -40px 0px',
  className = '',
  once = true,
  style = {},
  id,
}) => {
  const { ref, isIntersecting } = useIntersectionObserver<HTMLDivElement>({
    threshold,
    rootMargin,
    triggerOnce: once,
  });

  const getInitialTransform = (): string => {
    switch (direction) {
      case 'up':
        return `translate3d(0, ${distance}px, 0)`;
      case 'down':
        return `translate3d(0, -${distance}px, 0)`;
      case 'left':
        return `translate3d(-${distance}px, 0, 0)`;
      case 'right':
        return `translate3d(${distance}px, 0, 0)`;
      case 'zoom':
        return `scale(0.94)`;
      case 'fade':
      default:
        return 'translate3d(0, 0, 0)';
    }
  };

  const transitionStyle: React.CSSProperties = {
    ...style,
    opacity: isIntersecting ? 1 : 0,
    transform: isIntersecting ? 'translate3d(0, 0, 0) scale(1)' : getInitialTransform(),
    transitionProperty: 'opacity, transform',
    transitionDuration: `${duration}ms`,
    transitionDelay: `${delay}ms`,
    transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    willChange: 'opacity, transform',
  };

  return (
    <div
      ref={ref}
      id={id}
      style={transitionStyle}
      className={`transition-all ${className}`}
    >
      {children}
    </div>
  );
};
