"use client";

/**
 * Contact form - submits to /api/contact and saves to MongoDB
 */
import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = (data.get("name") as string)?.trim();
    const email = (data.get("email") as string)?.trim();
    const subject = (data.get("subject") as string)?.trim();
    const body = (data.get("message") as string)?.trim();

    if (!name || !email || !subject || !body) {
      setStatus("error");
      setMessage("Please fill in all fields.");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message: body }),
      });
      const json = await res.json();

      if (!res.ok) {
        setStatus("error");
        setMessage(json.error || "Something went wrong.");
        return;
      }
      setStatus("success");
      setMessage("Thank you! Your message has been sent.");
      form.reset();
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  }

  return (
    <section id="contact" className="py-14 sm:py-20 md:py-24 lg:py-28 bg-gradient-to-b from-slate-50 to-slate-100 scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-5 md:px-6 max-w-6xl w-full">
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-2">Contact</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">Get in Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-cyan-500 mx-auto rounded-full" />
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Open to roles and collaborations — I&apos;ll get back to you soon
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-slate-600">
            <a href="mailto:kabdulmoiz087@gmail.com" className="hover:text-primary-600 font-medium transition-colors">kabdulmoiz087@gmail.com</a>
            <span className="text-slate-400">·</span>
            <a href="tel:+923021587532" className="hover:text-primary-600 font-medium transition-colors">+92 302 1587532</a>
            <span className="text-slate-400">·</span>
            <a href="https://linkedin.com/in/abdul-moiz-khan-3835141b3" target="_blank" rel="noopener noreferrer" className="hover:text-primary-600 font-medium transition-colors">LinkedIn</a>
            <span className="text-slate-400">·</span>
            <a href="https://github.com/AMoizKhan" target="_blank" rel="noopener noreferrer" className="hover:text-primary-600 font-medium transition-colors">GitHub</a>
            <span className="text-slate-400">·</span>
            <span>Karachi, Pakistan</span>
          </div>
        </div>
        <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 p-4 sm:p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition bg-slate-50/50"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition bg-slate-50/50"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition bg-slate-50/50"
                placeholder="Subject"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition resize-none bg-slate-50/50"
                placeholder="Your message..."
              />
            </div>
            {message && (
              <p
                className={`text-sm ${
                  status === "success" ? "text-green-600" : "text-red-600"
                }`}
              >
                {message}
              </p>
            )}
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-3.5 px-6 rounded-xl bg-primary-600 text-white font-semibold hover:bg-primary-700 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 transition-all shadow-lg shadow-primary-500/25"
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
