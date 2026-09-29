"use client";

import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const hasLink = Boolean(project.href);

  const openLink = () => {
    if (!hasLink) return;
    window.open(project.href, "_blank", "noopener,noreferrer");
  };

  return (
    <article
      role={hasLink ? "link" : undefined}
      tabIndex={hasLink ? 0 : undefined}
      onClick={openLink}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") openLink();
      }}
      className={[
        "group rounded-3xl border border-neutral-800 bg-neutral-900/80",
        "shadow-[0_20px_60px_-30px_rgba(0,0,0,0.8)]",
        "transition-transform duration-200 ease-out",
        hasLink
          ? "cursor-pointer hover:scale-[1.02] hover:border-amber-500/40 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
          : "",
      ].join(" ")}
    >
      <div className="p-5">
        <div className="overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="
                h-44 w-full object-cover
                transition-transform duration-300 ease-out
                group-hover:scale-[1.03]
              "
              loading="lazy"
            />
          ) : (
            <div className="h-44 w-full bg-neutral-800/40" />
          )}
        </div>
      </div>

      <div className="px-6 pb-6">
        <h3 className="text-2xl font-semibold text-amber-400">{project.title}</h3>
        {project.role && (
          <p className="mt-1 text-sm font-medium text-neutral-400">{project.role}</p>
        )}
        <p className="mt-3 text-sm leading-relaxed text-neutral-300/80">
          {project.description}
        </p>
        <p className="mt-4 text-xs text-amber-400/70">{project.stack}</p>
      </div>
    </article>
  );
}
