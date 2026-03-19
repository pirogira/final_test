import { HomeModule } from "@/types/home";

export const homeStaticMeta = {
  title: "Modern Next Landing",
  description: "Responsive landing page built with Next.js and Tailwind CSS"
};

export const homeStaticModules: HomeModule[] = [
  { _type: "heroModule", _key: "hero-fallback" },
  { _type: "featuresModule", _key: "features-fallback" },
  { _type: "contentModule", _key: "content-fallback" },
  { _type: "ctaModule", _key: "cta-fallback" },
  { _type: "footerModule", _key: "footer-fallback" }
];
