"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ContactPage() {
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

        {/* Hero */}
        <motion.section
          className="text-center mb-20"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Contact Me
          </h1>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Have a project idea, internship opportunity, or just want
            to connect? Feel free to reach out.
          </p>
        </motion.section>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-cyan-400 mb-8">
              Get In Touch
            </h2>

            <div className="space-y-6">

              <div className="p-5 border border-gray-800 rounded-xl bg-zinc-900/40">
                <h3 className="font-semibold text-cyan-400 mb-2">
                  Email
                </h3>
                <p className="text-gray-300">
                  vamsiinternship078@gmail.com
                </p>
              </div>

              <div className="p-5 border border-gray-800 rounded-xl bg-zinc-900/40">
                <h3 className="font-semibold text-cyan-400 mb-2">
                  GitHub
                </h3>
                <a
                  href="https://github.com/A-MOHAN-VAMSI"
                  target="_blank"
                  className="text-gray-300 hover:text-cyan-400"
                >
                </a>
              </div>

              <div className="p-5 border border-gray-800 rounded-xl bg-zinc-900/40">
                <h3 className="font-semibold text-cyan-400 mb-2">
                  LinkedIn
                </h3>
                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  className="text-gray-300 hover:text-cyan-400"
                >
                  linkedin.com/in/yourprofile
                </a>
              </div>

              <div className="p-5 border border-gray-800 rounded-xl bg-zinc-900/40">
                <h3 className="font-semibold text-cyan-400 mb-2">
                  Resume
                </h3>

                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-cyan-400"
                >
                  Download Resume
                </a>
              </div>

            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form className="space-y-6 p-8 border border-gray-800 rounded-2xl bg-zinc-900/40">

              <div>
                <label className="block mb-2 text-gray-300">
                  Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full p-4 rounded-lg bg-black border border-gray-700 focus:border-cyan-400 focus:outline-none transition"
                />
              </div>

              <div>
                <label className="block mb-2 text-gray-300">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-4 rounded-lg bg-black border border-gray-700 focus:border-cyan-400 focus:outline-none transition"
                />
              </div>

              <div>
                <label className="block mb-2 text-gray-300">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="Enter subject"
                  className="w-full p-4 rounded-lg bg-black border border-gray-700 focus:border-cyan-400 focus:outline-none transition"
                />
              </div>

              <div>
                <label className="block mb-2 text-gray-300">
                  Message
                </label>

                <textarea
                  rows={6}
                  placeholder="Write your message..."
                  className="w-full p-4 rounded-lg bg-black border border-gray-700 focus:border-cyan-400 focus:outline-none transition resize-none"
                />
              </div>

              <motion.button
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                type="submit"
                className="w-full bg-cyan-500 text-black py-4 rounded-lg font-semibold hover:bg-cyan-400 transition"
              >
                Send Message
              </motion.button>

            </form>
          </motion.div>

        </div>

      </div>
    </main>
  );
}