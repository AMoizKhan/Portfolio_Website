"use client";

import Image from "next/image";
import { useState } from "react";
import type { ProjectDetail } from "./ProjectDetailModal";
import ProjectDetailModal from "./ProjectDetailModal";

const PROJECTS: (ProjectDetail & { github?: string; link?: string })[] = [
  {
    title: "Presentation Prefix",
    subtitle: "MERN Stack · AI-Driven Video Analysis",
    year: "2024",
    stack: "React.js, Node.js, MongoDB, Python, Material UI",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=500&fit=crop",
    points: [
      "Full-stack application with AI-driven video analysis: facial expression detection, body language analysis, voice modulation using ML models.",
      "Responsive UI with Material UI CSS, deployed on Vercel with 98% uptime.",
      "User authentication, profile creation, peer feedback — increased user retention by 20%.",
    ],
    github: "https://github.com/AMoizKhan",
  },
  {
    title: "Real-Time Chat Application",
    subtitle: "100+ concurrent users",
    stack: "React.js, Node.js, Socket.IO, MongoDB, Vercel",
    image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=800&h=500&fit=crop",
    points: [
      "Real-time chat supporting 100+ concurrent users.",
      "User authentication and secure messaging with MongoDB.",
      "Deployed on Vercel.",
    ],
    github: "https://github.com/AMoizKhan",
  },
  {
    title: "Email Spam Detection",
    subtitle: "AI / ML Project",
    year: "2023",
    stack: "Python, Scikit-learn, NLP, Streamlit",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=500&fit=crop",
    points: [
      "ML model to classify emails as spam or not spam using NLP (tokenization, stop-word removal, TF-IDF).",
      "90% accuracy in detecting spam emails.",
      "Simple Streamlit UI for real-time predictions.",
    ],
    github: "https://github.com/AMoizKhan",
  },
  {
    title: "E-Commerce Platform Frontend",
    subtitle: "Dashboard & product management",
    stack: "React.js, Tailwind CSS",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
    points: [
      "Responsive e-commerce dashboard frontend; product management with filtering, sorting, and search.",
      "Reusable UI components for analytics and order tracking.",
    ],
    github: "https://github.com/AMoizKhan",
  },
];

export default function KeyProjects() {
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);

  return (
    <>
      <section id="projects" className="py-14 sm:py-20 md:py-24 lg:py-28 bg-gradient-to-b from-slate-50 to-white scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-5 md:px-6 max-w-6xl w-full">
          <div className="text-center mb-10 sm:mb-14">
            <p className="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-2">Portfolio</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">Key Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-cyan-500 mx-auto rounded-full" />
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">Click a project to view full description</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
              {PROJECTS.map((proj) => (
                <article
                  key={proj.title}
                  role="button"
                  tabIndex={0}
                  onClick={() => setSelectedProject(proj)}
                  onKeyDown={(e) => e.key === "Enter" && setSelectedProject(proj)}
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-xl hover:shadow-primary-200/30 hover:border-primary-200/50 transition-all duration-300 hover:-translate-y-1 w-full max-w-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                >
                  <div className="relative aspect-video overflow-hidden w-full">
                    <Image
                      src={proj.image}
                      alt={proj.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-primary-500/90 text-white mb-2">
                        {proj.year || "Project"}
                      </span>
                      <h3 className="text-xl font-bold drop-shadow-sm">{proj.title}</h3>
                      <p className="text-sm text-slate-200">{proj.subtitle || proj.stack}</p>
                      <p className="text-xs text-slate-300 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">Click to view details →</p>
                    </div>
                  </div>
                  <div className="p-4 sm:p-6">
                    <p className="text-xs font-medium text-primary-600 uppercase tracking-wider mb-3">{proj.stack}</p>
                    <ul className="space-y-2 text-slate-600 text-sm">
                      {proj.points.slice(0, 2).map((point, i) => (
                        <li key={i} className="flex items-start gap-2 line-clamp-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 flex-shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
          </div>
        </div>
      </section>
      <ProjectDetailModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  );
}
