export interface CaseStudy {
  id: string;                    // URL slug
  title: string;                 // "Lifestyle Gym"
  subtitle: string;              // "Where luxury meets discipline"
  industry: string;              // "Fitness & Wellness"
  location: string;              // "Brussels, Belgium"
  year: string;                  // "2025"
  duration: string;              // "10 weeks"
  color: string;                 // Hero background: "#12100E"
  image?: string;                // Hero image path (optional)
  disciplines: string[];         // ["Brand Identity", "Product Design", "Development"]
  challenge: {
    heading: string;
    paragraphs: string[];
    pullQuote: { text: string; attribution: string };
  };
  approach: Array<{
    discipline: string;
    phase: string;               // "PHASE 1 · WEEKS 1–3"
    title: string;
    body: string;
    tags: string[];
  }>;
  results: Array<{
    value: string;               // "+140%"
    label: string;               // "Premium Memberships"
    detail: string;              // "First 3 months"
    narrative: string;           // Full explanation paragraph
  }>;
  testimonial: {
    quote: string;
    name: string;
    role: string;
  };
  status: 'published' | 'coming-soon';
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'fitness-brand-launch',
    status: 'published',
    title: "Lifestyle Gym",
    subtitle: "Where luxury meets discipline.",
    industry: "Fitness & Wellness",
    location: "Brussels, Belgium",
    year: "2025",
    duration: "10 weeks",
    color: "#12100E",
    image: "/selectedwork/gym.jpg",
    disciplines: ["BRAND IDENTITY", "PRODUCT DESIGN", "DEVELOPMENT"],
    challenge: {
      heading: "A premium experience trapped inside a generic brand.",
      paragraphs: [
        "Lifestyle Gym wasn't your average gym. Personal coaching, premium facilities, tailored nutrition programs, a community of driven men who took their fitness seriously. The experience inside the building was worth every euro of the premium membership price.",
        "But outside the building, nobody could tell. The brand was a stock logo and a free WordPress template. The marketing materials looked like they belonged to a budget chain. The Instagram feed was phone photos with default filters. The digital presence was actively contradicting the physical experience.",
        "The owner was stuck in a painful loop: spending money on ads that drove traffic to a website that looked cheap, which made the premium pricing feel unjustified. High-value prospects would visit the site, see the disconnect, and book a trial at the polished competitor down the street instead."
      ],
      pullQuote: {
        text: "We were losing people before they ever walked through our doors. The website was our worst sales rep.",
        attribution: "Owner, Lifestyle Gym"
      }
    },
    approach: [
      {
        discipline: "Brand Identity",
        phase: "PHASE 1 · WEEKS 1–3",
        title: "Building a brand that matches the experience",
        body: "We started from positioning — defining exactly where Lifestyle Gym sits in the market and what makes it unmistakable. Then we built the visual system: a refined wordmark, a restrained color palette built around charcoal and warm metallics, typography that communicates precision, and brand guidelines that ensure every touchpoint feels consistent.",
        tags: ["Brand Strategy", "Visual Identity", "Brand Guidelines", "Collateral"]
      },
      {
        discipline: "Product Design",
        phase: "PHASE 2 · WEEKS 3–6",
        title: "A member portal that reinforces the premium at every tap",
        body: "The website became more than a brochure — it became the digital extension of the gym experience. We designed a member portal with workout tracking, coach messaging, progress dashboards, and a booking system for personal sessions. Every screen was designed to feel as considered as the gym's interior.",
        tags: ["UX Research", "Interface Design", "Prototyping", "Design System"]
      },
      {
        discipline: "Development",
        phase: "PHASE 3 · WEEKS 5–10",
        title: "Performance that matches a premium brand promise",
        body: "Built in Next.js with a headless CMS so the team can update schedules, coach profiles, and blog content without touching code. The site loads in under a second. The member portal runs as a progressive web app — installable on any phone, works offline for workout logging.",
        tags: ["Next.js", "React", "TypeScript", "CMS", "PWA"]
      }
    ],
    results: [
      {
        value: "+140%",
        label: "Premium Memberships",
        detail: "First 3 months",
        narrative: "Premium membership signups increased within the first 3 months. The same ad budget drove dramatically more qualified leads because the website finally converted trust into action."
      },
      {
        value: "3.2\u00d7",
        label: "Brand Recall",
        detail: "vs. previous identity",
        narrative: "Brand recall score tripled in a surveyed comparison with the previous identity. Members reported the brand now 'matches what we actually experience inside.'"
      },
      {
        value: "-35%",
        label: "Acquisition Cost",
        detail: "Same ad spend",
        narrative: "Client acquisition cost dropped because the conversion rate from website visit to trial booking improved from 2.3% to 6.1%. Better first impression, less money wasted."
      },
      {
        value: "0.8s",
        label: "Page Load Speed",
        detail: "Mobile performance",
        narrative: "Average page load speed across all devices. Lighthouse performance score: 97. The technical foundation matches the brand's promise of precision."
      },
      {
        value: "94%",
        label: "Member Retention",
        detail: "At 6 months",
        narrative: "Member retention rate at 6 months. The portal's workout tracking and coach messaging features created daily engagement that kept members invested."
      }
    ],
    testimonial: {
      quote: "Imaginta didn't redesign our gym — they redesigned how people FEEL about our gym before they ever walk in. The website, the brand, the member app — it all tells the same story now. We stopped justifying our prices. Clients just get it.",
      name: "Lifestyle Gym",
      role: "Brussels, Belgium"
    }
  },
  {
    id: 'aura-automotive',
    status: 'published',
    title: 'Aura Automotive',
    subtitle: 'Luxury car care, designed to feel like it.',
    industry: 'Automotive & Luxury Services',
    location: 'Brussels, Belgium',
    year: '2025',
    duration: '8 weeks',
    color: '#0C0A08',
    image: '/selectedwork/car.jpg',
    disciplines: ['Product Design', 'Brand Identity'],
    challenge: {
      heading: 'Master-level craftsmanship hidden behind a phone number and a Facebook page.',
      paragraphs: [
        "Aura Automotive wasn't a garage — it was a studio. Ceramic coatings applied in climate-controlled bays. Paint protection film cut with sub-millimetre precision. Mechanical repairs documented with before-and-after photography. Concierge pickup and delivery for clients who didn't have time to wait. The work was genuinely world-class.",
        "But the only way to book was a phone call. The only way to check on your car was to call again. The only proof of the work was a folder of photos on the owner's phone that never made it online. Aura was running a luxury operation with the digital infrastructure of a neighbourhood tyre shop.",
        "The owner knew something was wrong. Clients who spent \u20ac3,000 on a full detail expected a digital experience that matched. Instead they got a voicemail, a handwritten receipt, and radio silence until pickup day. The high-end car community in Brussels talks — and 'the work is amazing but the experience is stuck in 2005' was becoming the reputation.",
      ],
      pullQuote: {
        text: "My clients drive cars that cost more than my house. They expect every interaction — digital or physical — to feel like it belongs in that world.",
        attribution: "Founder, Aura Automotive",
      },
    },
    approach: [
      {
        discipline: 'Brand Identity',
        phase: 'PHASE 1 \u00b7 WEEKS 1\u20132',
        title: 'A visual language worthy of the craftsmanship',
        body: "Before touching any screens, we defined Aura's brand position: not a mechanic, not a detailer \u2014 a luxury automotive care studio. We built a restrained visual system around deep blacks, warm metallics, and clean typography that mirrors the precision of the work itself. The brand identity feels like opening the door of a well-engineered car \u2014 dark, warm, considered. Every touchpoint from the app icon to the invoice header carries the same quiet authority. We delivered a complete brand guideline system so every future designer or printer maintains the standard.",
        tags: ['Brand Strategy', 'Visual Identity', 'Brand Guidelines', 'Tone of Voice'],
      },
      {
        discipline: 'Product Design',
        phase: 'PHASE 2 \u00b7 WEEKS 2\u20136',
        title: 'Designing the service experience from booking to handover',
        body: "We mapped the entire client journey \u2014 from first discovering Aura to picking up the finished car \u2014 and designed a digital product for every moment that mattered. A booking system where clients select their car model and service tier, see transparent pricing, and choose a time slot or request concierge pickup. A real-time service tracker showing which stage their car is in (intake, preparation, coating, curing, quality check, ready). A client portal where they receive before-and-after photography, maintenance schedules, and warranty documentation. Every screen was prototyped in Figma at full fidelity, tested with 8 existing Aura clients, and refined based on their feedback before handoff.",
        tags: ['UX Research', 'User Journey Mapping', 'Interface Design', 'Prototyping', 'Usability Testing', 'Design System'],
      },
      {
        discipline: 'Product Design',
        phase: 'PHASE 3 \u00b7 WEEKS 6\u20138',
        title: 'The design system and developer handoff',
        body: "We packaged everything into a production-ready design system: a complete component library with 38 components across light and dark modes, design tokens for colour, typography, spacing and elevation, responsive specifications for every breakpoint, interaction specifications with easing curves and duration values, and annotated developer handoff documentation. The system was built so any competent React developer could implement it faithfully without needing a designer in the room for every decision. We also delivered a motion specification document covering every transition, loading state, and micro-interaction in the product.",
        tags: ['Design System', 'Component Library', 'Developer Handoff', 'Motion Design', 'Documentation'],
      },
    ],
    results: [
      {
        value: '62',
        label: 'Screens Designed',
        detail: 'Full-fidelity, every state covered',
        narrative: "62 screens across the booking flow, service tracker, client portal, and admin dashboard \u2014 each one designed at full fidelity with every state accounted for: empty states, loading states, error states, edge cases. Not wireframes. Not mockups. Production-ready designs that a developer can build from directly.",
      },
      {
        value: '38',
        label: 'Components Built',
        detail: 'Reusable design system',
        narrative: "A complete component library covering buttons, inputs, cards, modals, navigation, status indicators, service cards, vehicle selectors, and more \u2014 each with variants for light mode, dark mode, hover, focus, disabled, and loading states. Built in Figma with auto-layout and proper constraints so they scale correctly.",
      },
      {
        value: '4.7/5',
        label: 'Usability Score',
        detail: 'Tested with 8 real clients',
        narrative: "We tested the interactive prototype with 8 existing Aura clients \u2014 the people who would actually use the platform daily. Average usability score was 4.7 out of 5. The booking flow took an average of 47 seconds to complete. Zero users needed help finding the service tracker. The before-and-after gallery was the single most praised feature.",
      },
      {
        value: '100%',
        label: 'Handoff Coverage',
        detail: 'Ready for any developer',
        narrative: "Every screen annotated with exact spacing, typography, and colour values. Every interaction documented with easing curves and durations. Every component has a specification sheet. The developer who builds this \u2014 whether Imaginta or someone else \u2014 has everything they need to implement it faithfully.",
      },
    ],
    testimonial: {
      quote: "I came to Imaginta expecting a website. They gave me something I didn't know I needed \u2014 a complete digital experience that makes my clients feel the same thing they feel when they see their car after a full detail. That moment of 'this is exactly right.' The booking app, the tracker, the portal \u2014 it all feels like Aura now. Not like software. Like us.",
      name: 'Aura Automotive',
      role: 'Brussels, Belgium',
    }
  },
  {
    id: 'ellecanta-beauty',
    status: 'published',
    title: 'Ellecanta',
    subtitle: 'Where science meets skin.',
    industry: 'Beauty & Skincare',
    location: 'Brussels, Belgium',
    year: '2025',
    duration: '12 weeks',
    color: '#0E0A0C',
    image: '/selectedwork/skincare.jpg',
    disciplines: ['Brand Identity', 'Product Design', 'AI Integration'],
    challenge: {
      heading: 'A superior formula with no face, no voice, and no shelf presence.',
      paragraphs: [
        "Ellecanta's founders were scientists first and entrepreneurs second. They had spent three years developing a skincare line with genuinely exceptional formulations \u2014 clean-label, dermatologist-tested, small-batch produced in Belgium with traceable European ingredients. Blind tests consistently ranked their serums above products costing three times as much.",
        "But formulations don't sell themselves. Ellecanta had no brand identity, no packaging, no website, and no visual language. The products existed as white-label bottles with handwritten stickers in a shared lab space. The founders had tried to DIY the branding \u2014 a Canva logo, product photos shot on a kitchen counter, an Instagram page with 40 followers and inconsistent posting. In a market where perception IS the product, they were invisible.",
        "The European premium skincare market is brutally competitive. Shelf space \u2014 whether physical or algorithmic \u2014 goes to brands that look established, feel luxurious, and communicate trust in the first half-second of eye contact. Ellecanta had none of that. Without a complete brand transformation, the best formulations in Belgium were going to die in a lab.",
      ],
      pullQuote: {
        text: "We had the science. We had the ingredients. We had test results that made dermatologists raise their eyebrows. What we didn't have was a single reason for someone scrolling Instagram to stop and care.",
        attribution: "Co-Founder, Ellecanta",
      },
    },
    approach: [
      {
        discipline: 'Brand Identity',
        phase: 'PHASE 1 \u00b7 WEEKS 1\u20134',
        title: 'Building a beauty brand from molecule to emotion',
        body: "We started where every beauty brand must start \u2014 with positioning. Not 'we use clean ingredients' (everyone says that). The positioning we built for Ellecanta was specific: clinical precision meets sensorial warmth. Science you can feel. We translated this into a visual identity system: a refined wordmark with subtle apothecary references, a colour palette rooted in muted naturals with a signature blush-gold accent, typography that balances medical authority with editorial elegance, and a photographic direction that treats every product like a specimen and every texture like a landscape. The brand guidelines document runs 48 pages \u2014 covering everything from label typography rules to the exact lighting temperature for product photography.",
        tags: ['Brand Strategy', 'Positioning', 'Visual Identity', 'Photography Direction', 'Brand Guidelines'],
      },
      {
        discipline: 'Brand Identity',
        phase: 'PHASE 2 \u00b7 WEEKS 4\u20138',
        title: 'Packaging that wins the shelf in half a second',
        body: "In skincare, the packaging IS the brand. We designed a complete packaging system across 14 SKUs \u2014 serums, moisturisers, cleansers, masks, and a signature oil. Every jar, bottle, and tube follows a unified structural language: frosted glass with a weighted feel, minimal label real estate where the product name is the hero, a tactile debossed logo on every cap, and colour-coded bands that let customers navigate the range intuitively. We worked with a Belgian glass manufacturer to source containers that feel substantial in the hand \u2014 because premium skincare is a physical ritual, not just a chemical transaction. We delivered print-ready packaging files, dieline specifications, and a packaging style guide so future SKUs maintain the system.",
        tags: ['Packaging Design', 'Structural Design', 'Print Production', 'Material Sourcing', 'SKU System'],
      },
      {
        discipline: 'AI Integration',
        phase: 'PHASE 3 \u00b7 WEEKS 6\u201310',
        title: 'Visual content at the speed a beauty brand demands',
        body: "A beauty brand lives and dies by visual content \u2014 and Ellecanta needed hundreds of assets before launch: product shots, texture close-ups, lifestyle imagery, ingredient spotlights, social templates, and seasonal campaign visuals. Traditional photoshoots for this volume would cost five figures and take months. We built a custom AI-assisted content pipeline: carefully engineered prompts that generate on-brand product visualisations, texture studies, and atmospheric backgrounds \u2014 each one art-directed to match Ellecanta's photographic guidelines. A human creative director reviewed and refined every output. The result: a library of 200+ launch-ready visual assets produced in 4 weeks at a fraction of traditional cost, with a repeatable prompt system the team can use for ongoing content creation.",
        tags: ['AI Content Pipeline', 'Prompt Engineering', 'Art Direction', 'Visual Asset Library', 'Content Strategy'],
      },
      {
        discipline: 'Product Design',
        phase: 'PHASE 4 \u00b7 WEEKS 8\u201312',
        title: 'A digital home that converts desire into first purchase',
        body: "We designed the Ellecanta e-commerce experience as the digital extension of the unboxing moment \u2014 the same warmth, the same restraint, the same attention to texture. The site architecture is product-led: each product page is a micro-story with ingredient breakdowns, clinical test results, usage rituals, and texture photography that makes you want to reach through the screen. The checkout flow is designed for a first-time premium skincare buyer \u2014 reassuring at every step with trust signals, transparent shipping, and a returns policy that removes risk. We also designed a quiz flow ('Find Your Ritual') that recommends a personalised routine based on skin type, concerns, and lifestyle \u2014 converting browsers into buyers by making the range navigable.",
        tags: ['E-Commerce UX', 'Product Pages', 'Quiz Flow', 'Checkout Optimisation', 'Mobile-First'],
      },
    ],
    results: [
      {
        value: '+280%',
        label: 'Social Engagement',
        detail: 'Launch quarter vs. pre-brand',
        narrative: "In the quarter following the rebrand launch, Ellecanta's Instagram engagement rate jumped from 0.8% to 3.0%. The AI-generated visual content pipeline meant they could post daily with on-brand imagery without hiring a full-time photographer. Follower growth went from ~10/month to ~400/month organically \u2014 driven entirely by visual quality and consistent brand presence.",
      },
      {
        value: '94',
        label: 'Shelf Impact Score',
        detail: 'Consumer panel testing',
        narrative: "We commissioned a consumer panel test with 120 participants. Ellecanta's packaging scored 94 out of 100 on shelf impact \u2014 the measure of how quickly and positively a product is noticed in a retail environment. For context, the category average is 67. Participants consistently used words like 'clinical', 'premium', and 'trustworthy' to describe the packaging \u2014 exactly the brand attributes we designed for.",
      },
      {
        value: '200+',
        label: 'Visual Assets Created',
        detail: 'AI-assisted content pipeline',
        narrative: "Over 200 launch-ready visual assets \u2014 product shots, texture studies, lifestyle imagery, social templates, and campaign visuals \u2014 produced in 4 weeks using the AI content pipeline. A comparable traditional photoshoot would have taken 8\u201312 weeks and cost 4\u20135\u00d7 more. The prompt system we delivered means Ellecanta can generate new on-brand content internally for seasonal campaigns, new SKU launches, and daily social posting.",
      },
      {
        value: '14',
        label: 'SKUs Packaged',
        detail: 'Unified design system',
        narrative: "A complete packaging system covering 14 products across 5 categories \u2014 each one following the same structural language, the same label hierarchy, the same material palette. A customer can pick up any Ellecanta product and know instantly it belongs to the family. The packaging style guide ensures every future SKU maintains this coherence without needing Imaginta in the room.",
      },
      {
        value: '48',
        label: 'Page Brand Guide',
        detail: 'Complete brand documentation',
        narrative: "The brand guidelines document is 48 pages of precise specification: logo usage and clear space, colour palette with Pantone, CMYK, RGB, and HEX values, typography system with hierarchy rules, photography direction with lighting and composition standards, packaging application rules, social media templates, tone of voice with do's and don'ts, and a section on what the brand is NOT \u2014 because protecting the identity is as important as defining it.",
      },
    ],
    testimonial: {
      quote: "We walked into Imaginta with formulations and spreadsheets. We walked out with a brand that makes people pick up our products and not want to put them down. The packaging, the website, the Instagram \u2014 it all feels like one thing now. One beautiful, coherent thing. Our first retail buyer said the packaging alone closed the deal before she even tested the product.",
      name: 'Ellecanta',
      role: 'Brussels, Belgium',
    },
  },
  {
    id: 'artisan-pizza',
    status: 'published',
    title: 'Artisan Pizza',
    subtitle: 'Where 72-hour dough meets one-tap ordering.',
    industry: 'Hospitality & Food',
    location: 'Brussels, Belgium',
    year: '2025',
    duration: '11 weeks',
    color: '#0D0908',
    image: '/work/artisan-pizza.jpg',
    disciplines: ['Brand Identity', 'Product Design', 'Development'],
    challenge: {
      heading: 'The best pizza in Brussels, known only to the 40 people who could fit inside.',
      paragraphs: [
        "Marco had spent fifteen years perfecting his craft. Trained in Naples, obsessive about fermentation times, importing flour and tomatoes from the same Italian suppliers his mentor used. His 72-hour cold-fermented dough was genuinely exceptional \u2014 the kind of pizza that makes you close your eyes on the first bite. Regular customers would drive 30 minutes across Brussels for a table.",
        "But Marco's business model was stuck in a pre-digital era. No website \u2014 just a Google Maps pin with two blurry photos. No online ordering \u2014 you called the restaurant and hoped someone answered between oven rotations. No catering pipeline \u2014 even though corporate offices within walking distance had been asking for months. The restaurant ran at 40 covers per night, six nights a week, and every seat was filled by word of mouth alone. Marco was leaving money on the table he didn't have.",
        "The deeper problem was perception. Artisan Pizza's reputation was 'that incredible hidden gem' \u2014 romantic, but commercially limiting. The lack of digital presence wasn't just costing orders; it was capping the brand's perceived value. A \u20ac18 Neapolitan pizza made by a trained pizzaiolo with imported ingredients is luxury dining. But without a brand that communicates that story, it competes on price with the \u20ac9 takeaway chain down the street. Marco was undercharging and overworking because the market couldn't see what made him different.",
      ],
      pullQuote: {
        text: "Every night I'm fully booked by people who already know. But the thousands of people driving past my door have no idea what's inside. I'm the best-kept secret in Brussels, and that's not a compliment anymore \u2014 it's a ceiling.",
        attribution: "Marco, Founder & Pizzaiolo, Artisan Pizza",
      },
    },
    approach: [
      {
        discipline: 'Brand Identity',
        phase: 'PHASE 1 \u00b7 WEEKS 1\u20133',
        title: 'Honouring the tradition without looking traditional',
        body: "The brand challenge was precise: communicate Neapolitan heritage, artisan craft, and premium quality \u2014 without falling into the clich\u00e9 of red-checkered tablecloths, clip-art wheat sheaves, and cursive Italian fonts that plague every 'authentic' pizzeria. We positioned Artisan Pizza at the intersection of tradition and refinement. The visual identity pairs a hand-drawn custom wordmark \u2014 imperfect, warm, human \u2014 with a precise typographic system and a colour palette built from the oven itself: charcoal blacks, fired clay oranges, flour-dusted creams, and copper accents drawn from the restaurant's custom dome. The photography direction treats every pizza like a still life: overhead shots on raw stone, close-ups of blistered crust texture, the flour cloud of a dough stretch captured mid-air. The brand feels like a craft \u2014 not a commodity.",
        tags: ['Brand Strategy', 'Custom Wordmark', 'Photography Direction', 'Colour System', 'Brand Guidelines'],
      },
      {
        discipline: 'Product Design',
        phase: 'PHASE 2 \u00b7 WEEKS 3\u20137',
        title: 'Digital ordering that respects how people buy premium food',
        body: "We designed the complete digital commerce experience: online ordering for pickup and delivery, a catering platform for corporate events, and a table reservation system \u2014 all unified under one product. The ordering flow was designed around a key insight from user research: premium food buyers don't 'add to cart' like they're buying commodity takeaway. They browse, they read, they want to understand what makes this pizza worth \u20ac18 before they commit. Every menu item is a micro-story \u2014 the dough process, the ingredient origin, the pizzaiolo's note on why this combination works. The catering flow handles the complexity that corporate buyers need: headcount calculators, dietary filters, event date scheduling, and a dedicated brief form for custom menus. We prototyped both flows and tested with 10 users \u2014 6 regular customers and 4 people who'd never heard of the restaurant. The unfamiliar users spent an average of 3 minutes reading the menu before ordering. That's not friction \u2014 that's engagement.",
        tags: ['UX Research', 'User Journey Mapping', 'Ordering Flow', 'Catering Platform', 'Menu Design', 'Prototyping'],
      },
      {
        discipline: 'Development',
        phase: 'PHASE 3 \u00b7 WEEKS 6\u201311',
        title: 'A platform that runs as smoothly as a Friday night service',
        body: "We built the website and ordering platform in Next.js with a headless CMS so Marco's small team can update the menu, toggle item availability during service, manage catering inquiries, and publish stories about seasonal ingredients \u2014 without any technical knowledge. The ordering system integrates with the kitchen's existing workflow: orders appear on a dedicated tablet display organised by time slot, with real-time status updates that customers see on their confirmation page. Payment processing handles both individual orders and corporate invoicing. The site loads in 0.9 seconds, runs flawlessly on mobile (where 73% of food orders happen), and includes a progressive web app option so regulars can install it directly on their home screen. We also built a simple loyalty mechanic: every 8th order unlocks a complimentary dessert pizza \u2014 tracked automatically, no stamp cards required.",
        tags: ['Next.js', 'Headless CMS', 'Payment Integration', 'Kitchen Display', 'PWA', 'Loyalty System'],
      },
    ],
    results: [
      {
        value: '+220%',
        label: 'Monthly Revenue',
        detail: 'Within 4 months of launch',
        narrative: "Monthly revenue more than tripled. The combination of online ordering (capturing demand that previously bounced off the phone line), catering contracts (an entirely new revenue stream), and a 22% increase in average order value (customers spend more when they can browse a beautifully presented menu at their own pace) compounded into dramatic growth. Marco hired two additional kitchen staff and extended opening to seven nights.",
      },
      {
        value: '\u20ac4,200',
        label: 'Avg. Catering Contract',
        detail: 'Corporate events pipeline',
        narrative: "The catering platform opened a revenue stream that didn't exist. Within three months, Artisan Pizza had recurring monthly catering contracts with four corporate offices within a kilometre radius. The average contract value was \u20ac4,200 \u2014 more revenue per event than an entire Saturday night of dine-in service. The brief form and headcount calculator meant Marco received organised requests instead of chaotic phone calls.",
      },
      {
        value: '+22%',
        label: 'Avg. Order Value',
        detail: 'Online vs. phone orders',
        narrative: "Customers ordering online spent 22% more than phone callers. The product design explains why: each menu item's micro-story (ingredient origins, dough process, pairing suggestions) created desire for premium options and add-ons. Customers who read about the 72-hour fermentation process were significantly more likely to choose the \u20ac22 Speciale over the \u20ac14 Margherita. The menu wasn't a list \u2014 it was a selling tool.",
      },
      {
        value: '0.9s',
        label: 'Page Load',
        detail: 'Lighthouse score: 96',
        narrative: "The platform loads in 0.9 seconds on average \u2014 critical for a food ordering experience where 53% of users abandon after 3 seconds. Lighthouse performance score: 96. The mobile experience is fully optimised with thumb-zone ordering, persistent cart, and one-tap reordering for returning customers. The PWA install rate among weekly customers: 34%.",
      },
      {
        value: '73%',
        label: 'Mobile Orders',
        detail: 'Mobile-first validated',
        narrative: "Nearly three-quarters of all online orders come from mobile devices \u2014 confirming our mobile-first design decision. The ordering flow is optimised for one-handed use: menu scrolling, item customisation, and checkout all happen within thumb reach. Returning customers can reorder their last meal in two taps from the home screen PWA.",
      },
    ],
    testimonial: {
      quote: "For fifteen years I focused on the dough, the oven, the ingredients. Imaginta focused on everything around it \u2014 and suddenly the world could see what my regulars already knew. The catering business alone changed my life. Last month I had corporate clients booking Christmas events in June. My biggest problem now is whether to open a second location. That's a problem I never imagined having.",
      name: 'Marco',
      role: 'Founder & Pizzaiolo, Artisan Pizza',
    },
  },
  { id: 'saas-zero-to-beta', status: 'coming-soon' } as unknown as CaseStudy,
  { id: 'corporate-wellness-iraq', status: 'coming-soon' } as unknown as CaseStudy,
  { id: 'hotel-booking-conversion', status: 'coming-soon' } as unknown as CaseStudy,
  { id: 'ai-fitness-intelligence', status: 'coming-soon' } as unknown as CaseStudy,
  { id: 'agency-own-platform', status: 'coming-soon' } as unknown as CaseStudy,
];

export function getCaseStudy(slug: string) {
  return caseStudies.find(cs => cs.id === slug) ?? null;
}

export function getAdjacentStudies(slug: string) {
  const published = caseStudies.filter(cs => cs.status === 'published');
  const idx = published.findIndex(cs => cs.id === slug);
  return {
    prev: idx > 0 ? published[idx - 1] : null,
    next: idx < published.length - 1 ? published[idx + 1] : null,
  };
}
