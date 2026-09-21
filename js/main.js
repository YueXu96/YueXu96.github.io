/* ===================================================================
   Behaviour, shared by every page.
   Loads after js/data.js. Each block renders only if its host element
   is on the current page, so one file serves all five pages.
=================================================================== */

/* ===================================================================
   Nav — scroll state + mobile toggle  (every page)
=================================================================== */
(function nav(){
  const navEl = document.getElementById("nav");
  if(!navEl) return;
  const navLinks = navEl.querySelector(".nav-links");
  const navToggle = document.getElementById("navToggle");

  function onScroll(){
    navEl.classList.toggle("is-scrolled", window.scrollY > 60);
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  if(navToggle){
    navToggle.addEventListener("click", () => navLinks.classList.toggle("is-open"));
    navLinks.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => navLinks.classList.remove("is-open"));
    });
  }
})();

/* ===================================================================
   Lightbox  (work.html + photography.html)
=================================================================== */
const Lightbox = (function(){
  const lb = document.getElementById("lightbox");
  if(!lb) return { open(){}, active: false };

  const lbImage = document.getElementById("lbImage");
  const lbTitle = document.getElementById("lbTitle");
  const lbCount = document.getElementById("lbCount");
  let gallery = [];
  let index = 0;
  let title = "";

  function update(){
    lbImage.src = gallery[index];
    lbImage.alt = title;
    lbTitle.textContent = title;
    lbCount.textContent = gallery.length > 1 ? `${index + 1} / ${gallery.length}` : "";
  }

  function open(list, i, label){
    gallery = list;
    index = i || 0;
    title = label || "";
    update();
    lb.classList.add("is-open");
    lb.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function close(){
    lb.classList.remove("is-open");
    lb.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  function step(dir){
    index = (index + dir + gallery.length) % gallery.length;
    update();
  }

  document.getElementById("lbClose").addEventListener("click", close);
  document.getElementById("lbPrev").addEventListener("click", () => step(-1));
  document.getElementById("lbNext").addEventListener("click", () => step(1));
  lb.addEventListener("click", (e) => { if(e.target === lb) close(); });

  document.addEventListener("keydown", (e) => {
    if(!lb.classList.contains("is-open")) return;
    if(e.key === "Escape") close();
    if(e.key === "ArrowRight") step(1);
    if(e.key === "ArrowLeft") step(-1);
  });

  return { open };
})();

/* ===================================================================
   Render — projects  (work.html)
=================================================================== */
(function projects(){
  const projectsEl = document.getElementById("projects");
  if(!projectsEl || typeof PROJECTS === "undefined") return;

  function projectGallery(slug, count){
    const arr = [];
    for(let i = 1; i <= count; i++) arr.push(`assets/portfolio/${slug}/g${i}.jpg`);
    return arr;
  }

  PROJECTS.forEach((p, i) => {
    const gallery = projectGallery(p.slug, p.gallery);
    const row = document.createElement("article");
    row.className = "project" + (i % 2 === 1 ? " project--reverse" : "");

    row.innerHTML = `
      <div class="project-media" data-gallery='${JSON.stringify(gallery)}' data-title="${p.title}">
        <img src="assets/portfolio/${p.slug}/hero.jpg" alt="${p.title} — ${p.location}" loading="lazy">
        ${gallery.length > 1 ? `<span class="count-tag">${gallery.length} images</span>` : ""}
        <span class="view-tag">View gallery ↗</span>
      </div>
      <div class="project-text">
        <p class="project-index">${p.index} / ${String(PROJECTS.length).padStart(2,"0")}</p>
        <h3 class="project-title">${p.title}</h3>
        <div class="project-meta">
          <span>${p.stage}</span>
          <span>${p.location}</span>
          <span>${p.type}</span>
        </div>
        <p class="project-desc">${p.description}</p>
        ${p.press ? `<p class="project-press">${p.press.label} — <a href="${p.press.url}" target="_blank" rel="noopener">read the coverage ↗</a></p>` : `<p class="project-press" style="opacity:.7">${p.role}</p>`}
      </div>
    `;
    projectsEl.appendChild(row);
  });

  projectsEl.addEventListener("click", (e) => {
    const media = e.target.closest(".project-media");
    if(!media) return;
    Lightbox.open(JSON.parse(media.dataset.gallery), 0, media.dataset.title);
  });
})();

/* ===================================================================
   Render — exhibition  (work.html)
=================================================================== */
(function exhibitions(){
  const el = document.getElementById("exhibitions");
  if(!el || typeof EXHIBITIONS === "undefined") return;

  EXHIBITIONS.forEach(x => {
    const item = document.createElement("article");
    item.className = "exhibit";
    item.innerHTML = `
      <div class="exhibit-media" data-image="assets/${x.file}" data-title="${x.title}">
        <img src="assets/${x.file}" alt="${x.alt}" loading="lazy">
        <span class="view-tag">View full image ↗</span>
      </div>
      <div class="exhibit-text">
        <div>
          <p class="project-index">${x.index} / ${String(EXHIBITIONS.length).padStart(2,"0")}</p>
          <h3 class="project-title">${x.title}</h3>
          <div class="project-meta">${x.meta.map(m => `<span>${m}</span>`).join("")}</div>
        </div>
        <div>
          <p class="project-desc">${x.description}</p>
          <p class="project-press">${x.press.label} — <a href="${x.press.url}" target="_blank" rel="noopener">see the source ↗</a></p>
        </div>
      </div>
    `;
    el.appendChild(item);
  });

  el.addEventListener("click", (e) => {
    const media = e.target.closest(".exhibit-media");
    if(!media) return;
    Lightbox.open([media.dataset.image], 0, media.dataset.title);
  });
})();

/* ===================================================================
   Render — photography rail  (photography.html)
=================================================================== */
(function photoRail(){
  const trackEl = document.getElementById("photoTrack");
  if(!trackEl || typeof PHOTOS === "undefined") return;

  const railPrev = document.getElementById("railPrev");
  const railNext = document.getElementById("railNext");
  const progressEl = document.getElementById("photoProgress");
  const gallery = PHOTOS.map(p => "assets/" + p.file);

  PHOTOS.forEach((p, i) => {
    const fig = document.createElement("figure");
    fig.className = "photo-frame";
    fig.dataset.index = i;
    fig.innerHTML = `
      <img src="assets/${p.file}" alt="${p.alt}" loading="${i < 3 ? "eager" : "lazy"}" draggable="false">
      <figcaption>
        <span class="photo-num">${String(i + 1).padStart(2, "0")}</span>
        <span>${p.caption}</span>
      </figcaption>
    `;
    // frames are sized by each photo's own aspect ratio, so the rail's
    // width is only final once the images have arrived
    fig.querySelector("img").addEventListener("load", updateRail);
    trackEl.appendChild(fig);
  });

  function railStep(){
    const frame = trackEl.querySelector(".photo-frame");
    const gap = parseFloat(getComputedStyle(trackEl).columnGap) || 0;
    return frame ? frame.getBoundingClientRect().width + gap : trackEl.clientWidth * 0.8;
  }

  function updateRail(){
    const max = trackEl.scrollWidth - trackEl.clientWidth;
    const ratio = max > 1 ? trackEl.scrollLeft / max : 1;
    progressEl.style.transform = `scaleX(${Math.max(0.04, ratio)})`;
    railPrev.disabled = trackEl.scrollLeft < 4;
    railNext.disabled = trackEl.scrollLeft > max - 4;
  }

  railPrev.addEventListener("click", () => trackEl.scrollBy({ left: -railStep(), behavior: "smooth" }));
  railNext.addEventListener("click", () => trackEl.scrollBy({ left: railStep(), behavior: "smooth" }));
  trackEl.addEventListener("scroll", updateRail, { passive: true });
  window.addEventListener("resize", updateRail);
  window.addEventListener("load", updateRail);

  trackEl.addEventListener("keydown", (e) => {
    if(e.key === "ArrowRight"){ e.preventDefault(); trackEl.scrollBy({ left: railStep(), behavior: "smooth" }); }
    if(e.key === "ArrowLeft"){ e.preventDefault(); trackEl.scrollBy({ left: -railStep(), behavior: "smooth" }); }
  });

  /* Pointer drag. A press that travels more than a few pixels is a drag,
     not a click, so it must not also open the lightbox. */
  let startX = 0, startLeft = 0, dragging = false, moved = 0;

  trackEl.addEventListener("pointerdown", (e) => {
    if(e.pointerType === "touch") return;   // native touch scrolling is better
    dragging = true; moved = 0;
    startX = e.clientX;
    startLeft = trackEl.scrollLeft;
    trackEl.classList.add("is-dragging");
    trackEl.setPointerCapture(e.pointerId);
  });

  trackEl.addEventListener("pointermove", (e) => {
    if(!dragging) return;
    const dx = e.clientX - startX;
    moved = Math.max(moved, Math.abs(dx));
    trackEl.scrollLeft = startLeft - dx;
  });

  function endDrag(){
    if(!dragging) return;
    dragging = false;
    trackEl.classList.remove("is-dragging");
  }
  trackEl.addEventListener("pointerup", endDrag);
  trackEl.addEventListener("pointercancel", endDrag);

  trackEl.addEventListener("click", (e) => {
    const frame = e.target.closest(".photo-frame");
    if(!frame || moved > 6) return;
    const i = parseInt(frame.dataset.index, 10);
    Lightbox.open(gallery, i, PHOTOS[i].caption);
  });

  updateRail();
})();
