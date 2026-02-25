import Image from "next/image";

export interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  image: string;
  author: string;
  publishedAt: string;
}

interface BlogSectionProps {
  posts: BlogPost[];
}

const PLACEHOLDER = "https://placehold.co/600x320/f3f4f6/9ca3af?text=Blog";

export default function BlogSection({ posts }: BlogSectionProps) {
  const list = posts.length > 0 ? posts.slice(0, 3) : [
    { _id: "1", title: "Getting Started with Next.js", slug: "nextjs", excerpt: "Learn the basics.", image: PLACEHOLDER, author: "Admin", publishedAt: new Date().toISOString() },
    { _id: "2", title: "Design Systems in Practice", slug: "design", excerpt: "Consistency across products.", image: PLACEHOLDER, author: "Admin", publishedAt: new Date().toISOString() },
    { _id: "3", title: "Performance Tips for React", slug: "react", excerpt: "Optimize for speed.", image: PLACEHOLDER, author: "Admin", publishedAt: new Date().toISOString() },
  ];

  return (
    <section id="blog" className="py-14 sm:py-20 md:py-24 lg:py-28 bg-gradient-to-b from-slate-50 to-white scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-5 md:px-6 max-w-6xl w-full">
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-2">Blog</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">Latest from Blog</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-cyan-500 mx-auto rounded-full" />
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">Thoughts and updates</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {list.map((post) => (
            <article key={post._id} className="rounded-2xl overflow-hidden shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-xl hover:border-primary-100 hover:-translate-y-1 transition-all duration-300">
              <div className="relative aspect-video bg-slate-100">
                <Image src={post.image || PLACEHOLDER} alt={post.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <div className="p-5 bg-white">
                <h3 className="text-lg font-bold text-slate-900 line-clamp-2 hover:text-primary-600 transition-colors">{post.title}</h3>
                <p className="text-sm text-slate-600 mt-2 line-clamp-2">{post.excerpt}</p>
                <p className="text-xs text-slate-500 mt-3">{post.author} · {new Date(post.publishedAt).toLocaleDateString()}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
