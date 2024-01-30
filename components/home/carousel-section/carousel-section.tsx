"use client";
import React from "react";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import data from "./data.json";

export default function CarouselSection() {
  return (
    <div className="mb-40">
      <div className=" items-center justify-center grid sm:grid-cols-2 gap-14">
        <Carousel
          className="w-full"
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
          <CarouselContent className="-ml-1">
            {data.map((data, index) => (
              <CarouselItem
                key={index}
                className="pl-1 sm:basis-1/2 xl:basis-72"
              >
                <div className="p-1">
                  <Card>
                    <CardContent className="relative aspect-square overflow-hidden rounded-md">
                      <Image
                        src={data.path}
                        alt="image"
                        layout="fill"
                        objectFit="cover"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="max-w-xl">
          <div className="text-3xl sm:text-5xl font-bold">build your idea.</div>
          <div className="text-3xl sm:text-5xl font-bold mb-5">
            chase your dreams.
          </div>

          <div className="text-md sm:text-xl my-2">
            you probably have had a{" "}
            <span className="font-bold">side project </span>that you've been
            itching to work on.
          </div>
          <div className="text-md sm:text-xl">
            maybe it's <span className="italic underline">posting content</span>
            .
          </div>
          <div className="text-md sm:text-xl">
            creating a <span className="italic underline">video game</span>.
          </div>
          <div className="text-md sm:text-xl">
            building an <span className="italic underline">ai model</span>.
          </div>
          <div className="text-md sm:text-xl mb-2">
            starting a <span className="italic underline">clothing brand</span>.
          </div>
          <div className="text-md sm:text-xl">
            if you have a side project and want to build it, this is the
            community for you to{" "}
            <span className="font-bold underline">chase your dreams!</span>
          </div>
        </div>
      </div>
    </div>
  );
}
