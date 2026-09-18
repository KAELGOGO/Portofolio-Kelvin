import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const MotionDiv = motion.div;

/**
 * The documentation popup, opened by any DocItem.
 *
 * Behaviour that matters and is easy to get wrong:
 *   - Esc closes; clicking the overlay closes; clicking the panel does not.
 *   - Arrow keys move between photographs.
 *   - Focus is trapped inside while open, and returns to the card that opened
 *     it on close.
 *   - Body scroll is locked, so the page behind does not drift.
 *
 * No helper text anywhere in here. A control is either found, or it is the
 * wrong control. See DESIGN.md, "gallery-modal".
 */
export default function GalleryModal({ item, onClose }) {
  const [index, setIndex] = useState(0);
  const panelRef = useRef(null);
  const closeRef = useRef(null);
  const restoreRef = useRef(null);
  const open = Boolean(item);
  const photos = item?.gallery ?? [];

  const step = useCallback(
    (delta) => {
      if (photos.length < 2) return;
      setIndex((i) => (i + delta + photos.length) % photos.length);
    },
    [photos.length],
  );

  useEffect(() => {
    if (!open) return undefined;

    restoreRef.current = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusTimer = window.setTimeout(() => closeRef.current?.focus(), 40);

    return () => {
      window.clearTimeout(focusTimer);
      document.body.style.overflow = previousOverflow;
      const target = restoreRef.current;
      if (target instanceof HTMLElement) target.focus();
    };
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        step(1);
        return;
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        step(-1);
        return;
      }
      if (event.key !== "Tab") return;

      const panel = panelRef.current;
      if (!panel) return;
      const focusable = panel.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );
      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose, step]);

  const hero = photos[index] ?? photos[0] ?? null;

  return (
    <AnimatePresence>
      {open ? (
        <MotionDiv
          key="gallery-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) onClose();
          }}
          className="fixed inset-0 z-50 grid place-items-center bg-hm-scrim/55 p-0 backdrop-blur-[6px] sm:p-6"
        >
          <MotionDiv
            key="gallery-panel"
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label={item?.title}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex h-full w-full max-w-[1040px] flex-col overflow-y-auto bg-hm-surface p-6 shadow-float sm:h-auto sm:max-h-[88vh] sm:rounded-[24px] md:p-8"
          >
            <div className="flex items-start justify-between gap-5">
              <div className="min-w-0">
                {item?.eyebrow ? (
                  <p className="text-label uppercase text-hm-primary">{item.eyebrow}</p>
                ) : null}
                <h2 className="mt-2 text-[24px] font-semibold leading-tight tracking-[-0.5px] text-hm-ink sm:text-display-md">
                  {item?.title}
                </h2>
                {item?.description ? (
                  <p className="mt-2 max-w-[60ch] text-body text-hm-body">{item.description}</p>
                ) : null}
              </div>

              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-hm-line bg-hm-tint text-hm-ink transition-colors hover:bg-hm-soft"
              >
                <X size={16} />
              </button>
            </div>

            {photos.length ? (
              <div className="mt-6">
                <div className="relative overflow-hidden rounded-[12px] bg-hm-tint">
                  <div className="aspect-[16/9]">
                    <img
                      src={hero.src}
                      alt={hero.caption ?? ""}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  {photos.length > 1 ? (
                    <>
                      <button
                        type="button"
                        onClick={() => step(-1)}
                        aria-label="Previous photo"
                        className="absolute left-3 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-hm-surface/90 text-hm-ink shadow-lift transition hover:bg-hm-surface"
                      >
                        <ChevronLeft size={18} />
                      </button>
                      <button
                        type="button"
                        onClick={() => step(1)}
                        aria-label="Next photo"
                        className="absolute right-3 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-hm-surface/90 text-hm-ink shadow-lift transition hover:bg-hm-surface"
                      >
                        <ChevronRight size={18} />
                      </button>
                    </>
                  ) : null}
                </div>

                {hero.caption ? (
                  <p className="mt-2 text-micro text-hm-muted">{hero.caption}</p>
                ) : null}

                {photos.length > 1 ? (
                  <div className="mt-4 grid grid-cols-3 gap-2.5">
                    {photos.map((photo, i) => (
                      <button
                        key={`${photo.src}-${i}`}
                        type="button"
                        onClick={() => setIndex(i)}
                        aria-label={`Photo ${i + 1}`}
                        aria-current={i === index}
                        className={`overflow-hidden rounded-[12px] border-2 bg-hm-tint transition-colors ${
                          i === index ? "border-hm-primary" : "border-transparent hover:border-hm-line"
                        }`}
                      >
                        <span className="block aspect-[4/3]">
                          <img
                            src={photo.src}
                            alt=""
                            loading="lazy"
                            decoding="async"
                            className="h-full w-full object-cover"
                          />
                        </span>
                      </button>
                    ))}
                  </div>
                ) : null}
              </div>
            ) : null}
          </MotionDiv>
        </MotionDiv>
      ) : null}
    </AnimatePresence>
  );
}
