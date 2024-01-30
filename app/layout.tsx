import type { Metadata } from "next";
import "./globals.css";
import { cn } from "../lib/utils";
import { Montserrat } from "next/font/google";
import { HydrationOverlay } from "@builder.io/react-hydration-overlay";
import { Toaster } from "@/components/ui/toaster";

// If loading a variable font, you don't need to specify the font weight
const inter = Montserrat({
  subsets: ["latin", "latin-ext"],
  variable: "--font-mont",
});

export const metadata: Metadata = {
  title: "Buildtopia",
  description: "The place to work on your projects.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className={cn("min-h-screen bg-background font-sans antialiased")}>
        <HydrationOverlay>{children} </HydrationOverlay>
        <Toaster />
      </body>
    </html>
  );
}
