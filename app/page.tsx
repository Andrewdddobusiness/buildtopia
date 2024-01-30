import HomeBackground from "../components/backgrounds/home-background";
import PageLayout from "../components/layouts/page-layout";
import Navigation from "../components/nav";
import Footer from "../components/footer";
import Header from "../components/home/header";
import ValueSection from "../components/home/value-section";
import CarouselSection from "../components/home/carousel-section/carousel-section";
import TimelineSection from "../components/home/timeline-section";

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
      </PageLayout>

      <Footer />
    </main>
  );
}
