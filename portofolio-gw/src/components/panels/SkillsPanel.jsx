import { skillGroups } from "../../data/skills";

export default function SkillsPanel() {
  return (
    <div>
      <h2 className="text-[32px] font-bold leading-[1.1] tracking-[-1px] text-hm-ink sm:text-display-lg">
        Skills
      </h2>
      <div className="mt-9 space-y-9">
        {skillGroups.map((group) => (
          <section key={group.id}>
            <h3 className="text-label uppercase text-hm-muted">{group.label}</h3>

            <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
              {group.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="rounded-[12px] border border-hm-line bg-hm-tint px-4 py-3.5"
                >
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="text-[17px] font-semibold text-hm-ink">
                      {skill.name}
                    </span>
                    <span className="shrink-0 text-caption text-hm-body">{skill.level}</span>
                  </div>
                  <p className="mt-1 text-micro text-hm-muted">{skill.note}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
