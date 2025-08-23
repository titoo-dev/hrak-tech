// Client-side GSAP loader & helper
// Lazy-loads GSAP and ScrollTrigger, registers plugin once and caches the result on window.
export async function getGsap() {
  if (typeof window === "undefined") return null;
  const w = window as any;
  if (w.__GSAP__) return w.__GSAP__;

  // Dynamic imports keep GSAP out of server bundles and enable code-splitting
  const gsapModule = await import('gsap');
  // ScrollTrigger must be imported from its file to ensure plugin registration works
  const ScrollTriggerModule = await import('gsap/ScrollTrigger');

  const gsap = gsapModule.gsap ?? gsapModule.default ?? gsapModule;
  const ScrollTrigger = ScrollTriggerModule.ScrollTrigger ?? ScrollTriggerModule.default ?? ScrollTriggerModule;

  try {
    // Register plugin if not already registered. Keep the check simple to avoid internal type access.
    if (ScrollTrigger && !(gsap as any).__registeredScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger);
      // mark on instance to avoid re-registering
      try { (gsap as any).__registeredScrollTrigger = true; } catch {}
    }
  } catch (e) {
    // ignore plugin registration errors
  }

  const prefersReduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  w.__GSAP__ = { gsap, ScrollTrigger, prefersReduced };
  return w.__GSAP__;
}

export default getGsap;
