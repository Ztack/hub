import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t-4 border-primary bg-card mt-auto">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-sm text-muted-foreground">© 2026 ZTACK. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/" className="font-sans text-sm text-muted-foreground hover:text-primary transition-colors">
              ABOUT
            </Link>
            <Link
              href="/community"
              className="font-sans text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              COMMUNITY
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
