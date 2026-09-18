import { Code, FolderGit2, Github, History, Instagram, Linkedin, Trophy, User } from "lucide-react";
import MusicDock from "./MusicDock";
import { profile } from "../data/profile";

export const TABS = [
  { id: "bio", label: "Bio", Icon: User },
  { id: "journey", label: "Journey", Icon: History },
  { id: "projects", label: "Projects", Icon: FolderGit2 },
  { id: "skills", label: "Skills", Icon: Code },
  { id: "achievements", label: "Achievements", Icon: Trophy },
];

const SOCIAL_ICONS = {
  instagram: Instagram,
  linkedin: Linkedin,
  github: Github,
};

function Wordmark() {
  return (
    <span className="flex items-center gap-2 font-jakarta text-[19px] font-bold tracking-[-0.3px] text-hm-ink">
      <span className="h-2 w-2 rounded-full bg-hm-primary" />
      KELVIN.
    </span>
  );
}

function SocialLinks({ className = "", size = 18 }) {
  return (
    <div className={`flex gap-2 ${className}`}>
      {profile.socials.map((social) => {
        const Icon = SOCIAL_ICONS[social.id];
        if (!Icon) return null;
        return (
          <a
            key={social.id}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            aria-label={social.label}
            className="grid h-9 w-9 place-items-center rounded-full border border-hm-line bg-hm-surface text-hm-body transition-colors hover:text-hm-primary"
          >
            <Icon size={size} />
          </a>
        );
      })}
    </div>
  );
}

/**
 * The shell navigation. A rail on desktop, a top bar plus a bottom tab bar on
 * mobile. The active tab is a white card with an amber label.
 */
export default function TabRail({ active, onChange }) {
  return (
    <>
      {/* Mobile: wordmark and socials */}
      <header className="fixed inset-x-0 top-0 z-30 flex h-14 items-center justify-between border-b border-hm-line bg-hm-tint px-5 lg:hidden">
        <Wordmark />
        <SocialLinks size={16} />
      </header>

      {/* Desktop rail */}
      <nav className="hidden w-60 shrink-0 flex-col border-r border-hm-line bg-hm-tint p-6 lg:flex">
        <Wordmark />

        <div className="mt-8 flex flex-col gap-1">
          {TABS.map(({ id, label, Icon }) => {
            const isActive = active === id;
            return (
              <button
                key={id}
                type="button"
                onClick={() => onChange(id)}
                aria-current={isActive ? "page" : undefined}
                className={`flex items-center gap-3 rounded-[12px] px-3.5 py-3 text-left text-caption transition-all duration-200 ${
                  isActive
                    ? "bg-hm-surface font-semibold text-hm-primary shadow-lift"
                    : "text-hm-body hover:bg-hm-surface/70"
                }`}
              >
                <Icon size={17} />
                {label}
              </button>
            );
          })}
        </div>

        <SocialLinks className="mt-auto" />

        {/* The dock lives at the foot of the rail, so it can never sit on top
            of the social links or the page content. */}
        <div className="mt-4">
          <MusicDock />
        </div>
      </nav>

      {/* Mobile: bottom tab bar */}
      <nav className="fixed inset-x-0 bottom-0 z-30 flex border-t border-hm-line bg-hm-surface pb-[env(safe-area-inset-bottom)] lg:hidden">
        {TABS.map(({ id, label, Icon }) => {
          const isActive = active === id;
          return (
            <button
              key={id}
              type="button"
              onClick={() => onChange(id)}
              aria-current={isActive ? "page" : undefined}
              className={`flex flex-1 flex-col items-center gap-1 py-2.5 text-[10px] transition-colors ${
                isActive ? "font-semibold text-hm-primary" : "text-hm-muted"
              }`}
            >
              <Icon size={19} />
              {label}
            </button>
          );
        })}
      </nav>
    </>
  );
}
