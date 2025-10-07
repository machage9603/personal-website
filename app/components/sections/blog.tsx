"use client";

import { motion } from "framer-motion";
import Navbar from "../Navbar";
import { ExternalLink, Calendar } from "lucide-react";

const articles = [
  {
    id: 1,
    title: "The Rise of AI Agents and Personal Supercomputers",
    excerpt: "Exploring how AI agents are transforming our interaction with technology and the emergence of personal computing power.",
    date: "2024",
    url: "https://medium.com/@machage_/the-rise-of-ai-agents-and-personal-supercomputers-3d7d797b9c4f",
    category: "AI & Technology"
  },
  {
    id: 2,
    title: "The Operator: Is This The End Of Virtual Assistants As We Know Them?",
    excerpt: "Examining the evolution of virtual assistants and what the future holds for human-AI collaboration.",
    date: "2024",
    url: "https://medium.com/@machage_/the-operator-is-this-the-end-of-virtual-assistants-as-we-know-them-5de7d25ff188",
    category: "AI & Technology"
  },
  {
    id: 3,
    title: "The Journey to ReadMeaker: A Personal Story",
    excerpt: "Behind the scenes of building ReadMeaker—the challenges, learnings, and insights from creating a developer tool.",
    date: "2024",
    url: "https://medium.com/@machage_/the-journey-to-readmeaker-a-personal-story-b54b4ec9f1c3",
    category: "Development"
  },
];

export default function Blog() {
  return (
    <>
      <Navbar />
      <section
        id="blog"
        className="relative min-h-screen flex items-center px-6 py-32 lg:px-12 xl:px-20 2xl:px-32"
      >
        <div className="w-full max-w-[1600px] mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 lg:mb-20"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="text-green-400 text-lg font-mono font-semibold">04.</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
                Blog & Writing
              </h2>
              <div className="flex-1 h-px bg-gray-800 ml-6"></div>
            </div>
            <p className="text-base md:text-lg text-gray-400 max-w-2xl">
              Thoughts on technology, development, and the future of AI.
            </p>
          </motion.div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {articles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <div className="h-full bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 lg:p-8 transition-all duration-300 hover:border-green-400 hover:bg-gray-900/50 hover:-translate-y-2">
                    {/* Category & Date */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-semibold text-green-400 uppercase tracking-wider">
                        {article.category}
                      </span>
                      <div className="flex items-center gap-1.5 text-xs text-gray-500">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{article.date}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 leading-tight group-hover:text-green-400 transition-colors duration-300">
                      {article.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-6">
                      {article.excerpt}
                    </p>

                    {/* Read More Link */}
                    <div className="flex items-center gap-2 text-sm font-medium text-green-400 group-hover:gap-3 transition-all duration-300">
                      <span>Read Article</span>
                      <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </a>
              </motion.article>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 lg:mt-20 text-center"
          >
            <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 lg:p-12">
              <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                Want to read more?
              </h3>
              <p className="text-base md:text-lg text-gray-400 mb-6 max-w-2xl mx-auto">
                Follow me on Medium for more articles about technology, development, and AI.
              </p>
              <a
                href="https://medium.com/@machage_"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-green-400 text-gray-950 rounded-lg font-semibold transition-all duration-300 hover:bg-green-300 hover:shadow-lg hover:shadow-green-400/20"
              >
                <span>Visit My Medium</span>
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Bottom Accent Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent mt-20 origin-center"
          ></motion.div>
        </div>
      </section>
    </>
  );
}