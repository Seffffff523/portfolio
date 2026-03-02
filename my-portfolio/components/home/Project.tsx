import Link from "next/link";

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
      title: "Mactan Newtown Virtual Tour",
      description:
        "My first successful virtual tour project enabled users to explore locations remotely through immersive 360° panoramas. With smooth navigation and an interactive side UI, users could easily move between scenes, look around freely, and engage with key points of interest for a more dynamic online experience.",
      stack: "XML, HTML5, CSS3, JavaScript",
      image: "/images/mactan.gif",
      href: "https://www.mata.ph/mactannewtown",
    },
    {
      title: "BFP Fire Simulation",
      description:
        "The BFP Fire Simulation is an interactive game that teaches people what to do during a fire emergency through realistic, hands-on scenarios. It makes fire safety more engaging and memorable than traditional lectures, especially for those who learn better by playing",
      stack: "C#",
      image: "/images/bfp.gif",
      href: "https://www.mata.ph/bfp",
    },
    {
      title: "Costavida 3d Modeling",
      description:
        "For the Costavida 3d Modeling, my team and I created a detailed 3D model of the building and seamlessly superimposed it onto a 360° panoramic image of the site to make it appear fully constructed within its real-world environment, with the final render showcased in the Mactan Newtown Virtual Tour.",
      stack: "XML, HTML5, CSS3, JavaScript",
      image: "/images/costa.gif",
      href: "https://www.mata.ph/mactannewtown",
    },
    {
      title: "Content Management System",
      description:
        "The CMS provides full CRUD (Create, Read, Update, Delete) functionality, giving clients complete control over their virtual tour content. They can easily upload, update, or remove images that automatically reflect on the live tour, as well as add detailed information and descriptions to clearly define and categorize each location, ensuring flexible and efficient tour management.",
      stack: "Laravel, Vue, XML",
      image: "/images/cms.gif",
      href: "https://www.mata.ph/mactannewtown",
    },
  ];

  const openLink = (href: string) => {
    window.open(href, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="projects" className="scroll-mt-24">
      <h2 className="mb-8 text-xl font-semibold">Projects</h2>

      <div className="grid gap-6 sm:grid-cols-2">
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
              group cursor-pointer rounded-3xl border border-neutral-800 bg-neutral-900/80
              shadow-[0_20px_60px_-30px_rgba(0,0,0,0.8)]
              transition-transform duration-200 ease-out
              hover:scale-[1.02] hover:border-amber-500/40
              focus:outline-none focus:ring-2 focus:ring-amber-500/50
            "
          >
            <div className="p-5">
              <div className="overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950">
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

            <div className="px-6 pb-6">
              <h3 className="text-2xl font-semibold text-amber-400">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-300/80">
                {p.description}
              </p>
              <p className="mt-4 text-xs text-amber-400/70">{p.stack}</p>
            </div>
          </article>
        ))}
        {/* <div className="flex items-center justify-center min-h-[220px]">
          <Link
            href="/projects"
            className="
              rounded-2xl bg-white px-6 py-4 text-sm font-semibold text-black
              shadow-md transition-all duration-200
              hover:scale-105 hover:shadow-lg
              active:scale-95
            "
          >
            See all projects
          </Link>
        </div> */}
      </div>

     
    </section>
  );
}