import Link from "next/link";

import ProjectCard from "@/components/ProjectCard";
import { featuredProjects, projects } from "@/data/projects";

export default function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-24">
      <h2 className="mb-8 text-xl font-semibold">Projects</h2>

      <div className="grid gap-6 sm:grid-cols-2">
        {featuredProjects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>

      <div className="mt-10">
        <Link
          href="/projects"
          className="
            group inline-flex items-center gap-2 rounded-2xl
            border border-neutral-800 bg-neutral-900/80 px-6 py-4
            text-sm font-semibold text-amber-400
            transition-all duration-200
            hover:scale-[1.02] hover:border-amber-500/40
            focus:outline-none focus:ring-2 focus:ring-amber-500/50
          "
        >
          See all {projects.length} projects
          <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </section>
  );
}
