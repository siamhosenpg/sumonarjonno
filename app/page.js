import Hero from "@/components/ui/Hero";
import OurStory from "@/components/ui/OurStory";
import Gallery from "@/components/ui/Gallery";
import Reasons from "@/components/ui/Reasons";
import LoveLetter from "@/components/ui/LoveLetter";
import FloatingHearts from "@/components/ui/FloatingHearts";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="relative bg-paper">
      <FloatingHearts />
      <Hero />
      <OurStory />
      <Gallery />
      <Reasons />
      <LoveLetter />
      <Footer />
    </main>
  );
}
