import ContentSection from "@/components/sections/ContentSection";
import CtaSection from "@/components/sections/CtaSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import FooterSection from "@/components/sections/FooterSection";
import HeroSection from "@/components/sections/HeroSection";
import { homeStaticModules } from "@/content/homeStatic";
import { HomeModule } from "@/types/home";

function renderModule(module: HomeModule) {
  switch (module._type) {
    case "heroModule":
      return <HeroSection key={module._key} data={module} />;
    case "featuresModule":
      return <FeaturesSection key={module._key} data={module} />;
    case "contentModule":
      return <ContentSection key={module._key} data={module} />;
    case "ctaModule":
      return <CtaSection key={module._key} data={module} />;
    case "footerModule":
      return <FooterSection key={module._key} data={module} />;
    default:
      return null;
  }
}

export default function HomePage() {
  return (
    <main className="overflow-x-clip">
      {homeStaticModules.map((module) => renderModule(module))}
    </main>
  );
}
