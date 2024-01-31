"use client";
import HomeBackground from "../components/backgrounds/home-background";
import PageLayout from "../components/layouts/page-layout";
import Navigation from "../components/nav";
import Footer from "../components/footer";
import Header from "../components/home/header";
import ValueSection from "../components/home/value-section";
import CarouselSection from "../components/home/carousel-section/carousel-section";
import TimelineSection from "../components/home/timeline-section";
import EmailSubscribeSection from "@/components/resend/email-subscribe-section";

export default function HomePage() {
  return (
    <main className="relative min-h-screen">
      <Navigation />
      <HomeBackground />

      <PageLayout>
        <div>
          <Header />
        </div>
        <div>
          <ValueSection />
        </div>
        <div>
          <CarouselSection />
        </div>

        <div>
          <TimelineSection />
        </div>

        <div className="flex justify-center">
          <div className="flex flex-col w-full sm:w-1/2 mb-48">
            <div className="text-6xl font-bold">sub?</div>
            <div className="text-xl sm:text-2xl  italic mt-2">
              updates coming soon
            </div>
            <EmailSubscribeSection />
          </div>
        </div>
      </PageLayout>

      <Footer />
    </main>
  );
}
