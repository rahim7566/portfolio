import { useEffect, useState } from "react";

/**
 * Tracks the currently active section id based on scroll position using
 * IntersectionObserver for accuracy near sticky headers and short sections.
 * @param ids Array of element ids to observe in order from top to bottom
 * @param offset Additional offset in pixels to account for sticky headers
 */
export default function useScrollSpy(ids: string[], offset = 100) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!elements.length) return;

    // Prefer IntersectionObserver for robust detection
    const visible = new Map<string, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = (entry.target as HTMLElement).id;
          if (entry.isIntersecting) {
            visible.set(id, entry.intersectionRatio);
          } else {
            visible.delete(id);
          }
        });

        if (visible.size) {
          const topMost = [...visible.entries()].sort((a, b) => b[1] - a[1])[0][0];
          setActiveId(topMost);
        } else {
          // Fallback: last section above the offset line
          const scrollPos = window.scrollY + offset + 1;
          let current = "";
          for (const el of elements) {
            if (el.offsetTop <= scrollPos) current = el.id;
          }
          setActiveId(current || "");
        }
      },
      {
        root: null,
        // top offset for sticky header, extra bottom margin helps short sections
        rootMargin: `-${offset}px 0px -40% 0px`,
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    elements.forEach((el) => observer.observe(el));

    const onResize = () => {
      // Recompute on resize/layout shifts
      // Trigger entries update by unobserve/observe
      elements.forEach((el) => {
        observer.unobserve(el);
        observer.observe(el);
      });
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      observer.disconnect();
    };
  }, [ids.join(","), offset]);

  return activeId;
}
