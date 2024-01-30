import HomeBackground from "@/components/backgrounds/home-background";
import Navigation from "@/components/nav";
import Footer from "@/components/footer";
import Image from "next/image";

import PageLayout from "@/components/layouts/page-layout";
import EmailSubscribeSection from "@/components/resend/email-subscribe-section";

export default function ComingSoonPage() {
  return (
    <main className="relative min-h-screen">
      <Navigation />
      <HomeBackground />

      <PageLayout>
        <div className="flex h-screen items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
            <div className="flex flex-col justify-center">
              <div className="text-6xl font-bold">coming soon...</div>
              <div className="text-2xl sm:text-4xl italic mt-2">
                s2... see you there?
              </div>
              {/* <div className="text-md sm:text-xl  italic mt-2">
                sub to stay updated.
              </div> */}
              {/* <EmailSubscribeSection /> */}
            </div>
            <div className="flex justify-center items-center">
              <Image
                src="/utopia-city-1.png"
                alt="utopia"
                width={350} // Set the desired width
                height={350} // Set the desired height
                sizes="100vw"
                style={{ objectFit: "cover", width: "100%", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </PageLayout>

      <Footer />
    </main>
  );
}
