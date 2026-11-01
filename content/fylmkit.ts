export const site = {
  name: "fylmkit",
  tagline: "AI video tool · Coming soon",
  description:
    "Fylmkit is an AI video tool for your brand, products, and marketing. Built for teams that need to post constantly and have no video crew — so every clip stays on brand.",
};

export const nav = [
  { label: "Version one", href: "/version-one" },
  { label: "How it works", href: "/how-it-works" },
  { label: "Features", href: "/features" },
  { label: "FAQ", href: "/#faq" },
] as const;

export const hero = {
  eyebrow: "AI video tool · Coming soon",
  headline: "Your brand. Your videos. Every time.",
  body: "Fylmkit is an AI video tool for your brand, products, and marketing. Set up your look and voice once, then give it something to say. It generates the script, scenes, voiceover, and captions — finished clips that already look like you.",
  primaryCta: { label: "Join waitlist", href: "#waitlist" },
  secondaryCta: { label: "See how it works", href: "/how-it-works" },
  image: "/scenes/hero-tool-prod.jpg",
};

export const facts = [
  { label: "Your brand", detail: "Colours, voice, and rules — once" },
  { label: "Your products", detail: "Photos, features, and offers" },
  { label: "Your marketing", detail: "Short form ready to post" },
  { label: "AI-powered pipeline", detail: "Script through final render" },
];

export type SceneSlug =
  | "hooks"
  | "statements-stats"
  | "product-shots"
  | "code-diagrams";

export type Scene = {
  slug: SceneSlug;
  title: string;
  detail: string;
  summary: string;
  image: string;
  href: string;
  body: string[];
  points: string[];
  howItFits: string[];
  examples: { title: string; body: string }[];
  bestFor: string[];
};

