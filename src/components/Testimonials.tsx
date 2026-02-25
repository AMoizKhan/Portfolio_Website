import Image from "next/image";

export interface TestimonialItem {
  _id: string;
  name: string;
  role: string;
  company?: string;
  content: string;
  avatar?: string;
  rating?: number;
}

interface TestimonialsProps {
  items: TestimonialItem[];
}

const DEFAULT_AVATAR = "https://ui-avatars.com/api/?name=User&background=6366f1&color=fff";

export default function Testimonials({ items }: TestimonialsProps) {
  const list = items.length > 0 ? items : [
    { _id: "1", name: "Jane Doe", role: "CEO", company: "Startup Inc", content: "Professional work and great communication.", rating: 5 },
    { _id: "2", name: "John Smith", role: "Design Lead", company: "Agency Co", content: "Clean code and on-time delivery.", rating: 5 },
    { _id: "3", name: "Alex Brown", role: "Founder", content: "Exactly what we needed. Responsive and creative.", rating: 5 },
  ];

  return (
    <section id="testimonials" className="py-14 sm:py-20 md:py-24 lg:py-28 bg-white scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-5 md:px-6 max-w-6xl w-full">
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-2">Kind words</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">Testimonials</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-cyan-500 mx-auto rounded-full" />
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">What clients and colleagues say</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {list.map((item) => (
            <div key={item._id} className="bg-slate-50 p-6 rounded-2xl shadow-md border border-slate-100 hover:shadow-lg hover:border-primary-100 transition-all">
              <div className="flex items-center gap-1 text-amber-500 mb-4">
                {Array.from({ length: item.rating ?? 5 }).map((_, i) => (
                  <span key={i} aria-hidden>★</span>
                ))}
              </div>
              <p className="text-slate-600 italic mb-6">&ldquo;{item.content}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-slate-200 ring-2 ring-white shadow">
                  <Image
                    src={item.avatar || DEFAULT_AVATAR}
                    alt={item.name}
                    fill
                    className="object-cover"
                    unoptimized={!item.avatar || item.avatar.includes("ui-avatars")}
                  />
                </div>
                <div>
                  <p className="font-bold text-slate-900">{item.name}</p>
                  <p className="text-sm text-slate-500">{item.role}{item.company ? ` · ${item.company}` : ""}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
