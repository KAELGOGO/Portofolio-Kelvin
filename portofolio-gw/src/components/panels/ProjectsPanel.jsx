import { ArrowUpRight } from "lucide-react";
import DocItem from "../DocItem";
import { projects } from "../../data/projects";

export default function ProjectsPanel({ onOpenGallery }) {
  return (
    <div>
      <h2 className="text-[32px] font-bold leading-[1.1] tracking-[-1px] text-hm-ink sm:text-display-lg">
        Projects
      </h2>
      <p className="mt-3 max-w-[56ch] text-body text-hm-body">
        Four things I have built and can talk about in detail.
      </p>

      <div className="mt-9 grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <div key={project.id} className="flex flex-col">
            <DocItem
              image={project.image}
              meta={`${project.category} · ${project.year}`}
              title={project.title}
              line={project.description}
              photoCount={project.gallery.length}
              onOpen={() => onOpenGallery(project.id)}
              className="flex-1"
            />

            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex w-fit items-center gap-1.5 text-caption font-semibold text-hm-primary underline-offset-4 transition-colors hover:text-hm-primary-hover hover:underline"
              >
                Open live site
                <ArrowUpRight size={15} />
              </a>
            ) : (
              <span className="mt-3 text-caption text-hm-muted">Not deployed</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
