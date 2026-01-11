"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { MessageCircle, Twitter, Github, Globe, BookOpen, Youtube, Mail, Rss, Tv } from "lucide-react"
import Image from "next/image"

const BlueskyIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.138.022-.276.04-.415.056-3.912.58-7.387 2.005-2.83 7.078 5.013 5.19 6.87-1.113 7.823-4.308.953 3.195 2.05 9.271 7.733 4.308 4.267-4.308 1.172-6.498-2.74-7.078a8.741 8.741 0 0 1-.415-.056c.14.017.279.036.415.056 2.67.297 5.568-.628 6.383-3.364.246-.828.624-5.79.624-6.478 0-.69-.139-1.861-.902-2.206-.659-.298-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8Z" />
  </svg>
)

const quickLinks = [
  {
    name: "Discord",
    description: "Join our community",
    icon: MessageCircle,
    href: "https://discord.gg/7BfYGBAD",
    color: "bg-[#5865F2]",
    disabled: false,
  },
  {
    name: "Bluesky",
    description: "Follow us on Bluesky",
    icon: BlueskyIcon,
    href: "https://bsky.app/profile/ztack.org",
    color: "bg-[#0085FF]",
    disabled: false,
  },
  {
    name: "Twitter / X",
    description: "Follow for updates",
    icon: Twitter,
    href: "https://x.com/ztackorg",
    color: "bg-foreground",
    disabled: false,
  },
  {
    name: "GitHub",
    description: "Open source projects",
    icon: Github,
    href: "https://github.com/Ztack",
    color: "bg-foreground",
    disabled: false,
  },
  {
    name: "Twitch",
    description: "Live streams",
    icon: Tv,
    href: "https://www.twitch.tv/ztackorg",
    color: "bg-[#9146FF]",
    disabled: false,
  },
  {
    name: "YouTube",
    description: "Coming soon",
    icon: Youtube,
    href: "#",
    color: "bg-[#FF0000]",
    disabled: true,
  },
  {
    name: "Blog",
    description: "Coming soon",
    icon: BookOpen,
    href: "#",
    color: "bg-primary",
    disabled: true,
  },
  {
    name: "Newsletter",
    description: "Coming soon",
    icon: Mail,
    href: "#",
    color: "bg-primary",
    disabled: true,
  },
  {
    name: "RSS Feed",
    description: "Coming soon",
    icon: Rss,
    href: "#",
    color: "bg-orange-500",
    disabled: true,
  },
  {
    name: "Website",
    description: "Learn more about us",
    icon: Globe,
    href: "/",
    color: "bg-primary",
    disabled: false,
  },
]

export default function CommunityPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1">
        <section className="mx-auto max-w-md px-6 py-16">
          {/* Profile Header */}
          <div className="text-center mb-10">
            <div className="relative h-24 w-24 mx-auto mb-4 bg-primary p-1 pixel-box">
              <Image src="/images/ztack.png" alt="Ztack Logo" fill className="object-contain" />
            </div>
            <h1 className="font-sans text-3xl font-bold text-foreground mb-2">ZTACK</h1>
            <p className="font-sans text-sm text-muted-foreground">
              DevOps • Security • Cloud-Native • Self-Host • OSS • AI
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            {quickLinks.map((link) => (
              <div
                key={link.name}
                className={`group flex items-center gap-4 w-full p-4 border-4 bg-card transition-all ${link.disabled
                  ? "border-border/50 opacity-50 cursor-not-allowed"
                  : "border-border hover:border-primary hover:-translate-y-0.5 cursor-pointer"
                  }`}
                onClick={() => !link.disabled && (window.location.href = link.href)}
              >
                <div
                  className={`w-10 h-10 ${link.color} ${link.disabled ? "opacity-50" : ""} text-primary-foreground flex items-center justify-center flex-shrink-0`}
                >
                  <link.icon className="w-5 h-5" />
                </div>
                <div className="flex-1 text-left">
                  <div
                    className={`font-sans font-bold transition-colors ${link.disabled ? "text-muted-foreground" : "text-foreground group-hover:text-primary"}`}
                  >
                    {link.name}
                  </div>
                  <div className="font-sans text-xs text-muted-foreground">{link.description}</div>
                </div>
                {!link.disabled && (
                  <span className="font-sans text-sm text-muted-foreground group-hover:text-primary transition-colors">
                    →
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Footer tagline */}
          <div className="text-center mt-10 pt-6 border-t-2 border-border">
            <p className="font-sans text-xs text-muted-foreground uppercase tracking-widest">Build • Learn • Share</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
