export default function ProductionWorkflow() {
  const steps = [
    {
      icon: 'input',
      label: 'INTAKE',
      description: 'Digital data packet ingestion and analysis.',
      delay: '0ms',
    },
    {
      icon: 'settings_suggest',
      label: 'CALIBRATE',
      description: 'Precision ink-to-surface alignment mapping.',
      delay: '150ms',
    },
    {
      icon: 'bolt',
      label: 'EXECUTE',
      description: 'High-speed thermodynamic binding process.',
      delay: '300ms',
    },
    {
      icon: 'local_shipping',
      label: 'DELIVER',
      description: 'Global logistics node dispatch terminal.',
      delay: '450ms',
    },
  ]

  return (
    <section className="py-20 px-5 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 reveal-up">
          <h2 className="uppercase mb-3" style={{ fontSize: '40px', fontWeight: 700, lineHeight: '1.2', letterSpacing: '-0.01em' }}>
            Production Workflow
          </h2>
          <p className="text-[#ffb4a9]" style={{ fontSize: '14px', fontWeight: 500, lineHeight: '1.4' }}>
            SEQUENTIAL_LOGIC_FLOW
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Connector Lines (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-1 pointer-events-none z-0">
            <svg className="w-full h-full" overflow="visible">
              <line className="animate-flow" stroke="#f26419" strokeWidth="2" x1="12.5%" x2="87.5%" y1="0" y2="0" />
            </svg>
          </div>

          {/* Workflow Steps */}
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative z-10 flex flex-col items-center text-center group reveal-up"
              style={{ transitionDelay: step.delay }}
            >
              <div className="w-24 h-24 rounded-none bg-[#1e2022] border-2 border-[#f26419] flex items-center justify-center mb-6 group-hover:bg-[#f26419] transition-all duration-300">
                <span className="material-symbols-outlined text-3xl text-[#ffb597] group-hover:text-[#4e1900]">{step.icon}</span>
              </div>
              <h4 className="text-[#ffb597] mb-3" style={{ fontSize: '12px', fontWeight: 700, lineHeight: '1', letterSpacing: '0.1em' }}>
                {step.label}
              </h4>
              <p className="text-[#e1bfb2] px-6" style={{ fontSize: '12px', fontWeight: 500, lineHeight: '1.4' }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
