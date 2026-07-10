# Living Heirloom Premium Website Revamp Roadmap

> Status: final planning roadmap for a premium, editorial, cinematic, privacy-first experience built with 2D motion, refined typography, disciplined layout, SVG/canvas details where appropriate, and careful product-flow design.

## 1. Executive Summary

Living Heirloom is currently a React/Vite privacy-first web application for preserving family voices, stories, wisdom, and time-locked messages. The existing product already has a strong emotional premise and useful app structure, but its current visual language is closer to a polished prototype than a bespoke high-end digital experience.

The revamp should transform the site into a custom, editorial, award-caliber experience. The final product should feel like a private digital archive: refined, trustworthy, intimate, technically credible, and emotionally memorable.

### Primary transformation goals

- Replace generic gradient/glass landing-page aesthetics with a distinctive archival visual identity.
- Build a route-wide design system so the homepage, interview flow, generation page, library, and 404 feel like one cohesive product.
- Improve information architecture around privacy, voice consent, security, examples, and product clarity.
- Add high-end 2D motion and interaction design without harming accessibility, performance, readability, or conversion.
- Preserve the current local-first/product architecture where valuable while refactoring large pages into maintainable components.

### Main risks to avoid

- Looking like a template or generic AI SaaS landing page.
- Overusing glow, blur, glassmorphism, or animation.
- Making emotional product flows feel theatrical or slow.
- Loading heavy AI, voice, or animation code on public marketing routes unnecessarily.
- Weak privacy/consent explanations.
- Accessibility regressions in forms, menus, route transitions, and motion.

## 2. Current Codebase Audit

### Framework and tooling

- React 18 + TypeScript + Vite.
- React Router powers client-side routes.
- Tailwind CSS and CSS custom properties provide the current styling foundation.
- Radix/shadcn-style UI primitives are present for accessible controls.
- Zustand, Dexie/IndexedDB, WebLLM, Workbox/PWA, and ElevenLabs-related code support the privacy-first product direction.
- Vercel deployment is configured with SPA rewrites and cross-origin isolation headers.

### Current routes

- `/` — marketing homepage.
- `/create` — guided interview and voice setup flow.
- `/generate` — AI message generation/customization page.
- `/capsules` — capsule library.
- `*` — not found page.

### Current strengths to preserve

- Simple route model.
- Lazy loading of non-home routes.
- Existing accessibility effort in navigation and interview flow.
- Tailwind/CSS-token foundation.
- PWA and local-first technical direction.
- Manual chunking intent for heavy dependencies.

### Current weaknesses to address

- Homepage is one large component with hardcoded content and section markup.
- Current design language leans heavily on generic gradients, glass cards, rounded icons, floating blobs, and glow effects.
- Static metadata in `index.html` is insufficient for expanded public routes.
- Lovable social metadata should be replaced with branded assets.
- Public trust pages are missing.
- Buttons often navigate with `window.location.href` instead of router links/navigation.
- App initialization may gate the marketing homepage unnecessarily and should be investigated.
- Product pages are visually functional but not yet part of a premium cinematic system.

## 3. Recommended Creative Direction: The Private Archive

### Concept

A quiet, editorial digital archive for voices, letters, family memories, and future messages.

### Design personality

- Bespoke, not templated.
- Editorial, not corporate-generic.
- Cinematic in pacing, not video-heavy.
- Minimal where clarity matters; expressive where memorability matters.
- Premium through typography, spacing, rhythm, materiality, and restraint.
- Technical through precision and trust, not visual noise.

### Visual language

- Warm archival surfaces.
- Deep ink typography.
- Fine lines, document frames, and marginalia.
- Subtle paper grain/noise.
- Voice waveform motifs.
- Time stamps and archive labels.
- Refined 2D artifact cards.
- Sparse, intentional accent color.

### Motion language

- Gentle line reveals.
- Editorial section wipes.
- Text reveals by line, not excessive split-text.
- Subtle scroll choreography for one or two narrative moments.
- Interface microinteractions that feel tactile but calm.
- No constant background motion.

## 4. Information Architecture Plan

### Recommended public routes

- `/` — premium homepage and primary conversion entry.
- `/how-it-works` — deeper product explanation.
- `/privacy` — local-first privacy, data ownership, and browser storage explanation.
- `/security` — encryption, storage, cross-origin isolation, and technical trust.
- `/voice-preservation` — voice setup, consent, ethics, multilingual voice, and limitations.
- `/examples` — sample heirloom types and message examples.
- `/faq` — practical objections and product questions.

