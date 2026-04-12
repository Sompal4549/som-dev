'use client';
import { motion } from "motion/react";
import { Eye, Code } from "lucide-react";

const projects = [
  {
    id: "1",
    title: "Zenith SaaS Dashboard",
    description: "A production-ready analytics dashboard featuring interactive charts, stats cards, and a data table.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBLF26GYOpNHEu0dlprfh84WuBFKe41eLpOzeV-aGdWR_dpnHsF8fJWjje4VhoWMsvv66JGGcQ8KEK2AJVuIkUHvKSi5li6xvOCm3KkH69CVv8EcxD2aWRzO8pfS9f68TC21Hsit8kojGHasS9K63-wAoNvPUQbVJpVZUounL231SU873iWoQEbiG-3BE8YXO1O-FpMdmY1Rs6uqOwCG0_zYAOJSF42QXSis5iDXbjkFoQcBCtpJDsfAN4C-vBA2lidsiTkeAL5cbk",
    tags: ["React", "Next.js", "Tailwind"],
    codeUrl: "#",
    demoUrl: "#",
  },
  {
    id: "2",
    title: "E-Commerce OS",
    description: "Scalable store with real-time inventory management and secure Stripe integration.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuArl69Vqn4dR5m-CGrC_E_o7eYcr5JZkQ9yJRiQQ7262vBUgUx5Z6Dsg61plYBIYm-i3_EdlI-p0awX9_vMUxuzD1CdIQM_ldZVHiMmaEA6Y8UCZKks21zpZb9J_PGpMAo8yxfL0oWH2P6MN6sRaJMrBZq6IfdCrtx4VRqVp0-r1oSeod2MnIf32EXSjs2oQ4gPEPd5mvfBtA5u7xE3H1Tp1tKo2JSBjI8e7RH_IIEpmY71qCHzLBspHupci_5Sa0BIFYc-LtLUEzM",
    tags: ["Node.js", "Stripe", "PostgreSQL"],
    codeUrl: "#",
    demoUrl: "#",
  },
  {
    id: "3",
    title: "Real-time Chat App",
    description: "Instant messaging platform with presence detection and socket-based message delivery.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCmGYa6uzsbQ6NDmY0zh7BwPUhIFHzxx5GW9jx55P3OcHh297ORD8hYq4Z_LwT1l_Ekau0CngfAyO6EAFaSffmBSkyo8chuCCBLHCosbpqfwGN8D0F4M8K-0vMfCN4hBmoe_HwR7GjED43s4wyYRvImfncXVhYZqSCLeNRfLDKfPZ8rDH0RIXmDbcMhfKgSdYqQwpMAhmQMNEhxcw5nKZ4uoZSZXTIYSKoqkxxu1nzmdAUK40Lh3hO-tuzMy57lnEhwEOyth76Elo4",
    tags: ["Socket.io", "Express", "Redis"],
    codeUrl: "#",
    demoUrl: "#",
  },
];

export default function Projects() {
  return (
    <section className="py-32 px-8 bg-surface" id="projects">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="font-label text-sm text-secondary tracking-[0.2em] uppercase font-bold">Portfolio</span>
          <h2 className="font-headline text-4xl md:text-6xl font-extrabold text-on-surface tracking-tighter">Featured Projects</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-surface-container-low rounded-xl overflow-hidden border border-outline-variant/10 hover:border-primary/30 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(159,167,255,0.08)]"
            >
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-surface/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4 backdrop-blur-sm">
                  <button className="p-3 bg-white text-surface rounded-full hover:scale-110 transition-transform">
                    <Eye size={20} />
                  </button>
                  <button className="p-3 bg-white text-surface rounded-full hover:scale-110 transition-transform">
                    <Code size={20} />
                  </button>
                </div>
              </div>

              <div className="p-8 space-y-6">
                <div className="space-y-2">
                  <h3 className="font-headline text-2xl font-bold text-on-surface">{project.title}</h3>
                  <p className="text-on-surface-variant line-clamp-2">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-surface-container-highest text-[10px] font-label font-bold text-on-surface-variant flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-tertiary" />
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4 border-t border-outline-variant/10">
                  <a href={project.codeUrl} className="flex-1 py-2 text-center text-sm font-bold font-headline text-on-surface border border-outline-variant/20 rounded-lg hover:bg-surface-container-highest transition-colors">
                    Code
                  </a>
                  <a href={project.demoUrl} className="flex-1 py-2 text-center text-sm font-bold font-headline bg-primary text-on-primary rounded-lg hover:brightness-110 transition-colors">
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
