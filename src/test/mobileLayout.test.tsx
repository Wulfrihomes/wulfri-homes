import { fireEvent, render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { Header } from "@/components/Header";
import { FloatingContact } from "@/components/FloatingContact";
import Index from "@/pages/Index";

describe("mobile layout regression guards", () => {
  it("uses a scroll-safe hero layout for portrait mobile screens", () => {
    render(
      <MemoryRouter>
        <Index />
      </MemoryRouter>
    );

    const heading = screen.getByText(/Nigeria's Trusted Real Estate Partner/i);
    const hero = heading.closest("section");

    expect(hero).not.toBeNull();
    expect(hero?.className).toContain("min-h-[100svh]");
    expect(hero?.className).toContain("h-auto");
  });

  it("renders a full-height mobile drawer with scrollable content", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByLabelText("Menu"));

    const drawer = document.querySelector(".fixed.inset-x-0.top-20.bottom-0") as HTMLElement | null;
    expect(drawer).not.toBeNull();
    expect(drawer?.className).toContain("overflow-y-auto");
    expect(within(drawer as HTMLElement).getByText("Book Inspection")).toBeInTheDocument();
  });

  it("keeps WhatsApp above the mobile inspection bar", () => {
    render(
      <MemoryRouter>
        <FloatingContact />
      </MemoryRouter>
    );

    const whatsapp = document.querySelector('a[aria-label="Chat on WhatsApp"]') as HTMLElement | null;
    const stickyBar = screen.getByText(/Book Free Inspection/i).closest("div");

    expect(whatsapp).not.toBeNull();
    expect(whatsapp?.className).toContain("bottom-20");
    expect(stickyBar).not.toBeNull();
    expect(stickyBar?.className).toContain("fixed");
    expect(stickyBar?.className).toContain("z-30");
  });
});
