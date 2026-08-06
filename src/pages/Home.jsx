import {
  AboutSection,
  ContactSection,
  FeaturedProjectsSection,
  FounderSection,
  GogoroInitiativeSection,
  HeroSection,
  ServicesSection,
  VisionSection,
  WhySection,
} from "../components/corporate/Sections.jsx";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhySection />
      <VisionSection />
      <FeaturedProjectsSection />
      <GogoroInitiativeSection />
      <FounderSection />
      <ContactSection />
    </>
  );
}
