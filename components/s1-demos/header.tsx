import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <div className="md:my-96 mt-64">
      <div className="flex items-center justify-center">
        <div className="absolute inset-0 z-30 opacity-50 min-w-[300px] max-h-[1500px]">
          <Image
            src="/friends.png"
            alt="Protagonist"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <div className="flex flex-col relative text-center justify-center z-40">
        <div className="text-6xl font-bold opacity-80">s1:demos</div>
        <div className="text-xl sm:text-3xl opacity-70 italic mt-2">
          20+ builders entered the arena... to chase their dreams and build
          something to showcase to you.
        </div>
      </div>
    </div>
  );
}
