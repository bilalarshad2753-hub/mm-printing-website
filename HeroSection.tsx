export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-5 md:px-16 pt-[53px] pb-20">
      <div className="reveal-up active">
        <p className="text-[#ffb597] mb-8 tracking-[0.4em] uppercase" style={{ fontSize: '20px', fontWeight: 500, lineHeight: '1.4' }}>
          Status: Online | Precision 99.9%
        </p>
        <h1 className="md:text-[160px] uppercase leading-none mb-8" style={{ fontSize: '96px', fontWeight: 800, lineHeight: '1.1', letterSpacing: '-0.02em' }}>
          KINETIC <span className="text-gradient">PRECISION</span>.<br />
          FUTURE PRINTED.
        </h1>
        <p className="max-w-3xl mx-auto text-[#e1bfb2] mb-16" style={{ fontSize: '24px', fontWeight: 400, lineHeight: '1.6' }}>
          High-speed industrial printing solutions designed for technical mastery and maximum output. We bridge the gap between digital intent and physical reality.
        </p>
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          <button className="bg-[#f26419] text-[#4e1900] px-16 py-8 hover:shadow-[0_0_30px_rgba(242,100,25,0.5)] transition-all" style={{ fontSize: '16px', fontWeight: 700, lineHeight: '1', letterSpacing: '0.1em' }}>
            EXPLORE TERMINAL
          </button>
          <button className="border-2 border-[#ffb597] text-[#ffb597] px-16 py-8 hover:bg-[#ffb597]/10 transition-all" style={{ fontSize: '16px', fontWeight: 700, lineHeight: '1', letterSpacing: '0.1em' }}>
            VIEW CATALOG
          </button>
        </div>
      </div>

      {/* Hero Visual */}
      <div className="mt-20 w-full max-w-5xl reveal-up active" style={{ transitionDelay: '200ms' }}>
        <div className="relative h-96 w-full glass-panel overflow-hidden">
          <img
            src="/eee.jpg"
            alt="Holographic printer background"
            className="pointer-events-none absolute right-0 top-1/2 hidden h-[88%] max-h-[560px] w-auto -translate-y-1/2 object-contain opacity-30 mix-blend-screen md:block"
          />
          <video
            className="relative z-10 w-full h-full object-cover"
            src="/placeholder.mp4"
            autoPlay
            muted
            loop
            playsInline
            poster="/placeholder.jpg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121416] to-transparent" />
        </div>
      </div>
    </section>
  )
}
