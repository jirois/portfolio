import AppLayout from "./components/AppLay";
import AboutSection from "./components/partials/AboutSection";
import HeroSection from "./components/partials/HeroSection";
import ExperienceSection from "./components/partials/ExperienceSection";

export default function Home() {
  return (
    <AppLayout>
      <HeroSection />
      <section className="container pt-20 pb-10">
        <AboutSection />
      </section>
      <section className="container py-16">
        <ExperienceSection />
      </section>
    </AppLayout>
  );
}
