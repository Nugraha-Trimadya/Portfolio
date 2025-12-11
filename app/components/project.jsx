export default function Projects() {
  const projects = [
    { title: "Gym Management", year: "2024" },
    { title: "Library React App", year: "2025" },
    { title: "Rental House System", year: "2024" },
  ];

  return (
    <section className="w-full max-w-6xl py-24 px-6">
      <h2 className="text-5xl font-bold mb-8">Projects.</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <div key={p.title} className="rounded-xl overflow-hidden border shadow-sm p-6">
            <h3 className="text-2xl font-semibold">{p.title}</h3>
            <p className="opacity-70 mt-2">{p.year}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
