import {
  ArrowRight,
  Archive,
  CalendarClock,
  CheckCircle2,
  FileText,
  Heart,
  Lock,
  Mic,
  PenLine,
  ShieldCheck,
  Volume2,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Navigation from '@/components/Navigation';

const heirloomTypes = [
  {
    title: 'Legacy Letters',
    description: 'Shape a lifetime of wisdom into a letter that can be held, heard, and returned to when it matters.',
    icon: FileText,
  },
  {
    title: 'Family Memories',
    description: 'Preserve the small domestic details, rituals, and stories that make a family feel like itself.',
    icon: Heart,
  },
  {
    title: 'Future Self',
    description: 'Send perspective, courage, and reminders to a version of yourself still becoming.',
    icon: CalendarClock,
  },
];

const promiseCards = [
  {
    eyebrow: '01 / Interview',
    title: 'Begin with one memory',
    description: 'A gentle guided interview helps you find the words without forcing the moment.',
    icon: PenLine,
  },
  {
    eyebrow: '02 / Voice',
    title: 'Preserve the sound of care',
    description: 'Optional voice setup lets messages carry tone, warmth, and presence beyond the page.',
    icon: Mic,
  },
  {
    eyebrow: '03 / Archive',
    title: 'Seal it for the right day',
    description: 'Save, schedule, and return to private heirlooms for birthdays, milestones, and future thresholds.',
    icon: Archive,
  },
];

const trustPoints = [
  'Privacy-first local storage direction',
  'Clear consent moments for voice features',
  'Accessible writing and review flows',
  'Designed for quiet focus, not dark patterns',
];

const Index = () => {
  return (
    <div className="min-h-screen overflow-hidden bg-[#f7f1e8] text-[#201b16]">
      <Navigation />

      <main>
        <section className="relative min-h-screen px-6 pt-32 pb-24 md:pt-40">
          <div className="archive-grain" aria-hidden="true" />
          <div className="absolute inset-x-6 top-24 h-px bg-[#201b16]/15 md:inset-x-12" aria-hidden="true" />
          <div className="absolute inset-y-32 left-6 hidden w-px bg-[#201b16]/10 md:block" aria-hidden="true" />
          <div className="absolute inset-y-32 right-6 hidden w-px bg-[#201b16]/10 md:block" aria-hidden="true" />

          <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div className="relative z-10">
              <p className="mb-8 inline-flex items-center gap-3 border border-[#201b16]/15 bg-white/30 px-4 py-2 text-xs uppercase tracking-[0.32em] text-[#6f6256] backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-[#9d6b3f]" />
                Private archive / voice / time capsule
              </p>

              <h1 className="max-w-5xl font-serif text-[clamp(3.7rem,9vw,9.5rem)] font-light leading-[0.88] tracking-[-0.075em] text-[#1b1713]">
                The words they’ll return to.
              </h1>

              <p className="mt-10 max-w-2xl text-xl font-light leading-8 text-[#5d5148] md:text-2xl md:leading-10">
                Living Heirloom is a quiet place to preserve your voice, stories, and future messages — crafted with privacy, emotional care, and time in mind.
              </p>

              <div className="mt-12 flex flex-col gap-4 sm:flex-row">
                <Button size="lg" className="btn-archive group" onClick={() => window.location.href = '/create'}>
                  Begin with one memory
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button size="lg" variant="outline" className="btn-archive-secondary" onClick={() => window.location.href = '/capsules'}>
                  View the archive
                </Button>
              </div>
            </div>

            <div className="relative z-10 lg:pb-8">
              <div className="archive-artifact mx-auto max-w-xl">
                <div className="flex items-center justify-between border-b border-[#201b16]/10 pb-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-[#8a7664]">Heirloom index</p>
                    <p className="mt-2 font-serif text-3xl text-[#2a211a]">LH-2046</p>
                  </div>
                  <div className="rounded-full border border-[#201b16]/15 p-4">
                    <Lock className="h-6 w-6 text-[#8a5d36]" />
                  </div>
                </div>

                <div className="py-10">
                  <p className="font-serif text-4xl leading-tight text-[#2a211a]">
                    “If there is ever a day you need my voice, start here.”
                  </p>
                  <div className="mt-8 h-20 overflow-hidden rounded-full border border-[#201b16]/10 bg-[#efe4d6] p-5">
                    <div className="voice-line" aria-hidden="true" />
                  </div>
                </div>

                <div className="grid gap-3 border-t border-[#201b16]/10 pt-6 text-sm text-[#6a5a4e] sm:grid-cols-3">
                  <span>Voice preserved</span>
                  <span>Private draft</span>
                  <span>Unlocks later</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-24 md:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <p className="section-kicker">Why it matters</p>
              <h2 className="mt-4 font-serif text-5xl font-light leading-tight tracking-[-0.04em] md:text-7xl">
                Voices fade. Stories scatter. The right words are rarely easy.
              </h2>
            </div>

            <div className="mt-16 grid gap-6 md:grid-cols-3">
              {[
                'The ordinary details often become the memories people miss most.',
                'Writing something meaningful can feel too heavy to begin alone.',
                'A future birthday, anniversary, or hard day deserves more than a forgotten note.',
              ].map((text, index) => (
                <Card key={text} className="archive-note">
                  <span className="text-xs uppercase tracking-[0.28em] text-[#9d6b3f]">0{index + 1}</span>
                  <p className="mt-8 text-xl font-light leading-8 text-[#4a4038]">{text}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="features" className="px-6 py-24 md:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div className="lg:sticky lg:top-28">
                <p className="section-kicker">Product promise</p>
                <h2 className="mt-4 font-serif text-5xl font-light leading-tight tracking-[-0.04em] md:text-6xl">
                  A guided way to preserve what should not disappear.
                </h2>
              </div>

              <div className="grid gap-5">
                {promiseCards.map((card) => {
                  const Icon = card.icon;
                  return (
                    <Card key={card.title} className="archive-panel group">
                      <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
                        <div>
                          <p className="text-xs uppercase tracking-[0.28em] text-[#9d6b3f]">{card.eyebrow}</p>
                          <h3 className="mt-4 font-serif text-4xl font-light tracking-[-0.03em] text-[#2a211a]">{card.title}</h3>
                          <p className="mt-4 max-w-2xl text-lg font-light leading-8 text-[#62564c]">{card.description}</p>
                        </div>
                        <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border border-[#201b16]/15 bg-[#efe4d6] transition-transform duration-500 group-hover:scale-105">
                          <Icon className="h-8 w-8 text-[#8a5d36]" />
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#211b16] px-6 py-24 text-[#f7f1e8] md:py-32">
          <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <p className="section-kicker text-[#c39b70]">Privacy by design</p>
              <h2 className="mt-4 font-serif text-5xl font-light leading-tight tracking-[-0.04em] md:text-7xl">
                A legacy product has to earn trust before it earns attention.
              </h2>
              <p className="mt-8 max-w-2xl text-xl font-light leading-9 text-[#d9cbbd]">
                The redesigned experience should make privacy, consent, and control visible at every important moment — especially when someone records a voice or saves a message for later.
              </p>
            </div>

            <Card className="border-[#f7f1e8]/15 bg-[#2c241d] p-8 shadow-none md:p-10">
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-[#c39b70]/15">
                <ShieldCheck className="h-8 w-8 text-[#d6ad7f]" />
              </div>
              <div className="space-y-5">
                {trustPoints.map((point) => (
                  <div key={point} className="flex gap-4 border-b border-[#f7f1e8]/10 pb-5 last:border-b-0 last:pb-0">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#d6ad7f]" />
                    <p className="text-lg font-light leading-7 text-[#eadfD3]">{point}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </section>

        <section id="how-it-works" className="px-6 py-24 md:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <div className="max-w-3xl">
                <p className="section-kicker">Voice and time</p>
                <h2 className="mt-4 font-serif text-5xl font-light leading-tight tracking-[-0.04em] md:text-7xl">
                  Built for messages that wait.
                </h2>
              </div>
              <p className="max-w-md text-lg font-light leading-8 text-[#62564c]">
                The experience should feel ceremonial at the key moments: recording, writing, sealing, scheduling, and returning.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {heirloomTypes.map((type) => {
                const Icon = type.icon;
                return (
                  <Card key={type.title} className="archive-type-card">
                    <Icon className="h-8 w-8 text-[#8a5d36]" />
                    <h3 className="mt-10 font-serif text-4xl font-light tracking-[-0.03em] text-[#2a211a]">{type.title}</h3>
                    <p className="mt-5 text-lg font-light leading-8 text-[#62564c]">{type.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-6 pb-24 md:pb-32">
          <div className="mx-auto max-w-5xl border-y border-[#201b16]/15 py-20 text-center">
            <Volume2 className="mx-auto h-10 w-10 text-[#8a5d36]" />
            <h2 className="mt-8 font-serif text-5xl font-light leading-tight tracking-[-0.04em] md:text-7xl">
              Start with one memory. Let the archive grow from there.
            </h2>
            <p className="mx-auto mt-8 max-w-2xl text-xl font-light leading-9 text-[#62564c]">
              The next implementation phase should turn this visual direction into a full app-wide design system.
            </p>
            <Button size="lg" className="btn-archive mt-10 group" onClick={() => window.location.href = '/create'}>
              Create your first heirloom
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
