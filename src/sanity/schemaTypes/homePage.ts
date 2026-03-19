import { defineArrayMember, defineField, defineType } from "sanity";

const imageField = defineField({
  name: "image",
  title: "Image",
  type: "image",
  options: { hotspot: true },
  fields: [
    defineField({
      name: "alt",
      title: "Alt text",
      type: "string",
      validation: (rule) => rule.required()
    })
  ]
});

export const heroModule = defineType({
  name: "heroModule",
  title: "Hero",
  type: "object",
  fields: [
    defineField({ name: "badge", title: "Badge", type: "string" }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required()
    }),
    defineField({ name: "description", title: "Description", type: "text" }),
    defineField({ name: "primaryButtonLabel", title: "Primary button label", type: "string" }),
    defineField({ name: "secondaryButtonLabel", title: "Secondary button label", type: "string" }),
    defineField({ name: "primaryButtonHref", title: "Primary button link", type: "string" }),
    defineField({ name: "secondaryButtonHref", title: "Secondary button link", type: "string" }),
    imageField
  ],
  preview: {
    select: { title: "title" },
    prepare({ title }) {
      return { title: title || "Hero module" };
    }
  }
});

export const featuresModule = defineType({
  name: "featuresModule",
  title: "Features",
  type: "object",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "description", title: "Description", type: "text" }),
    defineField({
      name: "cards",
      title: "Cards",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "featureCard",
          fields: [
            defineField({
              name: "title",
              title: "Title",
              type: "string",
              validation: (rule) => rule.required()
            }),
            defineField({ name: "description", title: "Description", type: "text" }),
            defineField({
              name: "iconName",
              title: "Lucide icon name",
              type: "string",
              description: "Пример: LayoutGrid, Gauge, Sparkles"
            })
          ]
        })
      ]
    })
  ],
  preview: {
    select: { title: "title" },
    prepare({ title }) {
      return { title: title || "Features module" };
    }
  }
});

export const contentModule = defineType({
  name: "contentModule",
  title: "Content",
  type: "object",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "description", title: "Description", type: "text" }),
    defineField({ name: "sideLabel", title: "Side label", type: "string" }),
    defineField({ name: "sideDescription", title: "Side description", type: "text" })
  ],
  preview: {
    select: { title: "title" },
    prepare({ title }) {
      return { title: title || "Content module" };
    }
  }
});

export const ctaModule = defineType({
  name: "ctaModule",
  title: "CTA",
  type: "object",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "description", title: "Description", type: "text" }),
    defineField({ name: "buttonLabel", title: "Button label", type: "string" }),
    defineField({ name: "buttonHref", title: "Button link", type: "string" })
  ],
  preview: {
    select: { title: "title" },
    prepare({ title }) {
      return { title: title || "CTA module" };
    }
  }
});

export const footerModule = defineType({
  name: "footerModule",
  title: "Footer",
  type: "object",
  fields: [
    defineField({ name: "copyright", title: "Copyright", type: "string" }),
    defineField({ name: "tagline", title: "Tagline", type: "string" })
  ],
  preview: {
    prepare() {
      return { title: "Footer module" };
    }
  }
});

const homePage = defineType({
  name: "homePage",
  title: "Home",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Page title", type: "string" }),
    defineField({
      name: "metaDescription",
      title: "Meta Description (SEO)",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required().max(160)
    }),
    defineField({
      name: "modules",
      title: "Modules",
      type: "array",
      of: [
        defineArrayMember({ type: "heroModule" }),
        defineArrayMember({ type: "featuresModule" }),
        defineArrayMember({ type: "contentModule" }),
        defineArrayMember({ type: "ctaModule" }),
        defineArrayMember({ type: "footerModule" })
      ]
    })
  ]
});

export default homePage;
