"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";;


const skills = [
  "Python",
  "GenAI",
  "Machine Learning",
  "Next.js",
  "React",
  "Tailwind CSS",
  "FastAPI",
  "OpenAI APIs",
  "LangChain",
  "Automation",
];

const projects = [
  {
    title: "AI Desktop Assistant",
    description:
      "Voice-controlled AI assistant capable of automation, smart commands, and task execution.",
    link: "https://github.com/A-MOHAN-VAMSI/AI-Assistant",
  },
  {
    title: "Gesture Recognition System",
    description:
      "Computer vision system that detects eye movement and gestures for smart control.",
    link: "https://github.com/A-MOHAN-VAMSI/Gesture-Recognition",
  },
  {
    title: "AI Portfolio Website",
    description:
      "Modern futuristic portfolio built with Next.js, Tailwind, and Framer Motion.",
    link: "https://github.com/A-MOHAN-VAMSI/AI-Portfolio",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden relative">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#7c3aed,transparent_35%),radial-gradient(circle_at_bottom_right,#06b6d4,transparent_35%)] opacity-30" />

      {/* Background Glow */}
      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-purple-500 opacity-20 blur-[120px]" />

      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-cyan-500 opacity-20 blur-[120px]" />

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
  <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

    <h1 className="text-lg md:text-2xl font-bold tracking-wider">
  MOHAN VAMSI
</h1>
    {/* Desktop Menu */}
    <div className="hidden md:flex gap-6 text-gray-300">
      <Link href="/about" className="hover:text-cyan-400 transition">
        About
      </Link>

      <a href="#skills" className="hover:text-cyan-400 transition">
        Skills
      </a>

      <a href="#projects" className="hover:text-cyan-400 transition">
        Projects
      </a>

      <Link href="/mail" className="hover:text-cyan-400 transition">
        Mail
      </Link>
    </div>

    {/* Mobile Menu Button */}
    <button
      className="md:hidden text-3xl"
      onClick={() => setMenuOpen(!menuOpen)}
    >
      {menuOpen ? "✕" : "☰"}
    </button>
  </div>

  {/* Mobile Menu */}
  {menuOpen && (
    <div className="md:hidden bg-zinc-900 border-t border-white/10">
      <div className="flex flex-col items-center py-4 gap-4">

        <Link
          href="/about"
          onClick={() => setMenuOpen(false)}
          className="hover:text-cyan-400"
        >
          About
        </Link>

        <a
          href="#skills"
          onClick={() => setMenuOpen(false)}
          className="hover:text-cyan-400"
        >
          Skills
        </a>

        <a
          href="#projects"
          onClick={() => setMenuOpen(false)}
          className="hover:text-cyan-400"
        >
          Projects
        </a>

        <Link
          href="/contact"
          onClick={() => setMenuOpen(false)}
          className="hover:text-cyan-400"
        >
          Contact
        </Link>

      </div>
    </div>
  )}
</nav>
      {/* Hero Section */}
<section className="flex flex-col justify-center items-center text-center min-h-[85vh] md:min-h-screen relative z-10 px-6 pt-24 md:pt-0">
  {/* Profile Image */}
  <motion.img
    src="/profile.png"
    alt="Profile"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1 }}
className="w-28 h-28 md:w-40 md:h-40 rounded-full border-4 border-cyan-400 shadow-[0_0_40px_rgba(34,211,238,0.6)] mb-6 md:mb-8 object-cover"
  />

  {/* Name */}
  <motion.h1
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="text-4xl md:text-7xl font-extrabold mb-4"
  >
    MOHAN VAMSI
  </motion.h1>

  {/* Typewriter */}
  <TypeAnimation
    sequence={[
      "GenAI Developer",
      2000,
      "AI Engineer",
      2000,
      "Full Stack Developer",
      2000,
    ]}
    wrapper="span"
    speed={50}
    repeat={Infinity}
    className="text-cyan-400 text-2xl md:text-3xl font-semibold"
  />

  {/* Description */}
  <motion.p
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.5 }}
    className="text-gray-400 text-lg max-w-2xl mt-6 mb-10"
  >
    Building futuristic AI systems, intelligent automation tools,
    and next-generation digital experiences.
  </motion.p>

  {/* Buttons */}
  <div className="flex flex-col md:flex-row gap-4 justify-center w-full max-w-md">

    <a
      href="#projects"
      className="w-full md:w-auto px-8 py-4 ..."
    >
      View Projects
    </a>

    <a
      href="#contact"
className="w-full md:w-auto px-8 py-4 ..."    >
      Contact Me
    </a>

  </div>

</section>
      {/* Skills Section */}
      <section
        id="skills"
        className="relative z-10 px-6 md:px-10 pb-24"
      >

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Tech Stack
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">

          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.08 }}
              className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-2xl p-6 text-center shadow-lg hover:border-cyan-400 transition"
            >
              <h3 className="font-semibold text-lg">
                {skill}
              </h3>
            </motion.div>
          ))}

        </div>

      </section>

      <section className="grid grid-cols-2 md:grid-cols-4 gap-6 px-6 md:px-10 pb-24 relative z-10">

  {[
    ["5+", "Projects"],
    ["3+", "AI Apps"],
    ["10+", "Certifications"],
    ["100%", "Passion"],
  ].map(([number, label], index) => (
    <div
      key={index}
      className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center backdrop-blur-lg"
    >
      <h2 className="text-4xl font-bold text-cyan-400">
        {number}
      </h2>

      <p className="text-gray-400 mt-2">
        {label}
      </p>
    </div>
  ))}

</section>

      {/* Projects Section */}
      <section
        id="projects"
        className="relative z-10 px-10 pb-32"
      >

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-lg hover:border-purple-400 transition"
            >
              <h3 className="text-2xl font-bold mb-4">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-6">
                {project.description}
              </p>

              <a
  href={project.link}
  target="_blank"
  className="px-5 py-3 rounded-xl bg-white text-black font-semibold hover:scale-105 transition inline-block"
>
  View Project
</a>

            </motion.div>
          ))}

        </div>

      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="relative z-10 px-10 pb-24"
      >

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Contact Me
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-6">

          <a
            href="https://github.com/A-MOHAN-VAMSI"
            target="_blank"
            className="px-6 py-4 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400 transition"
          >
            GitHub
          </a>
          

          <a
            href="https://www.linkedin.com/in/akula-mohan-vamsi-445a6936a/"
            target="_blank"
            className="px-6 py-4 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400 transition"
          >
            LinkedIn
          </a>

          <a
            href="mailto:vamsiinternship078@gmail.com"
            className="px-6 py-4 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400 transition"
          >
            Email
          </a>

          <a
  href="/resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="px-6 py-4 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition"
>
  Resume
</a>

        </div>

      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 pb-10 relative z-10">
        © 2026 MOHAN VAMSI • GenAI Developer
      </footer>

    </main>
  );
}