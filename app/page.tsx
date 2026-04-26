import { Hero } from "@/components/Hero";
import { Steps } from "@/components/Steps";
import { Omens } from "@/components/Omens";
import { Testimonials } from "@/components/Testimonials";
import { FinalCTA } from "@/components/FinalCTA";
import { MobileOracleFAB } from "@/components/MobileOracleFAB";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Steps />
      <Omens />
      <Testimonials />
      <FinalCTA />
      <MobileOracleFAB />
    </>
  );
}
