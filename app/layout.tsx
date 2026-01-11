import type React from "react"
import type { Metadata } from "next"
import { JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin", "latin-ext"], weight: ["400", "500", "600", "700"] })

export const metadata: Metadata = {
  title: "Ztack | Tech Community",
  description: "A community for DevOps, security, cloud-native, and software engineering",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased ${jetbrainsMono.className}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
