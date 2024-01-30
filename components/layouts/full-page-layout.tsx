import React, { ReactNode } from "react";

interface PageLayoutProps {
  children: ReactNode;
}

export default function FullPageLayout({
  children,
}: PageLayoutProps): React.ReactElement {
  return (
    <div className="w-full flex justify-center min-h-screen ">
      <div className="w-full flex flex-col space-y-4">{children}</div>
    </div>
  );
}
