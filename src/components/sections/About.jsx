"use client"
import { motion } from "motion/react";
import { Zap, Layers } from "lucide-react";

export default function About() {
  return (
    <section className="py-32 px-8 bg-surface-container-low" id="about">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-5 relative group"
        >
          <div className="absolute inset-0 bg-primary/20 rounded-xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
          <div className="relative aspect-square rounded-xl overflow-hidden border border-outline-variant/20 bg-surface-container-highest">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUWCeMvG66Wyq5XgPQEnFirh4yMBA8ryx0_lxg0DQ17GXLu2Yr_4bNuX0B8ugvwTEPHUn_m04hwf53cS1vK-WAMTbZV_oKTEQFflCYzupStrhVnp3qmLqwDrSyqDm-ANfGezNfA_t7hu5c8xyBdNjCI-MqpzNZEGcm9UzJoWXS3sNgxfR8yoF9GzDUUDT0IsIqhb3s7Ey41uDDZSdVK5KFAiTkVjzWz5kiEPXlOyi93VqLEzi8leKJDkINesmRGwIdbSf_f1hJBls" 
              alt="Som-Dev Portfolio"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-7 space-y-8"
        >
          <div className="space-y-4">
            <span className="font-label text-sm text-primary tracking-[0.2em] uppercase font-bold">About Me</span>
            <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-on-surface tracking-tight">
              Crafting Digital Excellence.
            </h2>
          </div>
          
          <p className="font-body text-xl text-on-surface-variant leading-relaxed">
            With over <span className="text-on-surface font-bold">4 years of experience</span>, I specialize in architecting high-performance digital solutions. My journey spans from building intricate frontend interfaces with <span className="text-on-surface font-medium">React.js and Next.js</span> to robust backend systems using <span className="text-on-surface font-medium">Node.js</span>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <div className="p-6 rounded-xl bg-surface-container-highest/50 border border-outline-variant/10">
              <Zap className="text-primary mb-4" size={32} />
              <h4 className="font-headline font-bold text-on-surface text-lg">Fast Performance</h4>
              <p className="text-sm text-on-surface-variant mt-2">Optimizing every millisecond for a seamless user journey.</p>
            </div>
            <div className="p-6 rounded-xl bg-surface-container-highest/50 border border-outline-variant/10">
              <Layers className="text-secondary mb-4" size={32} />
              <h4 className="font-headline font-bold text-on-surface text-lg">Scalable Architecture</h4>
              <p className="text-sm text-on-surface-variant mt-2">Designing systems that grow with your business needs.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
