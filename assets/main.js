// Sunflower sea star mark: a 20-armed star drawn into any .pycno-mark element.
(function drawMarks() {
  const arms = 20, cx = 50, cy = 50, rOuter = 48, rInner = 20, rDisc = 17;
  let d = "";
  for (let i = 0; i < arms; i++) {
    const a = (i / arms) * Math.PI * 2 - Math.PI / 2;
    const aL = a - Math.PI / arms * 0.55, aR = a + Math.PI / arms * 0.55;
    const tip = [cx + rOuter * Math.cos(a), cy + rOuter * Math.sin(a)];
    const l = [cx + rInner * Math.cos(aL), cy + rInner * Math.sin(aL)];
    const r = [cx + rInner * Math.cos(aR), cy + rInner * Math.sin(aR)];
    d += `M${l[0].toFixed(2)},${l[1].toFixed(2)} Q${(tip[0] + l[0]) / 2},${(tip[1] + l[1]) / 2} ${tip[0].toFixed(2)},${tip[1].toFixed(2)} Q${(tip[0] + r[0]) / 2},${(tip[1] + r[1]) / 2} ${r[0].toFixed(2)},${r[1].toFixed(2)} Z `;
  }
  document.querySelectorAll(".pycno-mark").forEach(el => {
    const fill = el.dataset.fill || "#6E4FA0";
    const disc = el.dataset.disc || "#9B7FC7";
    el.innerHTML = `<svg viewBox="0 0 100 100" width="100%" height="100%" aria-hidden="true">
      <path d="${d}" fill="${fill}"/><circle cx="${cx}" cy="${cy}" r="${rDisc}" fill="${disc}"/></svg>`;
  });
})();

// Mobile navigation
(function nav() {
  const btn = document.querySelector(".nav-toggle");
  const nav = document.getElementById("site-nav");
  if (!btn || !nav) return;
  btn.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    btn.setAttribute("aria-expanded", String(open));
  });
})();

// Images live in /images. Until you've copied your photos there,
// each <img> falls back to its original Wix-hosted copy (data-fallback).
document.querySelectorAll("img[data-fallback]").forEach(img => {
  const swap = () => {
    if (img.dataset.swapped) return;
    img.dataset.swapped = "1";
    img.src = img.dataset.fallback;
  };
  img.addEventListener("error", swap);
  if (img.complete && img.naturalWidth === 0) swap();
});
