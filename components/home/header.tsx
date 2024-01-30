import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <div className="mt-72 mb-56 md:my-96">
      <div className="flex items-center justify-center">
        <div className="flex flex-col relative text-center justify-center ">
          <div className="flex justify-center items-center">
            <div className="absolute opacity-50 max-w-[350px] min-w-[300px]">
              <Image
                src="/protagonist.png"
                alt="Protagonist"
                width={350} // Set the desired width
                height={350} // Set the desired height
                sizes="100vw"
                style={{ objectFit: "cover", width: "100%", height: "auto" }}
              />
            </div>
          </div>
          <div className="text-6xl font-bold">
            4 wks. build-in-public. demo.
          </div>
          <div className="text-xl sm:text-3xl  italic mt-2">that's it...</div>
          <div className="mt-8 z-10 mix-blend-multiply">
            <Button asChild className="w-1/2 ">
              <Link href="/coming-soon">you coming?</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
