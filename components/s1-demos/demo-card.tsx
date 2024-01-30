import React from "react";
import { FaThreads } from "react-icons/fa6";

import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface DemoCardProps {
  title: string;
  subtitle?: string;
  description?: string;
  socialURL?: string;
  imageSrc?: string;
  videoSrc?: string;
}

const DemoCard: React.FC<DemoCardProps> = ({
  title,
  subtitle,
  description,
  socialURL,
  imageSrc,
  videoSrc,
}) => {
  return (
    <Card className="p-4 rounded-lg bg-white bg-opacity-50">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
        {subtitle && (
          <CardDescription className="text-gray-600 ">
            {subtitle}
          </CardDescription>
        )}
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>
        {videoSrc && (
          <div>
            <CardFooter>
              <video controls className="w-full rounded-lg">
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </CardFooter>
          </div>
        )}
      </CardContent>
      {socialURL && (
        <CardFooter className="text-blue-500 hover:text-blue-700 ">
          <Link href={socialURL}>
            <FaThreads className="cursor-pointer text-2xl" />
          </Link>
        </CardFooter>
      )}
    </Card>
  );
};

export default DemoCard;
