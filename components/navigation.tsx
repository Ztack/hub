"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { useState } from "react"

const navItems = [
  { name: "About Us", href: "/" },
  { name: "Community", href: "/community" },
]

export function Navigation() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="border-b-4 border-primary bg-card">
      <div className="mx-auto max-w-6xl px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" onClick={() => setIsMenuOpen(false)}>
            <div className="relative h-10 w-10 bg-primary p-1 pixel-box">
              <Image src="/images/ztack.png" alt="Ztack Logo" fill className="object-contain" />
            </div>
            <span className="font-sans text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
              ZTACK
            </span>
          </Link>

          {/* Desktop Navigation Tabs */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-6 py-2 font-sans text-sm font-bold uppercase tracking-wider transition-all border-2",
                    isActive
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-transparent text-foreground border-transparent hover:border-primary hover:text-primary",
                  )}
                >
                  {item.name}
                </Link>
              )
            })}
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span
              className={cn(
                "w-6 h-0.5 bg-foreground transition-all",
                isMenuOpen && "rotate-45 translate-y-2",
              )}
            />
            <span
              className={cn(
                "w-6 h-0.5 bg-foreground transition-all",
                isMenuOpen && "opacity-0",
              )}
            />
            <span
              className={cn(
                "w-6 h-0.5 bg-foreground transition-all",
                isMenuOpen && "-rotate-45 -translate-y-2",
              )}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t-2 border-primary pt-4">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={cn(
                      "px-6 py-3 font-sans text-sm font-bold uppercase tracking-wider transition-all border-2 text-center",
                      isActive
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-transparent text-foreground border-foreground hover:border-primary hover:text-primary",
                    )}
                  >
                    {item.name}
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
