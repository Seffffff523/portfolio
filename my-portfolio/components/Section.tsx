export default function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="min-h-screen py-24">
      <h2 className="text-3xl font-bold mb-6">{title}</h2>
      <div className="max-w-2xl">{children}</div>
    </section>
  );
}
