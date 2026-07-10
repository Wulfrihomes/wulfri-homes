import { describe, expect, it } from "vitest";
import { projectLandingConfigs } from "../data/wulfri";

describe("project landing configs", () => {
  it("includes a landing configuration for every requested estate", () => {
    const slugs = [
      "country-home-estate",
      "imperial-gardens",
      "wulfri-smart-city",
      "emerald-court",
      "royal-crest-estate",
      "wulfri-commercial-park",
    ];

    slugs.forEach((slug) => {
      const config = projectLandingConfigs[slug];

      expect(config).toBeDefined();
      expect(config?.route).toBeTruthy();
      expect(config?.gallery.length).toBeGreaterThan(0);
      expect(config?.usps.length).toBeGreaterThan(0);
    });
  });
});
