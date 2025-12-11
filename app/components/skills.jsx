export default function Skills() {
  const skills = [
    "HTML", "CSS", "JavaScript", "React", "Next.js", "TailwindCSS", "PHP", "MySQL"
  ];

  return (
    <section className="w-full max-w-5xl py-24 px-6">
      <h2 className="text-4xl font-bold mb-10">Skills.</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {skills.map((skill) => (
          <div
            key={skill}
            className="p-4 border rounded-xl text-center font-medium shadow-sm"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
