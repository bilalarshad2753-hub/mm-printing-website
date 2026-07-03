import { Globe, Globe2, MessageCircle, Share2 } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="w-full relative overflow-hidden border-t-[0.5px] border-[#594138] bg-[#0c0e10]">
      <div className="grid grid-cols-12 gap-6 px-16 py-12 max-w-7xl mx-auto">
        <div className="col-span-12 md:col-span-4">
          <div className="flex items-center gap-3 mb-6">
            <img
              src="/mm-logo.png"
              alt="MM Printing Logo"
              className="h-10 w-10"
            />
            <div className="text-[#ffb4a9]" style={{ fontSize: '12px', fontWeight: 700, lineHeight: '1', letterSpacing: '0.1em' }}>
              MM Mobile and Printing
            </div>
          </div>
          <p className="text-[#e1bfb2] max-w-xs" style={{ fontSize: '14px', fontWeight: 500, lineHeight: '1.4' }}>
            Leading the printing industry  since 2021, Crafting premium print experiences with speed, color, and personality.
          </p>
        </div>

        <div className="col-span-6 md:col-span-4 flex flex-col gap-3">
          <div className="text-[#ffb597] mb-1" style={{ fontSize: '12px', fontWeight: 700, lineHeight: '1', letterSpacing: '0.1em' }}>
            NAV_LINKS
          </div>
          <a className="text-[#e1bfb2] hover:text-[#950c09] transition-all" href="/" style={{ fontSize: '14px', fontWeight: 500, lineHeight: '1.4' }}>
            Home
          </a>
          <a className="text-[#e1bfb2] hover:text-[#950c09] transition-all" href="/about" style={{ fontSize: '14px', fontWeight: 500, lineHeight: '1.4' }}>
            About
          </a>
          <a className="text-[#e1bfb2] hover:text-[#950c09] transition-all" href="/services" style={{ fontSize: '14px', fontWeight: 500, lineHeight: '1.4' }}>
            Services
          </a>
          <a className="text-[#e1bfb2] hover:text-[#950c09] transition-all" href="/gallery" style={{ fontSize: '14px', fontWeight: 500, lineHeight: '1.4' }}>
            Gallery
          </a>
          <a className="text-[#e1bfb2] hover:text-[#950c09] transition-all" href="/testimonials" style={{ fontSize: '14px', fontWeight: 500, lineHeight: '1.4' }}>
            Testimonials
          </a>
          <a className="text-[#e1bfb2] hover:text-[#950c09] transition-all" href="/contact" style={{ fontSize: '14px', fontWeight: 500, lineHeight: '1.4' }}>
            Contact
          </a>
        </div>

        <div className="col-span-6 md:col-span-4 flex flex-col gap-6 md:flex-row md:items-start md:justify-between md:space-x-6">
          <div className="flex-1 min-w-[160px]">
            <div className="text-[#ffb597] mb-1" style={{ fontSize: '12px', fontWeight: 700, lineHeight: '1', letterSpacing: '0.1em' }}>
              ADDRESSES
            </div>
            <div className="text-[#e1bfb2]" style={{ fontSize: '14px', fontWeight: 500, lineHeight: '1.6' }}>
              <div className="mb-3">
                <strong className="block text-[#ffb597]">Warehouse Address</strong>
                House # 6, Street # 6, Shawala Chowk,
                <br /> Near Bhogiwal Eid Gah Ufone Tower Wali
              </div>
              <div>
                <strong className="block text-[#ffb597]">Shop Address</strong>
                Begumpura Stop, Near UET, Shalamar Town, Lahore.
              </div>
            </div>
          </div>

          <div className="flex-1 min-w-[160px]">
            <div className="text-[#ffb597] mb-1" style={{ fontSize: '12px', fontWeight: 700, lineHeight: '1', letterSpacing: '0.1em' }}>
              CONTACT
            </div>
            <div className="text-[#e1bfb2]" style={{ fontSize: '14px', fontWeight: 500, lineHeight: '1.6' }}>
              <div className="mb-3">
                <strong className="block text-[#ffb597]">Phone</strong>
                <a className="hover:text-[#ffb597]" href="tel:+923099018555">0309-9018555</a>
                <br />
                <a className="hover:text-[#ffb597]" href="tel:+923249018555">0324-9018555</a>
              </div>
              <div>
                <strong className="block text-[#ffb597]">Email</strong>
                <a className="hover:text-[#ffb597]" href="mailto:mmprinting555@gmail.com">mmprinting555@gmail.com</a>
              </div>
            </div>
          </div>

          <div className="flex-1 min-w-[160px]">
            <div className="text-[#ffb597] mb-1" style={{ fontSize: '12px', fontWeight: 700, lineHeight: '1', letterSpacing: '0.1em' }}>
              SOCIALS
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-[#e1bfb2] hover:text-[#ffb597] transition-all" style={{ fontSize: '14px', fontWeight: 500, lineHeight: '1.4' }}>
                <Globe2 className="h-4 w-4" />
                Facebook
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-[#e1bfb2] hover:text-[#ffb597] transition-all" style={{ fontSize: '14px', fontWeight: 500, lineHeight: '1.4' }}>
                <Globe className="h-4 w-4" />
                Instagram
              </a>
              <a href="https://wa.me/923099018555" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-[#e1bfb2] hover:text-[#ffb597] transition-all" style={{ fontSize: '14px', fontWeight: 500, lineHeight: '1.4' }}>
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
              <a href="https://www.tiktok.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-[#e1bfb2] hover:text-[#ffb597] transition-all" style={{ fontSize: '14px', fontWeight: 500, lineHeight: '1.4' }}>
                <Share2 className="h-4 w-4" />
                TikTok
              </a>
            </div>
          </div>
        </div>

        <div className="col-span-12 mt-12 pt-6 border-t border-[#594138]/30 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[#e1bfb2] opacity-60" style={{ fontSize: '12px', fontWeight: 500, lineHeight: '1.4' }}>
            © 2026 MM Mobile and Printing. ALL RIGHTS RESERVED.
          </div>
          <div className="flex gap-6 text-xs" style={{ fontSize: '12px', fontWeight: 500, lineHeight: '1.4', color: '#e1bfb2' }}>
            {/* <span>BUILD: v4.2.0-STABLE</span>
            <span>ENCRYPTION: AES-256</span> */}
          </div>
        </div>
      </div>
    </footer>
  )
}
