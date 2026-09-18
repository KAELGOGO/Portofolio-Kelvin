import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { highlights, profile } from "../../data/profile";

const MotionDiv = motion.div;

function greetingFor(hour) {
  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
}

export default function BioPanel({ onGoToTab }) {
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

        <MotionDiv
          className="min-w-0"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-[38px] font-bold leading-[1.08] tracking-[-1.4px] text-hm-ink sm:text-[52px] sm:tracking-[-1.8px] lg:text-display-xl">
            {greetingFor(new Date().getHours())}, I&apos;m{" "}
            <span className="text-hm-primary">{profile.firstName}</span>
          </h1>

          <p className="mt-4 max-w-[46ch] text-body text-hm-body sm:text-lead">
            {profile.intro}
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
            {profile.facts.map((fact) => (
              <span
                key={fact.label}
                className={fact.emphasis ? "font-semibold text-hm-primary" : ""}
              >
                {fact.label}
              </span>
            ))}
          </div>
        </MotionDiv>
      </div>

      <p className="mt-14 text-label uppercase text-hm-muted">Highlights</p>

      <ul className="mt-4 space-y-3">
        {highlights.map((item) => (
          <li key={item.id}>
            <button
              type="button"
              onClick={() => onGoToTab(item.goTo)}
              className="group flex w-full items-start gap-4 rounded-[18px] border border-hm-line bg-hm-surface p-5 text-left transition duration-200 ease-out hover:-translate-y-0.5 hover:shadow-lift"
            >
              <span className="min-w-0 flex-1">
                <span className="block text-micro font-semibold uppercase tracking-[0.6px] text-hm-muted">
                  {item.eyebrow}
                </span>
                <span className="mt-1 block text-title text-hm-ink">{item.title}</span>
                <span className="mt-1.5 block text-caption text-hm-body">{item.line}</span>
              </span>

              <ArrowRight
                size={18}
                className="mt-1 shrink-0 text-hm-muted transition-colors group-hover:text-hm-primary"
              />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
