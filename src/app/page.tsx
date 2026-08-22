import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { Showcase } from "@/components/sections/Showcase";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Showcase />
      </main>
    </>
  );
}