export const scenes: Scene[] = [
  {
    slug: "hooks",
    title: "Hooks",
    detail: "Openings built to hold attention",
    summary:
      "Generate two or three different openings for the same video so you can test which one holds attention.",
    image: "/scenes/hooks.jpg",
    href: "/version-one/hooks",
    body: [
      "The first second decides whether someone stays. Most tools treat the opening as the start of a script. Version one treats the hook as its own scene type — written and designed to earn the watch before the rest of the video begins.",
      "You can generate multiple openings for the same video. Same message underneath, different starts on top. That lets you test what holds attention without rebuilding the whole piece.",
      "Hooks are paced for silent scroll and sound-on. Text hierarchy, motion and timing are set so the first claim is readable on a phone, clear of platform buttons, and timed to the voiceover if there is one.",
    ],
    points: [
      "Dedicated hook scene type, not a bolted-on intro",
      "Two or three variants per video for testing",
      "Readable on silent scroll and with sound",
      "Placed clear of platform UI overlays",
    ],
    howItFits: [
      "You give Fylmkit notes or a brief. It writes openings against your brand voice and banned phrases.",
      "Each variant is a real scene in the plan — not a title card pasted on the first frame.",
      "You pick the hook that works, keep the rest of the video, and export.",
    ],
    examples: [
      {
        title: "Pattern interrupt",
        body: "A sharp claim or unexpected line that stops the scroll before the product appears.",
      },
      {
        title: "Outcome first",
        body: "Lead with the result the viewer wants, then earn the explanation in the next scenes.",
      },
      {
        title: "Question hook",
        body: "A short question in your voice that the rest of the video answers cleanly.",
      },
    ],
    bestFor: [
      "Reels, TikTok and Shorts where retention decides reach",
      "Teams who want to A/B openings without re-editing",
      "Brands that already know their offer and need the first line to land",
    ],
  },
  {
    slug: "statements-stats",
    title: "Statements & stats",
    detail: "Clear hierarchy for claims and numbers",
    summary:
      "Designed scenes for claims, numbers, comparisons and quotes — readable hierarchy instead of a wall of text.",
    image: "/scenes/statements.jpg",
    href: "/version-one/statements-stats",
    body: [
      "Statements, statistics, comparisons and quotes need space and order. On a phone, a wall of text fails. Version one lays these out so the claim lands, the number stays readable, and emphasis follows the narration instead of a decorative template.",
      "These scenes are designed for meaning. Scene length follows sentence boundaries from the voiceover. Cuts land when a thought finishes — the main reason generated video usually feels machine-made.",
      "Your product names and industry terms are known up front, so on-screen numbers and labels stay spelled correctly the first time.",
    ],
    points: [
      "Statement, statistic, comparison and quote scenes",
      "Hierarchy that works on small screens",
      "Emphasis timed to the narration",
      "Cuts on sentence boundaries, not arbitrary beats",
    ],
    howItFits: [
      "The script pass marks which lines are claims, numbers or quotes.",
      "The scene planner assigns the right layout — big number, comparison pair, quote block — and how long it holds.",
      "Quality checks catch text overflow, weak contrast and anything that breaks your brand rules before you see the file.",
    ],
    examples: [
      {
        title: "Single statistic",
        body: "One number, one short supporting line, held long enough to read aloud.",
      },
      {
        title: "Before / after comparison",
        body: "Two columns or states that make the change obvious without a paragraph of explanation.",
      },
      {
        title: "Pull quote",
        body: "A short line from the script, set as a quote when the voice needs a visual pause.",
      },
    ],
    bestFor: [
      "SaaS, education and coaching content that leans on proof",
      "Founders explaining results without turning the video into a slide deck",
      "Any niche where a number has to stay legible on a vertical frame",
    ],
  },
  {
    slug: "product-shots",
    title: "Product shots",
    detail: "Your photography, full bleed",
    summary:
      "Upload your product photos. Fylmkit places them. For clothing and ecommerce, your own photography beats anything generated.",
    image: "/scenes/product.jpg",
    href: "/version-one/product-shots",
    body: [
      "If you sell something physical, your photos are the brand. Version one uses them full bleed — slow movement, minimal text, nothing cluttered over the product. That is intentional. Clothing and ecommerce niches get pacing and layout that keep the item visible.",
      "Bring the shots you already have. Fylmkit places them into the scene plan instead of substituting generic stock or inventing a product that is not yours.",
      "Text that does appear stays sparse and clear of the subject. Captions sit where platform UI will not cover them. The product stays the point of the frame.",
    ],
    points: [
      "Built around your own photography",
      "Full-bleed product and lifestyle frames",
      "Pacing suited to clothing and ecommerce",
      "Minimal text that does not fight the product",
    ],
    howItFits: [
      "You upload product and lifestyle photos into the brand or project.",
      "The scene planner chooses when a product shot carries the line, and how long it holds.",
      "You can swap images, adjust timing, or replace a scene before export.",
    ],
    examples: [
      {
        title: "Hero product still",
        body: "One clean shot, full frame, with a short voice line and almost no on-screen copy.",
      },
      {
        title: "Detail crop",
        body: "Fabric, finish or feature close-ups timed to the sentence that names them.",
      },
      {
        title: "Lifestyle placement",
        body: "The product in use, with motion kept calm so the item stays readable.",
      },
    ],
    bestFor: [
      "Clothing and ecommerce brands with real photography",
      "Local businesses that already shoot their products or space",
      "Anyone who would rather show the thing than generate a fake one",
    ],
  },
  {
    slug: "code-diagrams",
    title: "Code & diagrams",
    detail: "Scene types for technical brands",
    summary:
      "Sharp cuts, code, diagrams, product screens — scene types for software and SaaS, not stock footage of a laptop.",
    image: "/scenes/code.jpg",
    href: "/version-one/code-diagrams",
    body: [
      "A clothing brand and a developer tool should not get the same video. For software and SaaS, version one uses code, diagrams, product screens and technical pacing — sharp cuts, dark-friendly layouts, room for structure.",
      "These are designed scenes for explaining products. Not a montage of someone pointing at a laptop. Screen recordings, diagrams and code blocks are first-class scene types in the plan.",
      "Niche presets keep technical brands from looking like lifestyle templates. Typography, motion and density follow the industry you pick, while your brand profile still drives colour, voice and banned phrases.",
    ],
    points: [
      "Code, diagram and screen-recording scenes",
      "Technical pacing and dark-friendly layouts",
      "Niche presets so brands do not look alike",
      "Room for product UI without stock clichés",
    ],
    howItFits: [
      "You point Fylmkit at your product, docs or notes. It writes in your technical voice.",
      "The planner assigns code, diagram or screen scenes where a sentence needs a visual explanation.",
      "You can swap a scene, tighten a diagram beat, or replace the voice before download.",
    ],
    examples: [
      {
        title: "Code beat",
        body: "A short snippet or command, held while the narration explains what it does.",
      },
      {
        title: "Flow diagram",
        body: "A simple structure of steps or systems — clear hierarchy, not a slide dump.",
      },
      {
        title: "Product screen",
        body: "Your UI or a screen recording timed to the feature being described.",
      },
    ],
    bestFor: [
      "Software and SaaS teams shipping changelogs and feature explainers",
      "Developer tools and technical educators",
      "Agencies producing separate technical brands beside lifestyle clients",
    ],
  },
];

