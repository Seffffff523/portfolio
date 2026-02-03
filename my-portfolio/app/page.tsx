export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-200">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-16">
        
        {/* LEFT SIDEBAR */}
        <aside className="sticky top-12 h-fit">
          <div className="flex flex-col items-start gap-6">
            
            {/* Avatar */}
            <div className="relative">
              <div className="avatar">
                <div className="w-28 rounded-full ring ring-warning ring-offset-base-100 ring-offset-4">
                  <img src="/images/profile.png" alt="profile" />
                </div>
              </div>
              <span className="absolute bottom-2 right-2 w-3 h-3 bg-success rounded-full" />
            </div>

            {/* Name */}
            <div>
              <h1 className="text-3xl font-bold text-white">
                Yousef Laurence Abayan
              </h1>
              <p className="text-sm text-white/80 mt-1">
                Front End Developer
              </p>
            </div>

            {/* Short bio */}
            <p className="text-sm text-white/70 leading-relaxed">
              I build modern web applications using tools like React, Next.js,
              Laravel , and effiecient in Virtual Tour Development
            </p>

            {/* Navigation */}
            <nav className="mt-6 space-y-3 text-sm uppercase tracking-widest">
              {["About", "Projects", "Experience", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-white/60 hover:text-white transition"
                >
                  {item}
                </a>
              ))}
            </nav>

            {/* Socials */}
            <div className="flex gap-4 mt-8 text-white">
              <span className="btn btn-circle btn-outline btn-white btn-sm">G</span>
              <span className="btn btn-circle btn-outline btn-white btn-sm">in</span>
              <span className="btn btn-circle btn-outline btn-white btn-sm">gh</span>
              <span className="btn btn-circle btn-outline btn-white btn-sm">f</span>
            </div>
          </div>
        </aside>

        {/* RIGHT CONTENT */}
        <section className="space-y-24">
          
          {/* ABOUT */}
          <section id="about" className="space-y-6">
            <p className="text-white/80 leading-loose max-w-2xl">
              I’m a web developer and engineering student with a passion for
              building clean, accessible, and responsive applications. I enjoy
              turning ideas into real products through thoughtful design and
              well-structured code.
            </p>

            <p className="text-white/70 leading-loose max-w-2xl">
              I’ve worked on projects ranging from static websites to dynamic
              apps using modern frameworks and APIs. I’m always learning and
              experimenting with new tools to improve performance and UX.
            </p>

            <p className="text-white/70 leading-loose max-w-2xl">
              Outside of coding, I enjoy tinkering with tech and exploring new
              ideas for future projects.
            </p>
          </section>

          {/* PROJECTS */}
          <section id="projects">
            <h2 className="text-xl font-semibold text-white mb-8">
              Projects
            </h2>

            <div className="grid sm:grid-cols-2 gap-6">
              {[1, 2].map((i) => (
                <div
                  key={i}
                  className="card bg-neutral-900 border border-neutral-800 hover:border-warning/50 transition"
                >
                  <figure className="p-4">
                    <div className="w-full h-40 bg-neutral-800 rounded-lg" />
                  </figure>
                  <div className="card-body">
                    <h3 className="card-title text-white">
                      Sample Project
                    </h3>
                    <p className="text-sm text-white/70">
                      A responsive web application built with modern tools and
                      clean UI principles.
                    </p>
                    <p className="text-xs text-white/50">
                      Next.js · Tailwind · Vercel
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* EXPERIENCE */}
          <section id="experience">
            <h2 className="text-xl font-semibold text-white mb-6">
              Experience
            </h2>

            <div className="space-y-4 max-w-2xl">
              <div className="border-l-2 border-warning pl-4">
                <h3 className="text-white font-medium">
                  Frontend Developer (Intern)
                </h3>
                <p className="text-sm text-white/70">
                  Built UI components and improved performance for web apps.
                </p>
              </div>
            </div>
          </section>

          {/* CONTACT */}
          <section id="contact">
            <h2 className="text-xl font-semibold text-white mb-6">
              Contact
            </h2>

            <p className="text-white/70 max-w-xl">
              Want to collaborate or chat? Feel free to reach out through any
              platform.
            </p>

            <button className="btn btn-warning mt-6">
              Say Hello
            </button>
          </section>

        </section>
      </div>
    </main>
  );
}
