import React from "react";
import MasonryLayout from "@/components/s1-demos/masonry";
import data from "@/components/s1-demos/data.json";

interface DemoPageProps {
  data: any;
}

const DemoPage: React.FC<DemoPageProps> = ({ data }) => {
  return (
    <div className="container max-w-full mb-40 ">
      <MasonryLayout data={data} />
    </div>
  );
};

export default DemoPage;