export const versionOne = {
  pill: "Version one",
  title: "Short form for brand marketing",
  body: "Instagram Reels, TikTok, YouTube Shorts, LinkedIn and X. Videos up to about a minute for your brand, products, and campaigns. Designed scenes — not stock footage of someone pointing at a laptop.",
  summary:
    "Short-form marketing video for your brand and products. Brand profiles, script in your voice, product-ready scenes, captions, every aspect ratio — then you download and post.",
  href: "/version-one",
  image: "/scenes/hero-tool-prod.jpg",
  scenes,
  capabilities: [
    {
      title: "Brand profiles",
      body: "Set colours, fonts, logo, spacing and voice once. Every marketing video follows them. Run several brands side by side if you work with clients, each kept completely separate.",
    },
    {
      title: "Product and campaign input",
      body: "Give it a product, a few notes, a link, or a changelog entry. It turns that into a script and scenes that still sound like your brand.",
    },
    {
      title: "Script writing in your voice",
      body: "Narration follows your tone rules and banned phrases. Edit anything before it renders.",
    },
    {
      title: "Voiceover and captions",
      body: "Pick a generated voice or record your own. Captions time themselves to whichever you use, with the active word highlighted as it is spoken.",
    },
    {
      title: "Every aspect ratio",
      body: "Vertical, square and wide from one script, generated together rather than cropped from each other — ready for each marketing channel.",
    },
    {
      title: "Quality checks",
      body: "Layout, contrast, timing and brand compliance are verified automatically before you see the file.",
    },
  ],
  downloadNote:
    "Download and post. You get the files for your channels. Posting stays in your hands in version one.",
};

export function getScene(slug: string): Scene | undefined {
  return scenes.find((scene) => scene.slug === slug);
}

export const howItWorks = {
  pill: "How it works",
  title: "AI through the whole chain",
  body: "Most tools use AI once, to write a script. Fylmkit uses AI through setup, writing, scenes, timing, captions, and checks — so brand, product, and marketing stay consistent from start to export.",
  summary:
    "It learns your brand, turns product and campaign notes into scenes, cuts on meaning, and checks the work before you post. Built for marketing that has to stay on brand.",
  href: "/how-it-works",
  image: "/scenes/how.jpg",
  steps: [
    {
      title: "Reads your brand",
      subtitle: "Setup",
      body: "Give it your website or logo. It works out palette, typography, what you sell, who you sell to, and how you talk. That brand profile is what keeps marketing video looking like you.",
      points: [
        "Palette and type from your brand",
        "Tone and banned phrases",
        "Separate profiles per product line or client",
      ],
    },
    {
      title: "Learns your voice",
      subtitle: "Writing",
      body: "Your brand profile holds tone, reading level, phrases you use and words you never want. Product notes and campaign briefs get scripts written against those rules — not generic marketing copy.",
      points: [
        "Tone and reading level",
        "Preferred and banned phrases",
        "Edit before anything renders",
      ],
    },
    {
      title: "Plans visuals, not just words",
      subtitle: "Production",
      body: "A second pass turns the script into a scene plan — which sentence belongs on a product shot, a claim, or a hook, how long each runs, and where emphasis lands. That is the difference between a video and a slideshow.",
      points: [
        "Scene plan from the script",
        "Cuts on sentence boundaries",
        "Word-timed captions",
      ],
    },
    {
      title: "Checks its own work",
      subtitle: "Delivery",
      body: "Before you see anything, every marketing video is inspected for text off screen, unreadable contrast, broken timing, and brand-rule breaks. Failures go back and get fixed.",
      points: [
        "Layout and contrast checks",
        "Brand compliance pass",
        "You can override any step",
      ],
    },
  ],
};

