import { useEffect, type RefObject } from "react";

/**
 * Tracks how far the viewport center has travelled through `target`
 * (0 when the section's top reaches the screen center, 1 when its bottom does —
 * equivalent to Motion's offset ["start center", "end center"]).
 *
 * The value is delivered through `onProgress` instead of React state so the
 * section doesn't re-render on every scroll frame.
 */
export function useScrollProgress(
  target: RefObject<HTMLElement | null>,
  onProgress: (progress: number) => void,
): void {
  useEffect(() => {
    const element = target.current;
    if (!element) return;

    let frame = 0;

    const update = (): void => {
      frame = 0;
      const rect = element.getBoundingClientRect();
      const center = window.innerHeight / 2;
      const raw = rect.height > 0 ? (center - rect.top) / rect.height : 0;
      onProgress(Math.min(1, Math.max(0, raw)));
    };

    const schedule = (): void => {
      if (frame === 0) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame !== 0) window.cancelAnimationFrame(frame);
    };
  }, [target, onProgress]);
}
