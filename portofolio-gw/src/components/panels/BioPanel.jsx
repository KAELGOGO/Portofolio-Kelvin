import { useEffect, useRef, useState } from "react";
import { ArrowRight, Download } from "lucide-react";
import { highlights, profile } from "../../data/profile";

function useTypewriter(text, speed, active, onDone) {
  const [out, setOut] = useState("");
  const doneRef = useRef(onDone);
  doneRef.current = onDone;

  useEffect(() => {
    if (!active) return undefined;
    let i = 0;
    setOut("");
    const id = window.setInterval(() => {
      i += 1;
      setOut(text.slice(0, i));
      if (i >= text.length) {
        window.clearInterval(id);
        doneRef.current?.();
      }
    }, speed);
    return () => window.clearInterval(id);
  }, [text, speed, active]);

  return out;
}

function greetingFor(hour) {
  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
}

export default function BioPanel({ onOpenGallery, onGoToTab }) {
  const [greeting, setGreeting] = useState("Hello");
  const [phase, setPhase] = useState("name");

  useEffect(() => {
    setGreeting(greetingFor(new Date().getHours()));
  }, []);

  const typedName = useTypewriter(profile.firstName, 150, phase === "name", () =>
    setPhase("intro"),
  );
  const typedIntro = useTypewriter(profile.intro, 50, phase === "intro");

  return (
    <div>
      <div className="flex flex-col items-start gap-7 sm:flex-row sm:items-center sm:gap-9">
        <div className="h-[132px] w-[132px] shrink-0 overflow-hidden rounded-[18px] border border-hm-line bg-hm-tint sm:h-[160px] sm:w-[160px]">
          <img
            src={profile.photo}
            alt={profile.name}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="min-w-0">
          <h1 className="text-[38px] font-bold leading-[1.08] tracking-[-1.4px] text-hm-ink sm:text-[52px] sm:tracking-[-1.8px] lg:text-display-xl">
            {greeting}, I&apos;m{" "}
            <span className="text-hm-primary">
              {typedName}
              {phase === "name" ? (
                <span className="ml-0.5 inline-block h-[0.9em] w-[3px] translate-y-[2px] animate-pulse bg-hm-primary align-middle" />
              ) : null}
            </span>
          </h1>

          <p className="mt-4 min-h-[1.6em] max-w-[46ch] text-body text-hm-body sm:text-lead">
            {typedIntro}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
            <a
              href={profile.cv}
              download={profile.cvFileName}
              className="inline-flex items-center gap-2 rounded-full bg-hm-primary px-6 py-3.5 text-[16px] font-semibold text-hm-on-primary transition-colors hover:bg-hm-primary-hover"
            >
              Download CV
              <Download size={17} />
            </a>

            <a
              href={profile.socials.find((s) => s.id === "linkedin")?.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-[16px] font-medium text-hm-primary underline-offset-4 transition-colors hover:text-hm-primary-hover hover:underline"
            >
              LinkedIn
              <ArrowRight size={16} />
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-caption text-hm-muted">
            {profile.facts.map((fact, i) => (
              <span
                key={fact}
                className={i === profile.facts.length - 1 ? "font-semibold text-hm-primary" : ""}
              >
                {fact}
              </span>
            ))}
          </div>
        </div>
      </div>

      <p className="mt-14 text-label uppercase text-hm-muted">Highlights</p>

      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {highlights.map((item) => (
          <div
            key={item.id}
            className="flex flex-col rounded-[18px] border border-hm-line bg-hm-surface p-5 transition duration-200 ease-out hover:-translate-y-0.5 hover:shadow-lift"
          >
            <p className="text-micro font-semibold uppercase tracking-[0.6px] text-hm-muted">
              {item.eyebrow}
            </p>
            <p className="mt-1.5 text-[17px] font-semibold leading-snug text-hm-ink">
              {item.title}
            </p>
            <p className="mt-1 text-caption text-hm-body">{item.line}</p>

            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-micro font-semibold">
              <button
                type="button"
                onClick={() => onGoToTab(item.goTo)}
                className="text-hm-primary transition-colors hover:text-hm-primary-hover"
              >
                See more
              </button>
              {item.gallery ? (
                <button
                  type="button"
                  onClick={() => onOpenGallery(item.gallery)}
                  className="text-hm-muted transition-colors hover:text-hm-primary"
                >
                  Photos
                </button>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
