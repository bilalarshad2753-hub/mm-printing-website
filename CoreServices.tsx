export default function CoreServices() {
  const services = [
    {
      icon: 'one',
      // title: 'LITHOGRAPHY_01',
      title: 'service_name',
      description: 'Advanced precision lithography for high-volume technical documentation and industrial manuals.',
      // status: 'yyyy',
      // delay: '0ms',
    },
    {
      icon: 'two',
      // title: 'INK_MATRIX',
      title: 'service_name',
      description: 'Custom liquid pigment synthesis for unique brand identities and durable outdoor substrate applications.',
      // status: 'OPTIMIZED',
      // delay: '100ms',
    },
    {
      icon: 'three',
      title: 'service_name',
      description: 'Mobile rapid prototyping units deployed directly to your facility for on-site execution.',
      // status: 'MOBILE',
      delay: '200ms',
    },
  ]

  return (
    <section className="py-20 px-5 md:px-16 bg-[#0c0e10] relative industrial-grid">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 reveal-up">
          <div>
            <h2 className="uppercase mb-1" style={{ fontSize: '40px', fontWeight: 700, lineHeight: '1.2', letterSpacing: '-0.01em' }}>
              Core Services
            </h2>
            <div className="h-1 w-24 bg-[#ffb597]" />
          </div>
          <p className="text-[#e1bfb2] mt-6 md:mt-0 max-w-xs" style={{ fontSize: '14px', fontWeight: 500, lineHeight: '1.4' }}>
            {/* SYSTEM_NODE: SERVICES.MOD */}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-panel p-6 group glow-orange-hover transition-all reveal-up"
              style={{ transitionDelay: service.delay }}
            >
              <div className="mb-12">
                <span className="material-symbols-outlined text-[#ffb597] text-4xl">{service.icon}</span>
              </div>
              <h3 className="mb-3 uppercase" style={{ fontSize: '24px', fontWeight: 600, lineHeight: '1.4' }}>
                {service.title}
              </h3>
              <p className="text-[#e1bfb2] mb-6" style={{ fontSize: '16px', fontWeight: 400, lineHeight: '1.6' }}>
                {service.description}
              </p>
              <div className="flex justify-between items-center border-t border-[#594138] pt-6">
                <span className="text-[#ffb597] text-xs" style={{ fontSize: '14px', fontWeight: 500, lineHeight: '1.4' }}>
                  {service.status}
                </span>
                <span className="material-symbols-outlined text-[#ffb597] group-hover:translate-x-1 transition-transform">......</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
