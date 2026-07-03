import ShaderBackground from '@/components/ShaderBackground'

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#121416] text-[#e2e2e5]">
      <ShaderBackground />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-24 md:px-16">
        <section className="mb-12 rounded-[32px] border-0 bg-transparent pt-0 pb-10 px-10 text-center shadow-none">
          <p className="text-sm uppercase tracking-[0.35em] text-[#ff7eb9]">About MM Printing</p>
          <h1 className="mt-4 text-5xl font-black tracking-[-0.04em] text-white sm:text-6xl">
            Premium Printing & Copy for Lahore’s local brands.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[#d5d5d9] sm:text-lg">
            A complete suite of print, copy, branding, and packaging services designed to help businesses and creators deliver work that feels premium, polished, and on-time across Lahore.
          </p>
        </section>

        <section className="mt-14 grid gap-8 sm:grid-cols-2">
          <div className="glass-panel aspect-square rounded-[32px] border border-white/10 bg-[#121418]/95 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.35)] flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#ff7eb9]/30 bg-[#ff7eb9]/10 px-4 py-2 text-xs uppercase tracking-[0.25em] text-[#ff7eb9]">
                Team spirit
              </div>
              <h2 className="mt-4 text-3xl font-semibold text-white">A small team with big print energy.</h2>
              <p className="mt-4 text-base leading-7 text-[#d5d5d9]">
                Every order is handled as a package of care: from creative checks to production scheduling, we keep communication clear and delivery on time.
              </p>
            </div>
            <div className="mt-6 grid gap-4">
              <div className="rounded-[24px] border border-white/10 bg-[#171b20]/95 p-5">
                <p className="text-sm uppercase tracking-[0.3em] text-[#ffb597]">Creative review</p>
                <p className="mt-2 text-sm leading-6 text-[#c7c3d2]">We help make artwork print-ready and colour-accurate with a quick, friendly check.</p>
              </div>
              <div className="rounded-[24px] border border-white/10 bg-[#171b20]/95 p-5">
                <p className="text-sm uppercase tracking-[0.3em] text-[#ffb597]">Material selection</p>
                <p className="mt-2 text-sm leading-6 text-[#c7c3d2]">We recommend the best stock, lamination, and finish for your campaign goals.</p>
              </div>
            </div>
          </div>

          <div className="glass-panel aspect-square rounded-[32px] border border-white/10 bg-[#0f1215]/95 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.35)] flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#ff7eb9]/30 bg-[#ff7eb9]/10 px-4 py-2 text-xs uppercase tracking-[0.25em] text-[#ff7eb9]">
                Our Values
              </div>
              <h2 className="mt-6 text-3xl font-semibold text-white">Built on strong print standards</h2>
              <ul className="mt-6 space-y-4 text-[#d5d5d9]">
                <li className="flex gap-3"><span className="mt-1 text-[#ff7eb9]">•</span> Honest pricing with no surprises.</li>
                <li className="flex gap-3"><span className="mt-1 text-[#ff7eb9]">•</span> Fast local delivery for urgent campaigns.</li>
                <li className="flex gap-3"><span className="mt-1 text-[#ff7eb9]">•</span> Creative support for every print format.</li>
              </ul>
            </div>
            <div className="space-y-5">
              <div className="rounded-[24px] border border-[#ff7eb9]/20 bg-[#131519]/95 p-5">
                <p className="text-sm uppercase tracking-[0.35em] text-[#ffb597]">Since 2021</p>
                <p className="mt-2 text-sm leading-6 text-[#d5d5d9]">Trusted local printing since 2021. From documents to full-color marketing materials, we have served students, offices, and organizations with dependable print and photocopy services across the city.</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[24px] border border-[#ff7eb9]/20 bg-[#131519]/95 p-5">
                  <p className="text-sm uppercase tracking-[0.35em] text-[#ffb597]">Our promise</p>
                  <p className="mt-2 text-sm leading-6 text-[#d5d5d9]">Quality, turnaround, and reliable follow-through.</p>
                </div>
                <div className="rounded-[24px] border border-[#ff7eb9]/20 bg-[#131519]/95 p-5">
                  <p className="text-sm uppercase tracking-[0.35em] text-[#ffb597]">What we love</p>
                  <p className="mt-2 text-sm leading-6 text-[#d5d5d9]">Bold colors, crisp edges, and print that feels premium.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-panel aspect-square rounded-[32px] border border-white/10 bg-[#121418]/95 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.35)] flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#ff7eb9]/30 bg-[#ff7eb9]/10 px-4 py-2 text-xs uppercase tracking-[0.25em] text-[#ff7eb9]">
                Beyond print
              </div>
              <h2 className="mt-4 text-3xl font-semibold text-white">We think in texture, color, and experience.</h2>
              <p className="mt-4 text-base leading-7 text-[#d5d5d9]">
                Our ideal project is one that gives people a tactile moment — a brochure they keep, a display that stops traffic, or labels that feel premium in hand.
              </p>
            </div>
            <div className="mt-6 grid gap-4">
              <div className="rounded-[24px] border border-white/10 bg-[#171b20]/95 p-5">
                <p className="text-sm uppercase tracking-[0.3em] text-[#ffb597]">Print intelligence</p>
                <p className="mt-2 text-sm leading-6 text-[#c7c3d2]">We match print methods to budgets and timelines so every job feels smart.</p>
              </div>
              <div className="rounded-[24px] border border-white/10 bg-[#171b20]/95 p-5">
                <p className="text-sm uppercase tracking-[0.3em] text-[#ffb597]">Design support</p>
                <p className="mt-2 text-sm leading-6 text-[#c7c3d2]">Ask us for layout tweaks, bleed guidance, or material recommendations before you send it to print.</p>
              </div>
            </div>
          </div>

          <div className="glass-panel aspect-square rounded-[32px] border border-white/10 bg-[#0f1215]/95 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.35)] flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#ff7eb9]/30 bg-[#ff7eb9]/10 px-4 py-2 text-xs uppercase tracking-[0.25em] text-[#ff7eb9]">
                File Support
              </div>
              <h2 className="mt-6 text-3xl font-semibold text-white">Send files with confidence</h2>
              <p className="mt-4 text-base leading-7 text-[#d5d5d9]">
                You can send any file format — PDF, Word, or Excel — for printing and photocopying at affordable rates citywide.
              </p>
            </div>
            <div className="space-y-4">
              <div className="rounded-[24px] border border-[#ff7eb9]/20 bg-[#131519]/95 p-5">
                <p className="text-sm uppercase tracking-[0.35em] text-[#ff7eb9]">Premium quality</p>
                <p className="mt-2 text-sm leading-6 text-[#d5d5d9]">Every service is delivered with premium quality and doorstep convenience.</p>
              </div>
              <div className="rounded-[24px] border border-[#ff7eb9]/20 bg-[#131519]/95 p-5">
                <p className="text-sm uppercase tracking-[0.35em] text-[#ff7eb9]">Trusted delivery</p>
                <p className="mt-2 text-sm leading-6 text-[#d5d5d9]">We work with educational institutes and organizations to fulfill requests exactly.</p>
              </div>
            </div>
            <div className="mt-6 rounded-[24px] border border-[#ffb597]/20 bg-[#131519]/95 p-5 text-[#d5d5d9]">
              <p className="text-sm uppercase tracking-[0.35em] text-[#ffb597]">Need help?</p>
              <p className="mt-2 text-sm leading-6">Contact us for feedback, suggestions, or more information.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
