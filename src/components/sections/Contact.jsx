"use client"
import { motion } from "motion/react";
import { Mail, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
export default function Contact() {
  return (
    <section className="py-32 px-8 bg-surface" id="contact">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="space-y-4">
            <span className="font-label text-sm text-primary tracking-[0.2em] uppercase font-bold">Contact</span>
            <h2 className="font-headline text-4xl md:text-6xl font-extrabold text-on-surface tracking-tighter">Let's work together.</h2>
          </div>
          <p className="text-xl text-on-surface-variant leading-relaxed">
            Currently available for freelance projects and full-time opportunities. Reach out if you want to build something extraordinary.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 rounded-full bg-surface-container-highest/50 flex items-center justify-center border border-outline-variant/10">
                <Mail className="text-primary" size={24} />
              </div>
              <div>
                <h4 className="font-headline font-bold text-on-surface">Email</h4>
                <p className="text-on-surface-variant">hello@som.dev</p>
              </div>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <motion.a 
                whileHover={{ y: -5 }}
                href="https://github.com/Sompal4549" 
                className="w-12 h-12 rounded-lg bg-surface-container-highest flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors border border-outline-variant/10"
              >
                <FaGithub size={24} />
              </motion.a>
              <motion.a 
                whileHover={{ y: -5 }}
                href="https://www.linkedin.com/in/sompal-kumar-b62b5022b/" 
                className="w-12 h-12 rounded-lg bg-surface-container-highest flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors border border-outline-variant/10"
              >
                <FaLinkedin size={24} />
              </motion.a>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-panel p-6 sm:p-10 rounded-2xl border border-outline-variant/10 shadow-2xl"
        >
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="font-label text-sm uppercase tracking-widest text-on-surface-variant font-bold">Full Name</label>
              <input 
                type="text" 
                className="w-full bg-surface-container-highest/50 border border-outline-variant/20 rounded-lg px-6 py-4 text-on-surface focus:outline-none focus:border-primary/50 transition-colors" 
                placeholder="John Doe" 
              />
            </div>
            <div className="space-y-2">
              <label className="font-label text-sm uppercase tracking-widest text-on-surface-variant font-bold">Email Address</label>
              <input 
                type="email" 
                className="w-full bg-surface-container-highest/50 border border-outline-variant/20 rounded-lg px-6 py-4 text-on-surface focus:outline-none focus:border-primary/50 transition-colors" 
                placeholder="john@example.com" 
              />
            </div>
            <div className="space-y-2">
              <label className="font-label text-sm uppercase tracking-widest text-on-surface-variant font-bold">Message</label>
              <textarea 
                rows={5} 
                className="w-full bg-surface-container-highest/50 border border-outline-variant/20 rounded-lg px-6 py-4 text-on-surface focus:outline-none focus:border-primary/50 transition-colors" 
                placeholder="Hi Som-Dev, I'd like to discuss a project..." 
              />
            </div>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-primary text-on-primary font-headline font-bold rounded-lg hover:brightness-110 transition-all flex items-center justify-center gap-2"
            >
              Send Message
              <Send size={18} />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