### Recommended product routes

- `/create` — guided creation flow.
- `/generate` — message drafting and delivery setup.
- `/capsules` — private archive/library.
- `/capsules/:id` — future capsule detail view.
- `/settings` — future data, privacy, export, voice, and storage controls.

### Homepage structure

1. **Hero: A Private Archive for the Words and Voices You Never Want to Lose**
   - Purpose: establish emotional and product positioning immediately.
   - Visual: large editorial type, archival linework, subtle waveform mark.
   - Motion: short line reveal and SVG rule draw.

2. **The Emotional Problem**
   - Purpose: explain why memories, voices, and unsaid words need preservation.
   - Visual: editorial text panels/marginal notes.
   - Motion: restrained reveal.

3. **The Product Promise**
   - Purpose: guided interview, AI-assisted writing, voice preservation, and time-locked delivery.
   - Visual: artifact-style cards, not generic feature cards.

4. **Privacy by Design**
   - Purpose: establish trust as a conversion mechanism.
   - Visual: local-first/privacy diagram with simple SVG line animation.

5. **Voice Preservation**
   - Purpose: explain recording, consent, tone, and multilingual voice.
   - Visual: waveform and transcript motif.

6. **Time-Locked Delivery**
   - Purpose: show future birthdays, anniversaries, milestones, and locked capsules.
   - Visual: editorial timeline.
   - Motion: optional single pinned 2D timeline on desktop only.

7. **Heirloom Types**
   - Purpose: help users choose a starting point.
   - Visual: archive cards for legacy letters, family memories, future self, and voice messages.

8. **Examples and Proof**
   - Purpose: make the product tangible and trustworthy.
   - Visual: document excerpts, real testimonials if available, privacy proof.

9. **How It Works**
   - Purpose: reduce uncertainty before conversion.
   - Visual: concise process with proof points.

10. **Final CTA**
   - Purpose: invite action gently.
   - Copy direction: “Begin with one memory.”

## 5. Design System Plan

### Token categories

- `color.surface.*`
- `color.ink.*`
- `color.archive.*`
- `color.voice.*`
- `color.trust.*`
- `color.state.*`
- `space.*`
- `type.*`
- `radius.*`
- `shadow.*`
- `motion.duration.*`
- `motion.easing.*`
- `z.*`

### Color direction

- Warm ivory / paper.
- Deep graphite / ink.
- Muted archival gray.
- Aged brass or restrained gold accent.
- Soft trust blue.
- Sage success and warm red error states.

### Typography

- Open-source-safe display serif options: Fraunces, Cormorant Garamond, Libre Baskerville.
- Open-source-safe body options: Inter, Source Sans 3, IBM Plex Sans.
- Optional mono/meta face: IBM Plex Mono or Geist Mono.
- Use fluid `clamp()` scaling for display and section headlines.
- Avoid excessive gradient text.
- Use line-based text reveals sparingly.

### Layout

- 12-column desktop grid.
- 8-column tablet grid.
- 4-column mobile grid.
- Editorial content widths for reading.
- Large section spacing with controlled rhythm.
- Mobile-first stacking that preserves the narrative.

### Components

- Site header.
- Site footer.
- Section.
- Container.
- Editorial heading.
- Body copy.
- Primary/secondary/text CTAs.
- Artifact card.
- Proof card.
- Status pill.
- Archive label.
- Form field wrappers.
- Motion reveal wrappers.
- SEO metadata helpers.

## 6. Motion and Interaction Plan

### Recommended tools

- CSS transitions for simple interactions.
- IntersectionObserver or lightweight reveal utility for simple scroll reveals.
- GSAP only for advanced scroll choreography, SVG drawing, and one or two pinned editorial sequences.
- Motion for React only for route transitions, product-flow state transitions, and layout transitions if needed.
- SVG effects before canvas effects.
- Canvas only for isolated premium 2D details if static/SVG is insufficient.

### Motion hierarchy

1. Page transitions.
2. Navigation interactions.
3. Hero entrance.
4. Section reveals.
5. One optional pinned storytelling sequence.
6. Text/image reveals.
7. CTA interactions.
8. Product-flow transitions.
9. Loading, error, and empty states.
10. Reduced-motion fallbacks.

