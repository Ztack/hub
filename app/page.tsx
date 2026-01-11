import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-primary opacity-5" />

          <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="inline-block px-4 py-1 bg-primary text-primary-foreground font-sans text-xs uppercase tracking-widest">
                  Community
                </div>
                <h1 className="font-sans text-6xl md:text-8xl font-bold leading-none tracking-tight text-foreground">
                  BUILD
                  <br />
                  <span className="text-primary">LEARN</span>
                  <br />
                  SHARE
                </h1>
                <p className="font-sans text-lg text-muted-foreground max-w-md leading-relaxed">
                  A community of engineers passionate about software, security, privacy advocates, cloud-native, self-hosting, open source,
                  AI, and DevOps.
                </p>
                <div className="flex gap-4">
                  <a
                    href="/community"
                    className="px-8 py-3 bg-primary text-primary-foreground font-sans text-sm font-bold uppercase tracking-wider hover:bg-foreground transition-colors border-4 border-primary hover:border-foreground"
                  >
                    Join Us
                  </a>
                  <a
                    href="#about"
                    className="px-8 py-3 bg-transparent text-foreground font-sans text-sm font-bold uppercase tracking-wider border-4 border-foreground hover:bg-foreground hover:text-background transition-colors"
                  >
                    Learn More
                  </a>
                </div>
              </div>

              <div className="relative flex justify-center">
                <div className="absolute h-40 w-40 md:h-48 md:w-48 bg-primary opacity-20 pixel-box translate-x-2 translate-y-2" />
                <div className="relative h-40 w-40 md:h-48 md:w-48 bg-primary p-1 pixel-box">
                  <Image src="/images/ztack.png" alt="Ztack Logo" fill className="object-contain" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="bg-card border-y-4 border-primary">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4 p-6 border-4 border-border hover:border-primary transition-colors group">
                <div className="w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center font-mono text-2xl font-bold">
                  {"</>"}
                </div>
                <h3 className="font-sans text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  DEVOPS & CLOUD
                </h3>
                <p className="font-sans text-muted-foreground leading-relaxed">
                  Kubernetes, containers, CI/CD pipelines, and cloud-native architecture discussions.
                </p>
              </div>

              <div className="space-y-4 p-6 border-4 border-border hover:border-primary transition-colors group">
                <div className="w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center font-mono text-2xl font-bold">
                  {"🔒"}
                </div>
                <h3 className="font-sans text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  SECURITY & PRIVACY
                </h3>
                <p className="font-sans text-muted-foreground leading-relaxed">
                  Infosec best practices, privacy tools, threat modeling, and keeping your stack secure.
                </p>
              </div>

              <div className="space-y-4 p-6 border-4 border-border hover:border-primary transition-colors group">
                <div className="w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center font-mono text-2xl font-bold">
                  {"🏠"}
                </div>
                <h3 className="font-sans text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  SELF-HOST & OSS
                </h3>
                <p className="font-sans text-muted-foreground leading-relaxed">
                  Take control of your data. Self-hosting guides, open source projects, and homelab setups.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="font-sans text-4xl md:text-5xl font-bold text-foreground">
              About <span className="text-primary">Ztack</span>
            </h2>
            <p className="font-sans text-xl text-muted-foreground leading-relaxed">
              {
                "We're a growing community of engineers, tinkerers, and tech enthusiasts who believe in sharing knowledge, building in public, and helping each other level up. No gatekeeping, just good vibes and great discussions."
              }
            </p>
            <div className="pt-4 flex justify-center gap-8">
              <div className="text-center">
                <div className="font-sans text-5xl font-bold text-primary">1K+</div>
                <div className="font-sans text-sm text-muted-foreground uppercase tracking-wider">Members</div>
              </div>
              <div className="text-center">
                <div className="font-sans text-5xl font-bold text-primary">8+</div>
                <div className="font-sans text-sm text-muted-foreground uppercase tracking-wider">Topics</div>
              </div>
              <div className="text-center">
                <div className="font-sans text-5xl font-bold text-primary">24/7</div>
                <div className="font-sans text-sm text-muted-foreground uppercase tracking-wider">Active Chat</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
