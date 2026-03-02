import Link from "next/link";

export default function AllProjects() {
  return (
    <main className="min-h-screen bg-black px-6 py-16 text-white">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold">All Projects</h1>

        <Link
          href="/"
          className="
            rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black
            shadow-md transition-all duration-200
            hover:scale-105 hover:shadow-lg
            active:scale-95
          "
        >
          Home
        </Link>
      </div>

      <p>Put your full projects list here.</p>
    </main>
  );
}