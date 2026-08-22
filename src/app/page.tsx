import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { Showcase } from "@/components/sections/Showcase";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Showcase />
        <HowItWorks />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
