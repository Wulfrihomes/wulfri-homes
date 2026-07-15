import { describe, expect, it } from "vitest";
import { isHiddenRoute, isPublicRoute } from "@/lib/publicRoutes";

describe("public route allowlist", () => {
  it("keeps only the approved public routes enabled", () => {
    expect(isPublicRoute("/")).toBe(true);
    expect(isPublicRoute("/about")).toBe(true);
    expect(isPublicRoute("/investment")).toBe(true);
    expect(isPublicRoute("/emirates-parks-gardens")).toBe(true);
    expect(isPublicRoute("/faqs")).toBe(true);
    expect(isPublicRoute("/contact")).toBe(true);

    expect(isPublicRoute("/projects")).toBe(false);
    expect(isPublicRoute("/land-estates")).toBe(false);
    expect(isPublicRoute("/blog")).toBe(false);
    expect(isPublicRoute("/housing")).toBe(false);
  });

  it("flags the hidden project and content routes", () => {
    expect(isHiddenRoute("/projects")).toBe(true);
    expect(isHiddenRoute("/project/some-slug")).toBe(true);
    expect(isHiddenRoute("/land-estates")).toBe(true);
    expect(isHiddenRoute("/lushville-estate")).toBe(true);
    expect(isHiddenRoute("/the-legacy")).toBe(true);
    expect(isHiddenRoute("/emirates-parks-gardens")).toBe(false);
  });
});