### Core motion patterns

- **Archive Line Reveal:** SVG rules draw in hero/section dividers.
- **Hero Line Stagger:** headline appears by line.
- **Editorial Wipe:** rare section transition using clip-path.
- **Artifact Card Lift:** hover/focus transform and shadow.
- **Time-Lock Timeline:** optional desktop-only pinned scroll section.
- **Voice Waveform Reveal:** SVG waveform animates as a decorative signal.
- **Document Reveal:** generated message appears as a paper-like panel.
- **Save/Seal Confirmation:** message save state gets a short ceremonial transition.

### Motion constraints

- No scroll-jacking.
- No constant ambient movement.
- No long text animations that make reading harder.
- Prefer transform and opacity.
- Avoid layout-thrashing properties.
- Disable or simplify motion for reduced-motion and mobile.

## 7. Premium 2D Visual Effects Plan

Recommended premium 2D effects:

- SVG masks for image/artifact reveals.
- Clip-path section wipes used sparingly.
- Static mesh-like gradients for warmth, not generic decoration.
- Paper grain/noise overlay.
- Thin animated borders.
- Voice waveform SVGs.
- Text mask reveals for short headings.
- Layered 2D parallax in hero only.
- Soft spotlight interactions for privacy diagrams on desktop.
- Magnetic buttons only for primary desktop CTAs.

Effects to avoid or heavily limit:

- Constant particles.
- Heavy blur/filter animation.
- Large canvas scenes.
- Marquees unless there is real proof/logo content.
- Hover-only content.

## 8. Page-by-Page Revamp Plan

### `/`

- Convert from generic landing page to editorial product story.
- Split into modular sections.
- Move hardcoded content into typed content modules.
- Add route metadata and branded OG content.
- Keep homepage lightweight and avoid loading app-heavy AI/voice code.

### `/create`

- Convert into a private interview studio.
- Keep focus on one prompt at a time.
- Make progress visible but quiet.
- Preserve validation and accessibility.
- Reduce or replace typewriter effects if they interfere with screen readers or writing flow.
- Add consent/privacy reassurance around voice setup.

### `/generate`

- Convert into a refined drafting room.
- Prioritize readability of generated message.
- Treat versions as editorial alternatives.
- Make delivery controls clear and accessible.
- Add save/schedule confirmation states.

### `/capsules`

- Convert into a personal archive.
- Improve search/filter semantics.
- Make card actions keyboard-accessible, not hover-only.
- Add future support for `/capsules/:id`.
- Make locked/scheduled/delivered states feel meaningful and readable.

### `*`

- Convert to a branded missing-archive moment.
- Keep recovery actions clear.
- Add noindex metadata if supported.

## 9. Component Architecture Plan

### Proposed structure

```text
src/
  app/
    AppProviders.tsx
    routes.tsx
  components/
    layout/
      SiteHeader.tsx
      SiteFooter.tsx
      PageShell.tsx
      Section.tsx
      Container.tsx
    primitives/
      Button.tsx
      Link.tsx
      Card.tsx
      Typography.tsx
      StatusPill.tsx
    motion/
      Reveal.tsx
      Stagger.tsx
      PageTransition.tsx
      ReducedMotionProvider.tsx
    seo/
      Meta.tsx
      StructuredData.tsx
    sections/
      home/
        HomeHero.tsx
        EmotionalProblem.tsx
        ProductPromise.tsx
        PrivacyProof.tsx
        VoicePreservation.tsx
        TimeLockTimeline.tsx
        HeirloomTypes.tsx
        FinalCTA.tsx
    product/
      interview/
      generation/
      archive/
    ui/
      existing shared UI primitives
  content/
    home.ts
    navigation.ts
    faq.ts
    privacy.ts
  lib/
    seo.ts
    motion.ts
    utils.ts
  pages/
```

### Refactor priorities

1. Design tokens and primitives.
2. Homepage content extraction.
3. Homepage section split.
4. Header/footer refactor.
5. Static homepage redesign.
6. Product page componentization.
7. Motion system.
8. SEO/accessibility/performance hardening.

## 10. Technical Stack Recommendations

### Keep

- React + Vite.
- React Router.
- Tailwind CSS.
- CSS custom properties.
- Radix/shadcn primitives.
- Zustand/Dexie/local-first architecture.
- Vite PWA after registration audit.
- Vercel deployment and cross-origin isolation headers.

