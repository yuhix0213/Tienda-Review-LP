import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Education } from "@/components/sections/Education";
import { Problem } from "@/components/sections/Problem";
import { Barrier } from "@/components/sections/Barrier";
import { SmartReview } from "@/components/sections/SmartReview";
import { Growth } from "@/components/sections/Growth";
import { DigitalTrust } from "@/components/sections/DigitalTrust";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Education />
        <Problem />
        <Barrier />
        <SmartReview />
        <Growth />
        <DigitalTrust />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
