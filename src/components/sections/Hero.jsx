"use client"
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex flex-col justify-center items-center px-8 overflow-hidden bg-surface py-24">
      {/* Atmospheric Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1] 
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-24 -left-24 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.15, 0.1] 
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/2 -right-24 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[150px]" 
        />
      </div>

      <div className="relative z-10 max-w-5xl text-center space-y-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center px-3 py-1 rounded-full bg-surface-container-highest border border-outline-variant/20 gap-2 mb-4"
        >
          <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse" />
          <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant font-medium">
            Available for freelance
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-headline text-5xl md:text-8xl font-extrabold tracking-tighter text-on-surface leading-tight"
        >
          I'm <span className="text-gradient">Som-Dev</span>, <br />
          Frontend Developer.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-body text-lg md:text-2xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed"
        >
          Building fast, scalable, and user-friendly web applications with precision and modern aesthetics.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-8 py-4 bg-primary-container text-on-primary-container font-headline font-bold rounded-lg flex items-center justify-center gap-2 hover:brightness-110 transition-all"
          >
            View Projects
            <ArrowRight size={20} />
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-8 py-4 glass-panel text-on-surface font-headline font-bold rounded-lg flex items-center justify-center gap-2 hover:bg-surface-container-highest transition-all"
          >
            Contact Me
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
