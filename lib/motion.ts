export const getReducedMotion = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

export const motionConfig = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: getReducedMotion() ? 0 : 0.3 }
};