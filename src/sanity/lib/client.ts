import { createClient } from "next-sanity";
import {
  hasSanityConfig,
  sanityApiVersion,
  sanityDataset,
  sanityProjectId
} from "@/sanity/env";

export const sanityClient = createClient({
  projectId: sanityProjectId || "demo-project",
  dataset: sanityDataset,
  apiVersion: sanityApiVersion,
  useCdn: true
});

export async function sanityFetch<QueryResponse>({
  query,
  params = {}
}: {
  query: string;
  params?: Record<string, unknown>;
}): Promise<QueryResponse | null> {
  if (!hasSanityConfig) {
    return null;
  }

  return sanityClient.fetch<QueryResponse>(query, params);
}
