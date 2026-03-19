export type HeroModule = {
  _key?: string;
  _type: "heroModule";
  badge?: string;
  title?: string;
  description?: string;
  primaryButtonLabel?: string;
  secondaryButtonLabel?: string;
  primaryButtonHref?: string;
  secondaryButtonHref?: string;
};

export type FeatureCard = {
  _key?: string;
  title?: string;
  description?: string;
  iconName?: string;
};

export type FeaturesModule = {
  _key?: string;
  _type: "featuresModule";
  title?: string;
  description?: string;
  cards?: FeatureCard[];
};

export type ContentModule = {
  _key?: string;
  _type: "contentModule";
  title?: string;
  description?: string;
  sideLabel?: string;
  sideDescription?: string;
};

export type CtaModule = {
  _key?: string;
  _type: "ctaModule";
  title?: string;
  description?: string;
  buttonLabel?: string;
  buttonHref?: string;
};

export type FooterModule = {
  _key?: string;
  _type: "footerModule";
  copyright?: string;
  tagline?: string;
};

export type HomeModule =
  | HeroModule
  | FeaturesModule
  | ContentModule
  | CtaModule
  | FooterModule;

export type HomePageData = {
  _id: string;
  title?: string;
  metaDescription?: string;
  modules?: HomeModule[];
};
