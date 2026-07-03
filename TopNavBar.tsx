'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'

export default function TopNavBar() {
  const pathname = usePathname()
  const isHome = pathname === '/' || pathname === ''
  const isContact = pathname === '/contact'
  const [activeIndex, setActiveIndex] = useState(0)
  const [indicatorStyle, setIndicatorStyle] = useState({ width: 0, x: 0 })
  const linkRefs = useRef<Array<HTMLAnchorElement | null>>([])

  useEffect(() => {
    const path = pathname || '/'
    let nextIndex = 0
    if (path.startsWith('/about')) nextIndex = 1
    else if (path.startsWith('/services')) nextIndex = 2
    else if (path.startsWith('/gallery')) nextIndex = 3
    else if (path.startsWith('/testimonials')) nextIndex = 4
    else if (path.startsWith('/contact')) nextIndex = 5
    else nextIndex = 0

    setActiveIndex((prev) => (prev === nextIndex ? prev : nextIndex))
  }, [pathname])

  useLayoutEffect(() => {
    const activeLink = linkRefs.current[activeIndex]
    if (!activeLink) return

    const updateIndicator = () => {
      setIndicatorStyle({
        width: activeLink.offsetWidth,
        x: activeLink.offsetLeft,
      })
    }

    updateIndicator()
    window.addEventListener('resize', updateIndicator)

    return () => {
      window.removeEventListener('resize', updateIndicator)
    }
  }, [activeIndex])

  const navItems = [
    { label: 'Home', href: '/', isRouteLink: true },
    { label: 'About', href: '/about', isRouteLink: true },
    { label: 'Services', href: '/services', isRouteLink: true },
    { label: 'Gallery', href: '/gallery', isRouteLink: true },
    { label: 'Testimonials', href: '/testimonials', isRouteLink: true },
    { label: 'Contact', href: '/contact', isRouteLink: true },
  ]

  const navLinkClass = (active: boolean) =>
    `relative z-10 px-1 pb-2 tracking-tight font-medium transition duration-300 ${
      active
        ? 'text-transparent bg-gradient-to-r from-[#ff2d55] via-[#ff7eb9] to-[#f24874] bg-clip-text'
        : 'text-[#e1bfb2] hover:text-transparent hover:bg-gradient-to-r hover:from-[#ff2d55] hover:via-[#ff7eb9] hover:to-[#f24874] hover:bg-clip-text'
    }`

  return (
    <header className="fixed top-0 w-full z-50 bg-[#121416]/80 backdrop-blur-xl border-b-[0.5px] border-[#594138] shadow-[0_0_15px_rgba(242,100,25,0.2)]">
      <nav className="flex justify-between items-center h-20 px-16 max-w-full">
        <div className="flex items-center relative">
          <Link href="/" className="flex items-center hover:scale-105 transition-transform duration-300">
            <img
              src="/mm-logo.png"
              alt="MM Printing Logo"
              className="h-28 w-auto object-contain"
            />
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-6 relative">
          <div
            className="pointer-events-none absolute bottom-0 left-0 h-[2px] rounded-full bg-gradient-to-r from-[#ff2d55] via-[#ff7eb9] to-[#f24874] shadow-[0_0_15px_rgba(242,100,25,0.35)] transition-[transform,width] duration-500 ease-out"
            style={{ width: indicatorStyle.width, transform: `translateX(${indicatorStyle.x}px)` }}
          />
          {navItems.map((item, index) => {
            const active = index === activeIndex
            const sharedProps = {
              ref: (node: HTMLAnchorElement | null) => {
                linkRefs.current[index] = node
              },
              className: navLinkClass(active),
              style: { fontSize: '24px', fontWeight: index === 0 ? 600 : 500, lineHeight: '1.4' },
              onClick: () => setActiveIndex(index),
              'aria-current': active ? 'page' : undefined,
            }

            if (item.isRouteLink) {
              return (
                <Link key={item.label} href={item.href} {...sharedProps}>
                  {item.label}
                </Link>
              )
            }

            return (
              <a key={item.label} href={item.href} {...sharedProps}>
                {item.label}
              </a>
            )
          })}
        </div>
        <Link
          href="/contact"
          className="bg-[#f26419] text-[#4e1900] px-6 py-3 rounded-none hover:shadow-[0_0_20px_rgba(242,100,25,0.4)] active:scale-95 transition-all duration-300"
          style={{ fontSize: '12px', fontWeight: 700, lineHeight: '1', letterSpacing: '0.1em' }}
        >
          Initialize Project
        </Link>
      </nav>
    </header>
  )
}