### Add only when justified

- GSAP for advanced scroll/SVG choreography.
- Motion for React for component and route transitions.
- Bundle analyzer for performance review.
- Route metadata helper.
- Sitemap generation/static sitemap.

### Avoid for now

- Global smooth scrolling unless accessibility is proven.
- Heavy canvas effects.
- Extra carousel/slider dependencies.
- CMS before content workflow is confirmed.

## 11. Performance Budget

### Goals

- LCP under 2.5s, target under 2.0s on good mobile.
- CLS under 0.05.
- INP under 200ms, target under 150ms.
- Homepage should not load AI/voice-heavy chunks.
- Animation should not create scroll jank.

### Rules

- Route-level lazy loading stays.
- Animation libraries must be dynamically imported or route scoped where possible.
- Use responsive AVIF/WebP images.
- Define width/height for media.
- Self-host or optimize fonts.
- Limit font weights.
- No heavy animated filters.
- No large fixed backgrounds that repaint continuously.
- No unnecessary client-only effects on content sections.

## 12. Accessibility Plan

- Semantic landmarks: header, nav, main, section, footer.
- One H1 per page.
- Keyboard-accessible header and mobile menu.
- Visible focus states.
- Skip link.
- Accessible forms and error states.
- Preserve interview aria-live/error patterns carefully.
- No hover-only actions.
- Reduced-motion support for all CSS/JS animation.
- AA contrast minimum.
- Touch targets at least 44px.
- Screen reader spot checks before launch.

## 13. SEO and Content Plan

### Immediate SEO needs

- Replace static-only metadata with route-aware metadata.
- Replace Lovable OG/Twitter assets with branded assets.
- Add canonical URLs.
- Add sitemap.
- Add structured data where appropriate.
- Add public trust/content pages.

### Content gaps

- What exactly happens to voice recordings?
- What stays local and what may call external APIs?
- How does time-locked delivery work?
- What happens if browser storage is cleared?
- How do users export/delete data?
- What is the consent model for voice cloning?
- Are testimonials real?
- Are examples fictional or user-submitted?

## 14. Visual Asset Plan

Needed assets:

- Refined logo/wordmark.
- Branded favicon/PWA icons.
- Branded OG image.
- Custom SVG archive marks.
- Voice waveform motif.
- Privacy/security diagrams.
- Paper/noise texture.
- Example document/card visuals.
- Optional carefully art-directed photography or abstract memory imagery.

Asset rules:

- Avoid cliché stock family images.
- Use optimized AVIF/WebP for raster images.
- Use SVG for linework.
- Keep textures small.
- Use mobile-specific crops where needed.

## 15. Responsive and Mobile Plan

- Mobile experience must be intentionally designed, not a stacked desktop site.
- Header should use accessible full-screen/sheet navigation.
- Hero should prioritize headline, trust line, and CTA.
- Disable pinned sections and pointer effects on mobile.
- Use shorter sections and stronger copy hierarchy.
- Keep product forms comfortable with mobile keyboards.
- Test small phones, modern phones, tablets, and desktop.

## 16. Implementation Roadmap

### Phase 0: Alignment and approvals

- Approve this Private Archive direction.
- Confirm primary conversion goal.
- Confirm route expansion.
- Confirm privacy/voice claims.
- Confirm typography and asset budget.

### Phase 1: Design system foundation

- Define tokens.
- Create layout primitives.
- Create typography primitives.
- Create CTA/card/link primitives.
- Preserve existing behavior.

### Phase 2: IA and content restructuring

- Move homepage copy to typed content modules.
- Define navigation content.
- Add metadata model.
- Prepare public route expansion.

### Phase 3: Core layout refactor

- Split homepage into section components.
- Refactor header/footer.
- Replace full page navigation with router links/navigation.
- Add skip link and shell.

### Phase 4: Homepage redesign

- Implement new Private Archive homepage.
- Add editorial sections.
- Add privacy proof.
- Add voice/time-lock storytelling.
- Add final CTA.

### Phase 5: Public trust pages

- Add privacy, security, how-it-works, voice-preservation, examples, and FAQ routes as approved.

### Phase 6: Product-flow redesign

- Redesign `/create` as private interview studio.
- Redesign `/generate` as drafting room.
- Redesign `/capsules` as archive.
- Redesign 404.

### Phase 7: Motion and polish

