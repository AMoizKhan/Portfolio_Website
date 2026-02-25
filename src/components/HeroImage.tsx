"use client";

import Image from "next/image";
import { useState } from "react";

const FALLBACK = "https://ui-avatars.com/api/?name=Abdul+Moiz+Khan&size=320&background=4f46e5&color=fff";

export default function HeroImage() {
  const [src, setSrc] = useState("/moiz.jpg");
  return (
    <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl ring-2 ring-slate-100 flex-shrink-0">
      <Image
        src={src}
        alt="Abdul Moiz Khan"
        fill
        className="object-cover"
        sizes="(max-width: 640px) 192px, (max-width: 768px) 224px, (max-width: 1024px) 256px, (max-width: 1280px) 288px, 320px"
        priority
        onError={() => setSrc(FALLBACK)}
      />
    </div>
  );
}
