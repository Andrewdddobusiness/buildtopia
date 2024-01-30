import HomeBackground from "@/components/backgrounds/home-background";
import Navigation from "@/components/nav";
import Footer from "@/components/footer";
import QATable from "@/components/q&a/table";

import PageLayout from "@/components/layouts/page-layout";

export default function QAPage() {
  return (
    <main className="relative min-h-screen">
      <Navigation />
      <HomeBackground />

      <PageLayout>
        <div className="mt-10 mb-40">
          <QATable />
        </div>
      </PageLayout>

      <Footer />
    </main>
  );
}
