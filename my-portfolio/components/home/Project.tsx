export default function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-24">
      <h2 className="text-xl font-semibold mb-8">Projects</h2>

      <div className="grid sm:grid-cols-2 gap-6">
        {[1, 2].map((i) => (
          <div
            key={i}
            className="card bg-base-200 border border-base-300 hover:border-warning transition"
          >
            <figure className="p-4">
              <div className="w-full h-40 bg-base-300 rounded-lg" />
            </figure>
            <div className="card-body">
              <h3 className="card-title">Sample Project</h3>
              <p className="text-sm text-base-content/70">
                A responsive web application built with modern tools and clean UI principles.
              </p>
              <p className="text-xs text-base-content/50">Next.js · Tailwind · Vercel</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}