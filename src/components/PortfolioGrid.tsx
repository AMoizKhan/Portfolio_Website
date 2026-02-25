import Image from "next/image";

export interface PortfolioItem {
  _id: string;
  title: string;
  slug: string;
  category: string;
  description?: string;
  image: string;
  link?: string;
  order?: number;
}

interface PortfolioGridProps {
  items: PortfolioItem[];
}

const PLACEHOLDER = "https://placehold.co/600x400/f3f4f6/9ca3af?text=Project";

export default function PortfolioGrid({ items }: PortfolioGridProps) {
  const list: PortfolioItem[] = items.length > 0 ? items : [
    { _id: "1", title: "Project One", slug: "project-one", category: "Web", description: "Description.", image: PLACEHOLDER },
    { _id: "2", title: "Project Two", slug: "project-two", category: "Design", description: "Description.", image: PLACEHOLDER },
    { _id: "3", title: "Project Three", slug: "project-three", category: "Branding", description: "Description.", image: PLACEHOLDER },
  ];

  return (
    <section id="portfolio" className="py-14 sm:py-20 md:py-24 lg:py-28 bg-white scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-5 md:px-6 max-w-6xl w-full">
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-2">Work</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">Portfolio</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-cyan-500 mx-auto rounded-full" />
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">A selection of recent work</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {list.map((item) => (
            <article key={item._id} className="group rounded-2xl overflow-hidden shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-xl hover:border-primary-100 transition-all duration-300 hover:-translate-y-1">
              <a href={item.link || "#"} target={item.link ? "_blank" : undefined} rel={item.link ? "noopener noreferrer" : undefined} className="block">
                <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
                  <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width:640px) 100vw, 50vw, 33vw" />
                </div>
                <div className="p-5 bg-white">
                  <span className="text-xs font-semibold text-primary-600 uppercase tracking-wider">{item.category}</span>
                  <h3 className="text-lg font-bold text-slate-900 mt-1 group-hover:text-primary-600 transition-colors">{item.title}</h3>
                  {item.description && <p className="text-sm text-slate-600 mt-1 line-clamp-2">{item.description}</p>}
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
