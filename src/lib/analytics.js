export function trackEvent(name, data = {}) {
  if (typeof window === 'undefined') return;

  const umami = window.umami;
  if (umami && typeof umami.track === 'function') {
    umami.track(name, data);
  }
}
