import { HomeModule } from "@/types/home";

export const homeStaticMeta = {
  title: "Миграционные услуги | МиграПро",
  description:
    "Миграционные услуги в Москве и Московской области: оформление РВП, ВНЖ, гражданства РФ и юридическая поддержка."
};

export const homeStaticModules: HomeModule[] = [
  { _type: "heroModule", _key: "hero-fallback" },
  { _type: "featuresModule", _key: "features-fallback" },
  { _type: "contentModule", _key: "content-fallback" },
  { _type: "ctaModule", _key: "cta-fallback" },
  { _type: "footerModule", _key: "footer-fallback" }
];