export const features = {
  pill: "Features",
  title: "Built for brand marketing",
  body: "Short form only. The tool handles production so you can focus on the brand, the product, and the message. Nothing here promises long form, scheduling, or a live product.",
  summary:
    "Brand profiles, product-ready scenes, marketing captions, voiceover, every aspect ratio, quality checks and hook variants — for your own channels.",
  href: "/features",
  image: "/scenes/features.jpg",
  groups: [
    {
      title: "Brand and voice",
      items: [
        "Brand profiles with colours, fonts, logo, spacing and voice",
        "Multiple brands kept separate for agencies and client work",
        "Script writing against your tone rules and banned phrases",
      ],
    },
    {
      title: "Products and scenes",
      items: [
        "Scene types: hooks, statements, statistics, comparisons, quotes, diagrams, code, product shots, screen recordings",
        "Use your own product photography where it matters",
        "Hook variants so you can test marketing openings",
      ],
    },
    {
      title: "Marketing formats",
      items: [
        "Vertical, square and wide from one script",
        "Per-platform caption, hashtags and alt text on export",
        "Word-by-word captions timed to the voice",
      ],
    },
    {
      title: "Quality and control",
      items: [
        "Automatic layout, contrast, timing and brand checks",
        "Edit script, scenes, timing and voice before delivery",
        "Download the files — posting stays with you in version one",
      ],
    },
  ],
};

export const why = {
  pill: "Why it exists",
  title: "Posting is the hard part",
  body: "You know your brand, your products, and what you want to market. The hard part is everything after — writing it tight, recording, cutting, captioning, making it look like you, then doing it again tomorrow.",
  detail:
    "So most brands post twice a month, hire an editor they cannot really afford, or stop. Fylmkit removes the production work and leaves the thinking — the brand, product, and message only you can decide.",
  note: "Version two is long form for YouTube and similar. It is planned, not available. Waitlist members hear about it first.",
  notAnEditor:
    "The product is not an editor. There is no timeline to drag, no keyframes, no rendering queue to babysit. You describe, review and post.",
};

export const faq = {
  pill: "FAQ",
  title: "Questions people ask",
  items: [
    {
      q: "When does it launch?",
      a: "Short form first. Waitlist members get access before anyone else.",
    },
    {
      q: "Do I need video editing skills?",
      a: "No. If you can describe what you want to say, you can make a video.",
    },
    {
      q: "Will it look like every other AI-generated video?",
      a: "That is the thing it is built to avoid. Your brand rules drive every frame and the scenes are designed rather than assembled from stock footage. Two brands using Fylmkit will not produce videos that look alike.",
    },
    {
      q: "Can I edit what it makes?",
      a: "Yes. Change the script, swap a scene, adjust the timing, replace the voice.",
    },
    {
      q: "Can I use my own voice?",
      a: "Yes. Record a voice note and the captions time themselves to it.",
    },
    {
      q: "What about my product photos?",
      a: "Upload them and Fylmkit places them. For clothing and ecommerce, your own photography beats anything generated.",
    },
    {
      q: "Does it post for me?",
      a: "Not in the first release. You get the files and the captions. Scheduling comes later.",
    },
    {
      q: "What about long videos for YouTube?",
      a: "That is version two. Short form comes first and is done properly before anything longer ships.",
    },
    {
      q: "Can I use it for clients?",
      a: "Yes. Separate brand profiles are built for exactly that.",
    },
    {
      q: "Who owns the videos?",
      a: "You do.",
    },
  ],
};

export const waitlist = {
  pill: "Waitlist",
  title: "Get early access",
  body: "Fylmkit is coming soon — an AI video tool for your brand, products, and marketing. Join the waitlist for early access, founding member pricing, and a say in what gets built first.",
  emailLabel: "Email",
  industryLabel: "Industry (optional)",
  industryPlaceholder: "What do you want to market?",
  submit: "Join waitlist",
  success: "You are on the list. We will email you when your access is ready.",
  micro: "No spam. One email when it launches.",
  industries: [
    "Software / SaaS",
    "Clothing / ecommerce",
    "Food / hospitality",
    "Fitness / coaching",
    "Education",
    "Local services",
    "Agency",
    "Other",
  ],
};

export const audiences = [
  "Brand and product marketers",
  "Founders shipping their own story",
  "Ecommerce and product teams",
  "Agencies running client brands",
  "Teams with no video crew",
];
