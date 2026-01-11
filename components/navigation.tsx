"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "About Us", href: "/" },
  { name: "Community", href: "/community" },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="border-b-4 border-primary bg-card">
      <div className="mx-auto max-w-6xl px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-10 w-10 bg-primary p-1 pixel-box">
              <Image src="/images/ztack.png" alt="Ztack Logo" fill className="object-contain" />
            </div>
            <span className="font-sans text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
              ZTACK
            </span>
          </Link>

          {/* Navigation Tabs */}
          <div className="flex items-center gap-1">
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
        </div>
      </div>
    </nav>
  )
}
