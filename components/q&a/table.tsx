import React from "react";
import Head from "next/head";
import data from "@/components/q&a/data.json";

import Link from "next/link";

const QAPage: React.FC = () => {
  return (
    <div className="container mx-auto">
      <Head>
        <title>Q&A Page</title>
        <meta name="description" content="Your Q&A page description" />
      </Head>
      <h1 className="text-3xl font-bold mb-8 mt-20 flex justify-center text-center">
        got questions?
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.map((item, index) => (
          <div key={index} className="p-4 rounded-xl">
            <h2 className="text-lg font-semibold mb-2">{item.question}</h2>
            <p className="text-gray-600 mb-4">
              {item.answer}
              {item.youtubeUrl ? (
                <span>
                  <Link
                    href={item.youtubeUrl}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    {" "}
                    @andrewdddo
                  </Link>
                </span>
              ) : (
                <></>
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QAPage;
