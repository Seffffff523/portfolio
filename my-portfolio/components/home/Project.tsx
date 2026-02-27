export default function ProjectsSection() {
  const projects = [
    {
      title: "Vlog-01",
      description:
        "This was our capstone team’s first game, and being part of it was an exciting experience. Although I wasn’t the main developer, I helped make the game more immersive by adding creative jumpscares and improving the game logic. Seeing everything come together was incredibly rewarding.",
      stack: "C#",
      image: "/images/vlog01.png", 
      href: "https://sites.google.com/view/vlog-01",
    },
    {
      title: "Sample Project",
      description:
        "A responsive web application built with modern tools and clean UI principles.",
      stack: "React, Tailwind, Vite",
      image: "",
      href: "https://example.com",
    },
  ];
const openLink = (href: string) => {
    window.open(href, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="projects" className="scroll-mt-24">
      <h2 className="text-xl font-semibold mb-8">Projects</h2>

      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map((p) => (
          <article
            key={p.title}
            role="link"
            tabIndex={0}
            onClick={() => openLink(p.href)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") openLink(p.href);
            }}
            className="
              group cursor-pointer rounded-3xl bg-neutral-900/80 border border-neutral-800
              shadow-[0_20px_60px_-30px_rgba(0,0,0,0.8)]
              transition-transform duration-200 ease-out
              hover:scale-[1.02] hover:border-amber-500/40
              focus:outline-none focus:ring-2 focus:ring-amber-500/50
            "
          >
            {/* Image frame */}
            <div className="p-5">
              <div className="rounded-2xl bg-neutral-950 border border-neutral-800 overflow-hidden">
                {p.image ? (
                  <img
                    src={p.image}
                    alt={p.title}
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

            {/* Content */}
            <div className="px-6 pb-6">
              <h3 className="text-2xl font-semibold text-amber-400">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-300/80">
                {p.description}
              </p>
              <p className="mt-4 text-xs text-amber-400/70">{p.stack}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}