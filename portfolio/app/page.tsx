"use client";

import { motion } from "framer-motion";

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
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden relative">

      {/* Background Glow */}
      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-purple-500 opacity-20 blur-[120px]" />

      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-cyan-500 opacity-20 blur-[120px]" />

      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-6 relative z-10">

        <h1 className="text-2xl font-bold tracking-widest">
          MOHAN VAMSI
        </h1>

        <div className="flex gap-6 text-gray-300">
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center h-[80vh] relative z-10">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-extrabold mb-6"
        >
          GenAI Developer
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-gray-400 text-xl max-w-2xl mb-8"
        >
          Building futuristic AI systems, intelligent software,
          automation tools, and next-generation user experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex gap-4 flex-wrap justify-center"
        >

          <a
  href="#projects"
  className="px-8 py-4 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition"
>
  View Projects
</a>

          <a
  href="#contact"
  className="px-8 py-4 rounded-2xl border border-gray-600 hover:bg-white hover:text-black transition"
>
  Contact Me
</a>

        </motion.div>

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

          <button
            className="px-6 py-4 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition"
          >
            Resume
          </button>

        </div>

      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 pb-10 relative z-10">
        © 2026 MOHAN VAMSI • GenAI Developer
      </footer>

    </main>
  );
}