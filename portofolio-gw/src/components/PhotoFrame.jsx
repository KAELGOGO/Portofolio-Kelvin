/**
 * The only wrapper images go through, so the treatment stays identical
 * everywhere. See DESIGN.md, "photo-frame".
 */
export default function PhotoFrame({
  src,
  alt = "",
  caption,
  ratio = "aspect-[16/10]",
  rounded = "rounded-[18px]",
  className = "",
  imgClassName = "",
}) {
  return (
    <figure className={className}>
      <div className={`${ratio} ${rounded} overflow-hidden bg-hm-tint`}>
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          className={`h-full w-full object-cover ${imgClassName}`}
        />
      </div>
      {caption ? (
        <figcaption className="mt-2 text-micro text-hm-muted">{caption}</figcaption>
      ) : null}
    </figure>
  );
}
