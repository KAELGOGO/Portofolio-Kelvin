import { ArrowUpRight } from "lucide-react";
import DocItem from "../DocItem";
import { achievements } from "../../data/achievements";

export default function AchievementsPanel({ onOpenGallery }) {
  const [lead, ...rest] = achievements;

  return (
    <div>
      <h2 className="text-[32px] font-bold leading-[1.1] tracking-[-1px] text-hm-ink sm:text-display-lg">
        Achievements
      </h2>
      <p className="mt-3 max-w-[56ch] text-body text-hm-body">
        Awards and programs I have been part of.
      </p>

      <button
        type="button"
        onClick={() => onOpenGallery(lead.id)}
        className="group mt-9 grid w-full overflow-hidden rounded-[24px] border border-hm-line bg-hm-surface text-left transition duration-200 ease-out hover:-translate-y-0.5 hover:shadow-lift sm:grid-cols-2"
      >
        <span className="block aspect-[16/10] overflow-hidden bg-hm-tint sm:aspect-auto sm:h-full">
          <img
            src={lead.image}
            alt=""
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
          />
        </span>

        <span className="flex flex-col justify-center p-6 sm:p-8">
          <span className="text-label uppercase text-hm-primary">{lead.eyebrow}</span>
          <span className="mt-3 text-[24px] font-semibold leading-tight tracking-[-0.5px] text-hm-ink sm:text-display-md">
            {lead.title}
          </span>
          <span className="mt-3 text-body text-hm-body">{lead.description}</span>
          <span className="mt-5 text-micro font-semibold text-hm-muted transition-colors group-hover:text-hm-primary">
            {lead.gallery.length} photos
          </span>
        </span>
      </button>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {rest.map((item) => (
          <DocItem
            key={item.id}
            image={item.image}
            meta={item.eyebrow}
            title={item.title}
            line={item.description}
            photoCount={item.gallery.length}
            onOpen={() => onOpenGallery(item.id)}
          />
        ))}

        <div className="flex flex-col justify-center rounded-[18px] border border-dashed border-hm-line bg-hm-tint p-5">
          <p className="text-title text-hm-ink">More to come</p>
          <p className="mt-1 text-caption text-hm-body">
            Competing is how I learn fastest. The next one is already in progress.
          </p>
          <a
            href="https://github.com/KAELGOGO"
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex w-fit items-center gap-1.5 text-caption font-semibold text-hm-primary underline-offset-4 hover:underline"
          >
            GitHub
            <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </div>
  );
}
