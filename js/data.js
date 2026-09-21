/* ===================================================================
   Data — sourced from the personal portfolio (260114_PORTFOLIO_yuex.pdf)
   and the GTV evidence document (GTV_Evidence_yuex.pdf).

   Shared by every page; load this before js/main.js.
   PROJECTS  -> work.html
   PHOTOS    -> photography.html
   RECOGNITION -> not rendered anywhere at the moment (kept for reference)
=================================================================== */

const PROJECTS = [
  {
    index: "01",
    slug: "row-saadiyat-mosque",
    title: "The Row Saadiyat Mosque",
    stage: "RIBA Stage 2–3",
    location: "Abu Dhabi, UAE",
    role: "Bjarke Ingels Group — project selection",
    type: "Culture building, Religious",
    description: "A 2,000‑worshipper mosque on the central spine of Saadiyat Lifestyle Residential, aligned toward the Zayed National Museum. Its lifted, spiralling roof reinterprets the Malwiya minaret tradition, opening a fully accessible roof garden above the prayer hall.",
    press: { label: "Featured — Designboom, Nov 2025", url: "https://www.designboom.com/architecture/bjarke-ingels-group-row-saadiyat-residential-district-abu-dhabi-uae-11-05-2025" },
    gallery: 7
  },
  {
    index: "02",
    slug: "red-lion-court",
    title: "Red Lion Court",
    stage: "RIBA Stage 3–4",
    location: "Bankside, London, UK",
    role: "Bjarke Ingels Group — project selection",
    type: "Office building",
    description: "A best‑in‑class, workspace‑led office development over nine floors on the Thames Pathway at Bankside. Yue led the ground floor and basement layout and interiors, and took responsibility for the full end‑of‑trip package — showers, changing rooms and cycle storage — through to product selection.",
    press: { label: "Featured — Architects' Journal, 2022", url: "https://www.architectsjournal.co.uk/news/big-submits-plans-for-10-storey-offices-next-to-former-ft-hq" },
    gallery: 11
  },
  {
    index: "03",
    slug: "canada-water-dock",
    title: "Canada Water Dock",
    stage: "RIBA Stage 2",
    location: "Canada Water, London, UK",
    role: "Bjarke Ingels Group — project selection",
    type: "Office building",
    description: "A mixed‑use office building fronting Canada Water station, part of a 53‑acre town‑centre masterplan. Yue developed the brick façade's module typologies and solar‑shading variations, ran solar analysis, and tested material finishes for the façade.",
    press: { label: "Featured — Architects' Journal, Mar 2022", url: "https://www.architectsjournal.co.uk/news/bigs-canada-water-masterplan-approved" },
    gallery: 6
  }
];

/* Removed from the Work page in favour of three BIG projects plus the
   Exhibition category. Kept so nothing is lost: move an entry back into
   PROJECTS (and renumber the `index` fields) to show it again. */
const ARCHIVED_PROJECTS = [
  {
    index: "04",
    slug: "shenzhen-dock-museum",
    title: "Shenzhen Dock Museum",
    stage: "RIBA Stage 1–2",
    location: "Shenzhen, China",
    role: "HHDesign — project selection",
    type: "Culture building",
    description: "A waterfront museum beside the national park, extending the landscape out into the sea. The faceted, perforated volumes are designed around artistic conception as much as programme — forward‑looking, flexible, and attentive to how light moves through the building.",
    gallery: 2
  },
  {
    index: "05",
    slug: "triple-theatre",
    title: "Triple Theatre",
    stage: "Student work, Spring 2019",
    location: "Changsha, China",
    role: "Hunan University — group work with Qingxin Yang, tutor Mingxing Song",
    type: "Theatre",
    description: "Three leaf‑shaped theatres and a museum, set on a former university playground against the mountains. A true‑column, cable‑net structure lets the inclined columns take the weight of floor and roof in balance. Yue built the model, produced renders and analytical diagrams.",
    gallery: 2
  },
  {
    index: "06",
    slug: "geek-city",
    title: "Geek City",
    stage: "Concept design competition",
    location: "Student work",
    role: "Hunan University",
    type: "Speculative urbanism",
    description: "A speculative vertical settlement for a future of remote, freelance 'geek' labour — docked pods and platforms replacing the fixed office, workflows staged from submission through to residency.",
    gallery: 1
  },
  {
    index: "07",
    slug: "interactive-matrix-disk-wall",
    title: "Interactive Matrix Disk Wall",
    stage: "Interactive work, Autumn 2019",
    location: "Hunan Museum of Art, Changsha",
    role: "Hunan University — group work with Boqing Zhou, tutor Biao Hu",
    type: "Arduino, coding, interactive design",
    description: "A 4‑metre kinetic wall of 322 motorised disks for a museum exhibition. A camera reads visitors within three metres and the wall mirrors their movement back, holding the pattern for a minute before resetting. Yue built the physical model and wrote part of the control software.",
    gallery: 1
  },
  {
    index: "08",
    slug: "computation-arcgis",
    title: "Computation Work, Based on ArcGIS",
    stage: "Student work",
    location: "The Bartlett, UCL",
    role: "ArcGIS, coding, graphic design",
    type: "Spatial analysis",
    description: "Mapping and remapping urban intensity — building density, function and age — through PCA and Seaborn analysis, choice and depth mapping, and simulated pedestrian flow across a dense inner‑city site.",
    gallery: 1
  }
];

