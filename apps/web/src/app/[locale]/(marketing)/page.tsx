import Hero from "@/components/sections/Hero";
import StatsCounter from "@/components/sections/StatsCounter";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ImmersiveProject from "@/components/sections/ImmersiveProject";
import Testimonials from "@/components/sections/Testimonials";
import ServicesGrid from "@/components/sections/ServicesGrid";
import InnovationStrip from "@/components/sections/InnovationStrip";
import CTASection from "@/components/sections/CTASection";
import { getHomeData } from "@/lib/content";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const data = await getHomeData(locale);

  return (
    <>
      <Hero />
      <StatsCounter metrics={data.metrics} logos={data.logos} />
      <FeaturedProjects projects={data.featuredProjects} />
      <WhyChooseUs items={data.differentiators} />
      <ImmersiveProject project={data.immersiveProject} />
      <Testimonials items={data.testimonials} />
      <ServicesGrid items={data.services} />
      <InnovationStrip items={data.innovationItems} />
      <CTASection />
    </>
  );
}