- Add reduced-motion-aware reveal system.
- Add hero motion.
- Add optional pinned 2D timeline.
- Add SVG line/waveform details.
- Add refined loading/empty/error states.

### Phase 8: QA hardening

- Typecheck.
- Lint.
- Build.
- Accessibility audit.
- Performance audit.
- SEO audit.
- Cross-browser QA.

### Phase 9: Launch

- Verify Vercel headers and SPA rewrites.
- Verify PWA behavior.
- Verify metadata and assets.
- Verify rollback plan.

## 17. Future Jules Task Breakdown

1. **Design tokens and primitives**
   - Touch: `src/index.css`, `tailwind.config.ts`, new primitives.
   - Risk: medium.
   - After approval.

2. **Homepage content extraction**
   - Touch: `src/pages/Index.tsx`, `src/content/home.ts`.
   - Risk: low.
   - After approval.

3. **Homepage section split**
   - Touch: `src/pages/Index.tsx`, `src/components/sections/home/*`.
   - Risk: medium.
   - After approval.

4. **Header/footer and navigation refactor**
   - Touch: navigation/layout components.
   - Risk: medium.
   - After IA approval.

5. **Static Private Archive homepage redesign**
   - Touch: home sections, CSS, assets.
   - Risk: high.
   - After design approval.

6. **Public privacy/security/how-it-works pages**
   - Touch: route config, new pages, content files.
   - Risk: medium.
   - After copy approval.

7. **SEO metadata system**
   - Touch: `index.html`, SEO helpers, public assets.
   - Risk: medium.
   - After route plan.

8. **Motion foundation**
   - Touch: motion utilities and selected sections.
   - Risk: medium-high.
   - After static design.

9. **Interview flow redesign**
   - Touch: `/create` page and product/interview components.
   - Risk: high.
   - After homepage design stabilizes.

10. **Generation page redesign**
    - Touch: `/generate` page and product/generation components.
    - Risk: high.
    - After interview flow.

11. **Capsule archive redesign**
    - Touch: `/capsules` page and archive components.
    - Risk: medium-high.
    - After design system.

12. **Final QA and launch hardening**
    - Touch: multiple files.
    - Risk: medium.
    - Final phase.

## 18. QA and Launch Checklist

### Design QA

- Visual language is distinctive and non-template.
- Typography feels premium and readable.
- Spacing and rhythm are consistent.
- CTA hierarchy is clear.
- Product flows match homepage quality.

### Motion QA

- Motion supports comprehension.
- Reduced motion works.
- No scroll-jacking.
- No animation blocks reading or input.
- Mobile motion is simplified.

### Accessibility QA

- Keyboard-only navigation.
- Skip link.
- Focus states.
- Accessible mobile menu.
- Form labels/errors.
- Color contrast.
- Screen reader spot checks.

### SEO QA

- Route titles/descriptions.
- Branded OG/Twitter metadata.
- Canonicals.
- Sitemap.
- Structured data.
- Heading hierarchy.
- Internal links.

### Performance QA

- Build passes.
- Bundle reviewed.
- Homepage avoids AI/voice-heavy chunks.
- Images optimized.
- Fonts optimized.
- Lighthouse mobile/desktop reviewed.

### Deployment QA

- Vercel rewrites work.
- COOP/COEP headers preserved.
- PWA registration audited.
- Cache strategy verified.
- Rollback plan documented.

## 19. Open Questions

- What is the primary conversion: start interview, record voice, join waitlist, or save capsule?
- What exactly stays local versus calls external APIs?
- Is ElevenLabs production use confirmed?
- Is time-locked delivery browser-only or backend-assisted?
- Are public examples/testimonials available and approved?
- Is there a paid font/asset budget?
- Are Figma or Paper.design references available?
- Should privacy/security pages be legal-reviewed before launch?
- Is analytics allowed given the privacy-first positioning?

## 20. Final Recommendation

Proceed with the **Private Archive** direction first. Build the strongest possible 2D editorial, cinematic, accessible, and performance-aware experience before expanding the scope. The safest sequence is:

1. Approve direction and IA.
2. Build design-system foundation.
3. Refactor homepage structure.
4. Redesign homepage statically.
5. Add trust pages and SEO.
6. Redesign product flows.
7. Add motion and polish.
8. Run final QA.

The core brand, layout, content, and product experience should be made excellent before adding any additional visual scope.
