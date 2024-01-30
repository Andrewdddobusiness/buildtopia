"use client";
import React, { useEffect, useRef } from "react";
import DemoCard from "@/components/s1-demos/demo-card";

interface CardData {
  title: string;
  subtitle?: string;
  description?: string;
  socialURL?: string;
  imageSrc?: string;
  videoSrc?: string;
}

interface MasonryLayoutProps {
  data: CardData[];
}

const MasonryLayout: React.FC<MasonryLayoutProps> = ({ data }) => {
  return (
    <div className="flex justify-center">
      <div className="z-30 masonry-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-xl">
        {data.map((card, index) => (
          <DemoCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default MasonryLayout;
