import TopNav from "@/components/TopNav";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function AllProjects() {
  return (
    <main className="min-h-screen bg-black px-6 py-2 text-white">
      <TopNav />

      <div className="mx-auto max-w-6xl pb-24">
        <h1 className="mb-8 text-3xl font-bold">All Projects</h1>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </main>
  );
}
