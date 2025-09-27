import AppLayout from "./components/AppLay";
import AboutSection from "./components/partials/AboutSection";
import HeroSection from "./components/partials/HeroSection";
import ExperienceSection from "./components/partials/ExperienceSection";
import ServiceSection from "./components/partials/ServiceSection";
import RecentWorkSection from "./components/partials/RecentWorkSection";
import TestimonialSection from "./components/partials/TestimonialSection";
import BlogSection from "./components/partials/BlogSection";
import ContactSection from "./components/partials/ContactSection";

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
      <section className="container py-16">
        <ServiceSection />
      </section>
      <section className="container py-16">
        <RecentWorkSection />
      </section>
      <section className="container py-16">
        <TestimonialSection />
      </section>
      <section className="container py-16">
        <BlogSection />
      </section>
      <section className="container py-16">
        <ContactSection />
      </section>
    </AppLayout>
  );
}
