import ContentSection from "@/components/sections/ContentSection";
import CtaSection from "@/components/sections/CtaSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import FooterSection from "@/components/sections/FooterSection";
import HeroSection from "@/components/sections/HeroSection";
import { sanityFetch } from "@/sanity/lib/client";
import { homePageQuery } from "@/sanity/lib/queries";
import { HomeModule, HomePageData } from "@/types/home";

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

export default async function HomePage() {
  const data = await sanityFetch<HomePageData>({ query: homePageQuery });
  const modules = data?.modules?.length
    ? data.modules
    : ([
        { _type: "heroModule", _key: "hero-fallback" },
        { _type: "featuresModule", _key: "features-fallback" },
        { _type: "contentModule", _key: "content-fallback" },
        { _type: "ctaModule", _key: "cta-fallback" },
        { _type: "footerModule", _key: "footer-fallback" }
      ] as HomeModule[]);

  return (
    <main className="overflow-x-clip">
      {modules.map((module) => renderModule(module))}
    </main>
  );
}
