"use client";
import React from "react";
import Image from "next/image";

export default function TimelineSection() {
  return (
    <div className="mb-40 items-center flex flex-col justify-center">
      <div className="max-w-3xl mb-10">
        <div className="text-3xl sm:text-5xl font-bold">
          work on 1 thing each week.
        </div>
        <div className="text-3xl sm:text-5xl font-bold">
          post your update each week.
        </div>
      </div>
      <div className="max-w-xl ">
        <ol className="relative border-s border-gray-200 dark:border-gray-700">
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-bold leading-none text-gray-400 dark:text-gray-500">
              wk:1
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              figure out your idea.
            </h3>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              gain access to methods to pursue your ideas, start learning about
              the "builder's mindset" and don't forget to declare your dream!
            </p>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-bold leading-none text-gray-400 dark:text-gray-500">
              wk:2
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              start prototyping.
            </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              execute. execute. execute. start building towards your idea with a
              version 1.0... it's okay if you're unsure about your idea...
              that's the point of working on it... you'll only know if you try
              it out.
            </p>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-bold leading-none text-gray-400 dark:text-gray-500">
              wk:3
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              build community + growth.
            </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              learn about the other side of building... community, social media
              presence, growing with users, getting feedback, leveraging
              tools... the list goes on... you get your input on what you need.
            </p>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-bold leading-none text-gray-400 dark:text-gray-500">
              wk:4
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              iterate & demo prep.
            </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              get your passion project to a presentable state because it's demo
              time! this is your chance to show what you've been working on...
              dw it's not about being done... its about progress.
            </p>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-bold leading-none text-gray-400 dark:text-gray-500">
              wk:final
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              demo showcase.
            </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              this is launch week. whether you finished or not... showcase your
              work through a 1 min vid.
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
}
