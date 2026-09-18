import { journey } from "../../data/journey";

export default function JourneyPanel({ onOpenGallery }) {
  return (
    <div>
      <h2 className="text-[32px] font-bold leading-[1.1] tracking-[-1px] text-hm-ink sm:text-display-lg">
        Journey
      </h2>
      <p className="mt-3 max-w-[56ch] text-body text-hm-body">
        Where I have studied, worked and volunteered.
      </p>

      <ol className="mt-9 space-y-3">
        {journey.map((item) => (
          <li key={item.id}>
            <button
              type="button"
              onClick={() => onOpenGallery(item.id)}
              className="group flex w-full items-start gap-4 rounded-[18px] border border-hm-line bg-hm-surface p-4 text-left transition duration-200 ease-out hover:-translate-y-0.5 hover:shadow-lift sm:gap-5 sm:p-5"
            >
              <span className="hidden h-[74px] w-[74px] shrink-0 overflow-hidden rounded-[12px] bg-hm-tint sm:block">
                <img
                  src={item.image}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                />
              </span>

              <span className="min-w-0 flex-1">
                <span className="block text-micro font-semibold uppercase tracking-[0.6px] text-hm-muted">
                  {item.year}
                </span>
                <span className="mt-1 block text-title text-hm-ink">{item.title}</span>
                <span className="mt-0.5 block text-caption font-medium text-hm-primary">
                  {item.place}
                </span>
                <span className="mt-1.5 block text-caption text-hm-body">
                  {item.description}
                </span>
                <span className="mt-2.5 block text-micro font-semibold text-hm-muted transition-colors group-hover:text-hm-primary">
                  {item.gallery.length}{" "}
                  {item.gallery.length === 1 ? "photo" : "photos"}
                </span>
              </span>
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
