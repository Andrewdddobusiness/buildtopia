import React from "react";
import { Link } from "@nextui-org/link";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full flex flex-col items-center justify-center py-3">
      <div className="flex items-center gap-1">
        <Link
          isExternal
          className="text-primary"
          href="https://nextui-docs-v2.vercel.app?utm_source=next-app-template"
          title="nextui.org homepage"
        >
          Builds
        </Link>
        <span className="divider"> | </span>
        <Link
          isExternal
          className="text-primary"
          href="https://nextui-docs-v2.vercel.app?utm_source=next-app-template"
          title="nextui.org homepage"
        >
          Privacy
        </Link>
        <span className="divider"> | </span>
        <Link
          isExternal
          className="text-primary"
          href="https://nextui-docs-v2.vercel.app?utm_source=next-app-template"
          title="nextui.org homepage"
        >
          Terms
        </Link>
      </div>
      <br />
      <span className="text-default-600">
        Copyright © {currentYear} Buildtopia LLC
      </span>
    </footer>
  );
};
