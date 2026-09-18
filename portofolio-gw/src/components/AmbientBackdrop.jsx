import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { backdrop, BACKDROP_INTERVAL_MS } from "../data/backdrop";

/**
 * The rotating photograph behind the whole shell.
 *
 * Two things keep this from wrecking readability, and both matter:
 *   1. The images are blurred hard and washed with the canvas colour, so they
 *      read as quiet texture rather than as pictures competing for attention.
 *   2. The shell above is opaque. Nothing that carries text is translucent.
 *
 * Only the current and previous frames are mounted, the rotation stops while the
 * document is hidden, and under `prefers-reduced-motion` it never starts.
 */
export default function AmbientBackdrop() {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [prev, setPrev] = useState(null);
  const [loadedIndex, setLoadedIndex] = useState(-1);
  const [paused, setPaused] = useState(() => document.hidden);

  useEffect(() => {
    const onVisibility = () => setPaused(document.hidden);
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  useEffect(() => {
    if (reduceMotion || paused || backdrop.length < 2) return undefined;
    const id = window.setInterval(() => {
      setIndex((i) => {
        setPrev(i);
        return (i + 1) % backdrop.length;
      });
    }, BACKDROP_INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [paused, reduceMotion]);

  useEffect(() => {
    // Drop the outgoing frame once the crossfade has finished.
    const id = window.setTimeout(() => setPrev(null), 1400);
    return () => window.clearTimeout(id);
  }, [index]);

  if (!backdrop.length) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-hm-canvas"
    >
      {prev !== null ? (
        <img
          src={backdrop[prev]}
          alt=""
          className="absolute inset-0 h-full w-full scale-110 object-cover blur-[18px] saturate-[0.9]"
        />
      ) : null}

      <img
        src={backdrop[index]}
        alt=""
        onLoad={() => setLoadedIndex(index)}
        className={`absolute inset-0 h-full w-full scale-110 object-cover blur-[18px] saturate-[0.9] transition-opacity duration-[1200ms] ease-in-out ${
          loadedIndex === index ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* The wash. Raise this if the photographs start reading as pictures. */}
      <div className="absolute inset-0 bg-hm-canvas/55" />
    </div>
  );
}
