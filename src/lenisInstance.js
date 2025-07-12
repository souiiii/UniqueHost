import Lenis from "@studio-freight/lenis";

export const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => t * (2 - t), // natural easeOut
  smoothWheel: true,
  smoothTouch: true,
  lerp: 0.08, // helps reduce jittert, // smooth and slow for manual scroll
});