/* Exhibition — second category on work.html.
   Facts taken from the GTV evidence sheets (Dezeen coverage of Oxagon,
   MIPIM 2026 Oman Pavilion for A'Thuraya City). */
const EXHIBITIONS = [
  {
    index: "01",
    file: "exhibition/neom-oxagon.jpg",
    alt: "NEOM Oxagon — aerial render of the octagonal floating port city on the Red Sea",
    title: "NEOM Oxagon",
    meta: ["Bjarke Ingels Group", "Oxagon, NEOM, Saudi Arabia", "Venice Biennale, 2023"],
    description: "Masterplanned by BIG as NEOM's industrial city, Oxagon sets what its developers call the world's largest floating structure against a Red Sea port, across a 48 km² site positioned near the Suez Canal. The project was shown in NEOM's “Zero Gravity Urbanism” exhibition at the 2023 Venice Biennale, and its port component is now operational and handling cargo.",
    press: { label: "Reported — Dezeen, Dec 2022", url: "https://www.dezeen.com/2022/12/21/oxagon-floating-port-city-neom-saudi-arabia" }
  },
  {
    index: "02",
    file: "exhibition/athuraya-city.jpg",
    alt: "A'Thuraya City — aerial render of the masterplanned city in Greater Muscat, Oman",
    title: "A’Thuraya City",
    meta: ["Bjarke Ingels Group", "Greater Muscat, Oman", "MIPIM 2026, Cannes"],
    description: "A 6.6 million m² masterplanned city in Greater Muscat, designed by BIG for Oman's government‑backed Future Cities Programme, with roughly 7,000 residential units for a projected 7,000 residents. It was selected as one of the key projects in the Oman Pavilion at MIPIM 2026 in Cannes, an edition Oman reported as drawing more than 8,000 participating investors and 5,000 pavilion visitors.",
    press: { label: "Exhibited — Oman Pavilion, MIPIM 2026", url: "https://oman.housing.gov.om/mipim2026" }
  }
];

/* Photography reel — the horizontal rail in the Photography section.
   Add a photo by dropping the file under assets/ and adding a line here;
   order in this array is the order along the rail. */
const PHOTOS = [
  { file: "photography/0.jpg",  caption: "Closed for the day",   alt: "Coloured kayaks chained up on a shingle beach beside a hand‑painted hire sign reading Closed" },
  { file: "photography/1.jpg",  caption: "Down to the cove",     alt: "View through a dark aperture down to a fishing cove with boats, lobster pots and corrugated roofs" },
  { file: "photography/2.jpg",  caption: "One building, one field", alt: "A lone building on the horizon above a wide green field in flat morning light" },
  { file: "photography/3.jpg",  caption: "Train window",         alt: "A passenger in headphones looking out of the window of a train corridor in warm light" },
  { file: "photography/4.jpg",  caption: "Table for one",        alt: "A woman sitting alone at an outdoor café table at night beside a painted telephone box" },
  { file: "photography/5.jpg",  caption: "Spider at the corner", alt: "A pale blue vintage Alfa Romeo Spider stopped at a pink‑painted corner café" },
  { file: "photography/6.jpg",  caption: "Fish & chips",         alt: "People queuing at an illuminated Fish and Chips van at night" },
  { file: "photography/7.jpg",  caption: "After hours",          alt: "Two people talking beside a yellow skip in a concrete service yard at night" },
  { file: "photography/8.jpg",  caption: "Curved balconies",     alt: "Stacked curved timber balcony fronts lit yellow at night" },
  { file: "photography/9.jpg",  caption: "Picture of a picture", alt: "A hand holding a phone showing a photograph of red brick mansion blocks behind bare branches" },
  { file: "photography/10.jpg", caption: "British Library",      alt: "The brick corner of the British Library at the junction of Euston Road and Midland Road" },
  { file: "photography/11.jpg", caption: "Parasols at dusk",     alt: "Closed parasols and a figure silhouetted against a caldera at sunset" },
  { file: "photography/12.jpg", caption: "Pink wall, studded gate", alt: "A pink‑walled street with a studded timber gate, a bicycle and a moped in afternoon sun" }
];

