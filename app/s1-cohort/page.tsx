import HomeBackground from "@/components/backgrounds/home-background";
import Navigation from "@/components/nav";
import Footer from "@/components/footer";
import Header from "@/components/s1-demos/header";
import DemoCards from "@/components/s1-demos/demo-cards";

import FullPageLayout from "@/components/layouts/full-page-layout";

import dataDemos from "@/components/s1-demos/data-demos.json";
import data from "@/components/s1-demos/data.json";

export default function S1DemosPage() {
  return (
    <main className="relative min-h-screen">
      <Navigation />
      <HomeBackground />

      <FullPageLayout>
        <div>
          <Header />
        </div>
        <div className="z-40 ">
          <div className="flex mt-64 flex-col relative text-center justify-center z-40 mx-4">
            <div className="text-4xl font-bold opacity-80 ">demo showcase</div>
            <div className="text-xl sm:text-xl opacity-70 italic mt-2 mb-10">
              builders who made it to the end...
            </div>
          </div>
          <DemoCards data={dataDemos} />
        </div>

        <div className="z-40">
          <div className="flex flex-col relative text-center justify-center z-40 mx-4">
            <div className="text-4xl font-bold opacity-80 ">
              thanks for coming...
            </div>
            <div className="text-xl sm:text-xl opacity-70 italic mt-2 mb-10">
              we'll make it to the end next time!
            </div>
          </div>
          <DemoCards data={data} />
        </div>
      </FullPageLayout>

      <Footer />
    </main>
  );
}
