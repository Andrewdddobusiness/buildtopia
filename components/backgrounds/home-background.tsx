// components/backgrounds/home-background.tsx
import Image from "next/image";
import React from "react";

const HomeBackground: React.FC = () => {
  return (
    <div className="absolute h-full w-full -z-50">
      <Image
        priority
        src="/background-image-white-2.png"
        fill
        alt="hero"
        quality={100}
        className=" object-cover"
      />
    </div>
  );
};

export default HomeBackground;
