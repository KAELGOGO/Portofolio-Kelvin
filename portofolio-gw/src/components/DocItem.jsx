/**
 * A clickable documentation entry: a project, a journey step, or an award.
 *
 * The whole card is one button. Never make this a card with a small separate
 * link inside it, because then half the card looks clickable and is not.
 */
export default function DocItem({
  image,
  meta,
  title,
  line,
  tags = [],
  photoCount = 0,
  onOpen,
  className = "",
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className={`group flex w-full flex-col overflow-hidden rounded-[18px] border border-hm-line bg-hm-surface text-left transition duration-200 ease-out hover:-translate-y-0.5 hover:shadow-lift ${className}`}
    >
      <span className="block aspect-[16/10] overflow-hidden bg-hm-tint">
        <img
          src={image}
          alt=""
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
        />
      </span>

      <span className="flex flex-1 flex-col p-5">
        {meta ? (
          <span className="block text-micro font-semibold uppercase tracking-[0.6px] text-hm-muted">
            {meta}
          </span>
        ) : null}

        <span className="mt-1.5 block text-title text-hm-ink">{title}</span>

        {line ? (
          <span className="mt-1 block text-caption text-hm-body">{line}</span>
        ) : null}

        {tags.length ? (
          <span className="mt-3 flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-hm-tint px-2.5 py-1 text-micro text-hm-body"
              >
                {tag}
              </span>
            ))}
          </span>
        ) : null}

        {photoCount > 0 ? (
          <span className="mt-auto block pt-3 text-micro font-semibold text-hm-muted transition-colors group-hover:text-hm-primary">
            {photoCount} {photoCount === 1 ? "photo" : "photos"}
          </span>
        ) : null}
      </span>
    </button>
  );
}
