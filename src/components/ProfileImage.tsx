"use client";

import Image from "next/image";
import { useState } from "react";

const FALLBACK = "https://ui-avatars.com/api/?name=Abdul+Moiz+Khan&size=288&background=4f46e5&color=fff";

interface ProfileImageProps {
  alt: string;
  className?: string;
  sizes?: string;
}

export default function ProfileImage({ alt, className, sizes }: ProfileImageProps) {
  const [src, setSrc] = useState("/moiz.jpg");
  return (
    <Image
      src={src}
      alt={alt}
      fill
      className={className}
      sizes={sizes ?? "224px 288px"}
      onError={() => setSrc(FALLBACK)}
    />
  );
}
