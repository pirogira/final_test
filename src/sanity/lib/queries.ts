import { groq } from "next-sanity";

export const homePageQuery = groq`
  *[_type == "homePage"][0]{
    _id,
    title,
    metaDescription,
    modules[]{
      ...,
      image{
        ...,
        asset->
      },
      imageMobile{
        ...,
        asset->
      },
      cards[]{
        ...,
        icon{
          ...,
          asset->
        }
      }
    }
  }
`;

export const homeMetaQuery = groq`
  *[_type == "homePage"][0]{
    title,
    metaDescription
  }
`;
