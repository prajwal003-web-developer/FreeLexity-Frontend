'use client'

import { motion } from 'framer-motion'
import { FaBolt, FaRocket, FaCode } from "react-icons/fa";
import Link from "next/link";
import Footer from '../components/Footwe';

const Page = () => {
  return (
    <div className="bg-gray-50 text-black font-sans">
      {/* Hero Section */}
      <section className="min-h-[100vh] flex flex-col justify-center items-center bg-gradient-to-l from-pink-400 via-orange-400 to-gray-400 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-extrabold text-black"
        >
          Free<span className="text-pink-600">Lexity</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="mt-6 text-lg md:text-xl max-w-2xl text-gray-800"
        >
          Your free, lightweight <span className="text-orange-600 font-semibold">AI-powered search assistant</span>.
          Ask questions, find answers, and explore knowledge instantly.
        </motion.p>
        <motion.div className="mt-8 md:w-[33rem] w-full mx-auto">
          <Link
            href="/"
            className="px-6 py-3 w-full  hover:text-gray-900 font-semibold bg-black text-white rounded-2xl shadow-lg hover:bg-transparent border-gray-900 border-solid hover:border transition inline-block"
          >
            Get Started
          </Link>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">
          Why Choose <span className="text-orange-500">FreeLexity</span>?
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          <motion.div whileHover={{ scale: 1.05 }} className="bg-white p-6 rounded-2xl shadow-lg">
            <FaBolt className="text-pink-500 text-4xl mx-auto mb-4" />
            <h3 className="font-semibold text-xl">Instant Search</h3>
            <p className="mt-2 text-gray-600">Get results powered by AI in seconds with a clean UI.</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="bg-white p-6 rounded-2xl shadow-lg">
            <FaRocket className="text-orange-500 text-4xl mx-auto mb-4" />
            <h3 className="font-semibold text-xl">Smart Answers</h3>
            <p className="mt-2 text-gray-600">Not just links — FreeLexity summarizes and explains.</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="bg-white p-6 rounded-2xl shadow-lg">
            <FaCode className="text-gray-700 text-4xl mx-auto mb-4" />
            <h3 className="font-semibold text-xl">Developer Friendly</h3>
            <p className="mt-2 text-gray-600">Open, lightweight, and easy to extend with APIs.</p>
          </motion.div>
        </div>
      </section>

      {/* Context / About Section */}
      <section className="py-20 bg-gradient-to-r from-gray-200 via-pink-200 to-orange-200 text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-6"
        >
          What is <span className="text-pink-600">FreeLexity</span>?
        </motion.h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-700">
          FreeLexity is a **searching platform** inspired by Preplexity —
          but completely free, simple, and developer-focused.
          Instead of overwhelming you with ads and clutter, FreeLexity gives you **direct, AI-enhanced answers**
          while keeping speed and clarity at its core.
        </p>
      </section>

      {/* Call To Action Section */}
      <section className="py-20 px-6 text-center bg-black text-white max-w-[100vw] overflow-clip">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold"
        >
          Ready to Experience <span className="text-pink-500">FreeLexity</span>?
        </motion.h2>
        <p className="mt-4 text-gray-300">
          Ask smarter questions, get smarter answers — instantly, for free.
        </p>
        <motion.div whileHover={{ scale: 1.1 }} className="mt-8 max-w-[100vw] overflow-clip">
          <Link
            href="/"
            className="px-6 py-3 bg-pink-600 text-white rounded-xl shadow-lg hover:bg-orange-500 transition inline-block"
          >
            Start Searching
          </Link>
        </motion.div>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  )
}

export default Page
