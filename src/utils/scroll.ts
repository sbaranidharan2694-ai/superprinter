/** Scroll offset: top bar (44px) + header (72px) */
export const SCROLL_OFFSET = 116;

export function scrollToSection(id: string) {
  if (id === "") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  const el = document.getElementById(id);
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET;
    window.scrollTo({ top, behavior: "smooth" });
  }
}
