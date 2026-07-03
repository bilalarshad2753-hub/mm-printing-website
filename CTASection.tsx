export default function CTASection() {
  return (
    <section className="py-20 mb-20">
      <div className="max-w-4xl mx-auto px-5 text-center">
        <div className="glass-panel p-20 border-[#f26419]/30 relative overflow-hidden reveal-up">
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#f26419]/10 rounded-full blur-3xl" />
          <img
            src="/mm-logo.png"
            alt="MM Printing Logo"
            className="absolute bottom-6 right-6 h-12 w-12 opacity-20 pointer-events-none"
          />
          <h2 className="uppercase mb-6 relative z-10" style={{ fontSize: '40px', fontWeight: 700, lineHeight: '1.2', letterSpacing: '-0.01em' }}>
            System Ready for Deployment
          </h2>
          <p className="text-[#e1bfb2] mb-12 relative z-10" style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.6' }}>
            Request a technical consultation for your industrial printing requirements.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
            <input
              className="bg-[#1e2022] border border-[#594138] text-[#ffb597] px-6 py-3 focus:border-[#f26419] focus:ring-0 outline-none w-full sm:w-80"
              placeholder="ENTER_IDENTIFIER@TERMINAL.COM"
              type="email"
              style={{ fontSize: '14px', fontWeight: 500, lineHeight: '1.4' }}
            />
            <button className="bg-[#f26419] text-[#4e1900] px-12 py-3 hover:shadow-[0_0_20px_rgba(242,100,25,0.4)] transition-all" style={{ fontSize: '12px', fontWeight: 700, lineHeight: '1', letterSpacing: '0.1em' }}>
              CONNECT
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
