'use client';
import { motion } from "motion/react";
import { Terminal, Database, Layout } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: "terminal",
    skills: [
      { name: "JavaScript", level: "Expert" },
      { name: "TypeScript", level: "Advanced" },
      { name: "React.js", level: "Expert" },
      { name: "Next.js", level: "Advanced" },
    ],
  },
  {
    title: "Backend",
    icon: "database",
    skills: [
      { name: "Node.js", level: "Professional" },
      { name: "Express", level: "Expert" },
      { name: "Dart / Flutter", level: "Intermediate" },
      { name: "SQL / NoSQL", level: "Advanced" },
    ],
  },
  {
    title: "Tools",
    icon: "layout",
    skills: [
      { name: "Git / GitHub", level: "Daily Use" },
      { name: "Docker", level: "Intermediate" },
      { name: "Figma", level: "Advanced" },
      { name: "Postman", level: "Pro" },
    ],
  },
];

const IconMap = {
  terminal: Terminal,
  database: Database,
  layout: Layout,
};

export default function Skills() {
  return (
    <section className="py-32 px-8 bg-surface-container-low relative overflow-hidden" id="skills">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto space-y-20 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4">
            <span className="font-label text-sm text-primary tracking-[0.2em] uppercase font-bold">Expertise</span>
            <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-on-surface tracking-tight">Technical Stack</h2>
          </div>
          <p className="max-w-md text-on-surface-variant text-lg">
            I use a modern set of tools and frameworks to ensure the highest code quality and performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => {
            const Icon = IconMap[category.icon];
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-10 bg-surface-container-highest/30 rounded-2xl border border-outline-variant/10 space-y-8 backdrop-blur-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <Icon size={24} />
                  </div>
                  <h3 className="font-headline text-2xl font-bold text-on-surface">{category.title}</h3>
                </div>

                <ul className="space-y-6">
                  {category.skills.map(skill => (
                    <li key={skill.name} className="flex items-center justify-between">
                      <span className="text-on-surface-variant font-medium">{skill.name}</span>
                      <span className="text-xs font-label text-tertiary bg-tertiary/10 px-2 py-0.5 rounded">
                        {skill.level}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
