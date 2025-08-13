import { useEffect, useState } from "react";

/**
 * Tracks the currently active section id based on scroll position.
 * @param ids Array of element ids to observe in order from top to bottom
 * @param offset Additional offset in pixels to account for sticky headers
 */
export default function useScrollSpy(ids: string[], offset = 100) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    let ticking = false;

    const computeActive = () => {
      const scrollPos = window.scrollY + offset + 1;
      let current = "";
      for (const el of elements) {
        if (el.offsetTop <= scrollPos) current = el.id;
      }
      setActiveId(current || "");
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(computeActive);
        ticking = true;
      }
    };

    computeActive();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", computeActive);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", computeActive);
    };
  }, [ids.join(","), offset]);

  return activeId;
}
