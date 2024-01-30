"use client";
import React from "react";
import Image from "next/image";

export default function CarouselSection() {
  return (
    <div className="mb-40">
      <div className=" items-center justify-center grid sm:grid-cols-2 gap-4">
        <div className="max-w-xl ">
          <div className="text-3xl sm:text-5xl font-bold">
            escape to a utopia
          </div>
          <div className="text-3xl sm:text-5xl font-bold mb-5">
            of builders & dreamers.
          </div>
          <div className="text-md sm:text-xl  mt-2">
            building your passion projects shouldn't feel{" "}
            <span className="font-bold">lonely...</span> so join a community of
            builders that want to{" "}
            <span className="font-bold">build cool sh*t</span> & support one
            another while they build-in-public...
          </div>
        </div>
        <div className="max-w-[500px]">
          <Image
            src="/utopia-city-1.png"
            alt="Buildtopia Logo"
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
}
