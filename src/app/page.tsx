import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Services from "@/components/Services";
import PortfolioGrid from "@/components/PortfolioGrid";
import KeyProjects from "@/components/KeyProjects";
import Testimonials from "@/components/Testimonials";
import BlogSection from "@/components/BlogSection";
import ContactForm from "@/components/ContactForm";
import { getPortfolioItems } from "@/services/portfolio";
import { getBlogPosts } from "@/services/blog";
import { getTestimonials } from "@/services/testimonials";

// Prevent static generation at build so DB is only used at runtime (fixes Vercel deploy without build-time env)
export const dynamic = "force-dynamic";

export default async function HomePage() {
  const [portfolioItems, blogPosts, testimonials] = await Promise.all([
    getPortfolioItems().catch(() => []),
    getBlogPosts().catch(() => []),
    getTestimonials().catch(() => []),
  ]);

  const portfolio = portfolioItems.map((p: { _id: { toString: () => string }; title: string; slug: string; category: string; description?: string; image: string; link?: string; order?: number }) => ({
    _id: p._id.toString(),
    title: p.title,
    slug: p.slug,
    category: p.category,
    description: p.description,
    image: p.image,
    link: p.link,
    order: p.order,
  }));

  const blog = blogPosts.map((p: { _id: { toString: () => string }; title: string; slug: string; excerpt: string; image: string; author: string; publishedAt: string | Date }) => ({
    _id: p._id.toString(),
    title: p.title,
    slug: p.slug,
    excerpt: p.excerpt,
    image: p.image,
    author: p.author,
    publishedAt: typeof p.publishedAt === "string" ? p.publishedAt : (p.publishedAt as Date).toISOString(),
  }));

  const testimonialList = testimonials.map((t: { _id: { toString: () => string }; name: string; role: string; company?: string; content: string; avatar?: string; rating?: number }) => ({
    _id: t._id.toString(),
    name: t.name,
    role: t.role,
    company: t.company,
    content: t.content,
    avatar: t.avatar,
    rating: t.rating,
  }));

  return (
    <main className="min-w-0 overflow-x-hidden">
      <Hero />
      <About />
      <Experience />
      <Services />
      {/* <PortfolioGrid items={portfolio} /> */}
      <KeyProjects />
      {/* <Testimonials items={testimonialList} /> */}
      {/* <BlogSection posts={blog} /> */}
      <ContactForm />
    </main>
  );
}
