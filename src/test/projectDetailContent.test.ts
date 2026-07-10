import { describe, expect, it } from "vitest";
import { projectDetailContent } from "../data/wulfri";

describe("project detail content", () => {
  it("includes why, video, and preview content for the requested estates", () => {
    const slugs = [
      "country-home-estate",
      "imperial-gardens",
      "wulfri-smart-city",
      "emerald-court",
      "royal-crest-estate",
      "wulfri-commercial-park",
    ];

    slugs.forEach((slug) => {
      const content = projectDetailContent[slug];

      expect(content).toBeDefined();
      expect(content?.highlights.length).toBeGreaterThan(0);
      expect(content?.galleryPreview.length).toBeGreaterThan(0);
    });
  });
});