/* Kept for reference — the former "International recognition" section.
   No longer rendered; the Photography rail took its place. */
const RECOGNITION = [
  {
    slug: "chedi-wadi-safar",
    title: "The Chedi Residences Wadi Safar",
    org: "Reported by Identity &amp; Business Traveller — Bjarke Ingels Group with KCA International",
    description: "Chedi Hospitality's first branded‑residence development in Saudi Arabia: twenty ultra‑luxury villas set into the cliffs of Diriyah's Wadi Safar, part of the kingdom's Vision 2030 transformation of the district. Yue developed and tested the residential villa typologies and layouts, and contributed to the villas' early interior direction.",
    images: [
      { file: "gtv/chedi_hero.jpg", alt: "The Chedi Residences Wadi Safar — aerial view of villas at sunset" },
      { file: "gtv/chedi_courtyard.jpg", alt: "The Chedi Residences Wadi Safar — courtyard at dusk" },
      { file: "gtv/chedi_pool.jpg", alt: "The Chedi Residences Wadi Safar — pool terrace" }
    ],
    press: [
      { label: "Identity — \"The Chedi Wadi Safar\"", url: "https://identity.ae/the-chedi-wadi-safar" },
      { label: "Business Traveller, 2025", url: "https://www.businesstraveller.com/news/chedi-hospitality-debuts-branded-residences-in-saudi-arabias-wadi-safar" }
    ]
  },
  {
    slug: "formgiving",
    title: "\u201CFormgiving\u201D — book &amp; AIA keynote",
    org: "Masterplanet research project — Bjarke Ingels Group",
    description: "BIG's research and publication project on \u201Cformgiving\u201D — giving form to possible futures through architecture. Yue was a member of the Masterplanet research team, processing datasets into diagrams for the published book and helping produce the video Kai‑Uwe Bergmann presented as keynote at the 2022 AIA International Spring Conference.",
    quote: { text: "Formgiving — the Danish word for design — means to give form to that which has not yet been given form.", cite: "AIA International Spring Conference, May 2022" },
    images: [
      { file: "gtv/formgiving_stage.jpg", alt: "Kai-Uwe Bergmann presenting Formgiving at AIA International Spring Conference" },
      { file: "gtv/formgiving_earth.jpg", alt: "Formgiving video still — the earth from space" }
    ],
    press: [
      { label: "AIA International — keynote record, May 2022", url: "https://www.aiainternational.org/online-lectures-calendar/2022/5/19/guest-speaker-kai-uwe-bergmann-formgiving-giving-form-to-the-future" }
    ]
  },
  {
    slug: "athuraya-city",
    title: "A\u2019Thuraya City",
    org: "Future Cities programme, Oman — Bjarke Ingels Group",
    description: "A 6.6 million m\u00B2 future‑city masterplan in Greater Muscat for roughly 7,000 residents, part of Oman's national Future Cities programme. Yue contributed to the urban masterplan and residential unit typologies, and helped produce the presentation film, exhibition boards and physical model shown at each of the recognitions below.",
    quote: { text: "Yue contributed to the development of villa layouts, working on the spatial organisation and architectural arrangement of the residential units.", cite: "Boni Yuen, Associate, Bjarke Ingels Group" },
    images: [
      { file: "gtv/athuraya_hero.jpg", alt: "A'Thuraya City — aerial masterplan view" },
      { file: "gtv/athuraya_villa.jpg", alt: "A'Thuraya City — residential villa street render" },
      { file: "gtv/athuraya_omanconf.jpg", alt: "A'Thuraya City presented at the Oman Real Estate Conference" },
      { file: "gtv/athuraya_awards.jpg", alt: "A'Thuraya City — MIPIM Awards 2026 finalist feature" }
    ],
    press: [
      { label: "MIPIM 2026 — Oman Pavilion exhibition, Cannes", url: "https://oman.housing.gov.om/mipim2026" },
      { label: "2025 Oman Real Estate Conference &amp; Exhibition", url: "https://oerlive.com/economy/hh-sayyid-bilarab-bin-haitham-al-said-graces-the-opening-of-oman-design-build-week" },
      { label: "MIPIM Awards 2026 — \u201CBest New Mega Development\u201D finalist", url: "https://www.theplan.it/eng/whats_on/mipim-awards-2026-finalists-announced" }
    ]
  }
];
