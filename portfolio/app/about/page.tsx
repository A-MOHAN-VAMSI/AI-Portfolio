"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-6xl mx-auto">

        {/* Back Button */}
        <Link
          href="/"
          className="inline-block mb-10 text-cyan-400 hover:text-cyan-300 transition"
        >
          ← Back to Home
        </Link>

        {/* Hero Section */}
        <motion.section
          className="text-center mb-24"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About Me
          </h1>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Passionate Full Stack Developer, AI Enthusiast, and
            problem solver dedicated to building intelligent
            digital experiences.
          </p>
        </motion.section>

        {/* Journey Section */}
        <motion.section
          className="mb-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-cyan-400">
            My Journey
          </h2>

          <p className="text-gray-300 leading-8 text-lg">
            My journey into technology started with a curiosity
            about how software powers the modern world. Over time,
            I developed strong interests in Full Stack Development,
            Artificial Intelligence, Automation, and building
            impactful applications.

            <br />
            <br />

            I continuously learn new technologies and enjoy
            transforming ideas into practical solutions that solve
            real-world problems.
          </p>
        </motion.section>

        {/* Career Goals */}
        <motion.section
          className="mb-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-bold mb-10 text-cyan-400">
            Career Goals
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <motion.div
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              transition={{ duration: 0.2 }}
              className="p-6 border border-gray-800 rounded-xl bg-zinc-900/40 hover:border-cyan-400"
            >
              <h3 className="text-xl font-bold mb-3">
                Full Stack Development
              </h3>

              <p className="text-gray-400">
                Building scalable web applications using modern
                frontend and backend technologies.
              </p>
            </motion.div>

            <motion.div
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              transition={{ duration: 0.2 }}
              className="p-6 border border-gray-800 rounded-xl bg-zinc-900/40 hover:border-cyan-400"
            >
              <h3 className="text-xl font-bold mb-3">
                Artificial Intelligence
              </h3>

              <p className="text-gray-400">
                Creating AI-powered solutions that solve
                real-world problems efficiently.
              </p>
            </motion.div>

            <motion.div
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              transition={{ duration: 0.2 }}
              className="p-6 border border-gray-800 rounded-xl bg-zinc-900/40 hover:border-cyan-400"
            >
              <h3 className="text-xl font-bold mb-3">
                Automation
              </h3>

              <p className="text-gray-400">
                Designing intelligent systems that improve
                productivity and user experience.
              </p>
            </motion.div>

          </div>
        </motion.section>

        {/* Statistics */}
        <motion.section
          className="grid md:grid-cols-4 gap-6 mb-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >

          {[
            { value: "5+", label: "Projects" },
            { value: "3+", label: "AI Apps" },
            { value: "10+", label: "Certificates" },
            { value: "100%", label: "Passion" },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.08,
              }}
              transition={{ duration: 0.2 }}
              className="text-center p-6 rounded-xl border border-gray-800 bg-zinc-900/40"
            >
              <h3 className="text-4xl font-bold text-cyan-400 mb-2">
                {item.value}
              </h3>
              <p className="text-gray-400">
                {item.label}
              </p>
            </motion.div>
          ))}

        </motion.section>

        {/* Resume CTA */}
        <motion.section
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-4">
            Let's Build Something Amazing
          </h2>

          <p className="text-gray-400 mb-8">
            Interested in collaborating or learning more about my work?
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="/resume.pdf"
              className="px-6 py-3 bg-cyan-500 text-black rounded-lg font-semibold hover:bg-cyan-400 transition"
            >
              Download Resume
            </a>

            <Link
              href="/#contact"
              className="px-6 py-3 border border-cyan-500 rounded-lg hover:bg-cyan-500/10 transition"
            >
              Contact Me
            </Link>
          </div>
        </motion.section>

      </div>
    </main>
  );
}