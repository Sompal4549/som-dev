"use client";
import { motion } from "motion/react";
import React, { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];
  return (
    <header className="w-full shadow-md bg-neutral">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-black font-headline text-on-surface tracking-tighter"
        >
          <Link href="/" className="text-xl font-bold text-white">
            Som-Dev
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6 text-white">
          <ul className="flex gap-6">
            {navLinks.map((link) => (
              <motion.li
                key={link.name}
                whileHover={{ y: -2 }}
                className="font-headline text-sm font-bold tracking-tight uppercase text-on-surface-variant hover:text-on-surface transition-colors duration-300"
              >
                <Link href={link.href}>{link.name}</Link>
              </motion.li>
            ))}
          </ul>
          <motion.div
            whileHover={{ y: -2 }}
            className="font-headline text-sm font-bold tracking-tight uppercase text-on-surface-variant hover:text-on-surface transition-colors duration-300"
          >
            <Link
              href="https://drive.google.com/file/d/12_gk5hnou5N5i42Ha3SCasv148wSyNRo/view?usp=drive_link"
              target="_blank"
            >
              Resume
            </Link>
          </motion.div>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl" onClick={() => setIsOpen(true)}>
          <FiMenu />
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b text-white">
          <span className="font-semibold">Menu</span>
          <button
            onClick={() => setIsOpen(false)}
            className="text-2xl text-white"
          >
            <FiX fill="white" className="text-white" />
          </button>
        </div>

        <ul className="flex flex-col gap-4 p-4">
          <li className="font-headline text-sm font-bold tracking-tight uppercase text-on-surface-variant hover:text-on-surface transition-colors duration-300">About</li>
          <li className="font-headline text-sm font-bold tracking-tight uppercase text-on-surface-variant hover:text-on-surface transition-colors duration-300">Projects</li>
          <li className="font-headline text-sm font-bold tracking-tight uppercase text-on-surface-variant hover:text-on-surface transition-colors duration-300">Skills</li>
          <li className="font-headline text-sm font-bold tracking-tight uppercase text-on-surface-variant hover:text-on-surface transition-colors duration-300">Contact</li>

          <Link href="/" className="text-blue-600 font-medium">
            Resume
          </Link>

          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
            Contact Me
          </button>
        </ul>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;
