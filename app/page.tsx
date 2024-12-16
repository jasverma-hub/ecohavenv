import { AppleCardsCarouselDemo } from "@/components/AppleCardsCarouselDemo";
import Approach from "@/components/Approach";
import Clients from "@/components/Clients";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <SpeedInsights />
        <FloatingNav navItems={navItems} />
        <Hero />
        <Approach />
        <AppleCardsCarouselDemo />
        {/* <Grid /> */}
        <RecentProjects />
        <Clients />
        <Footer />
      </div>
    </main>
  );
}
