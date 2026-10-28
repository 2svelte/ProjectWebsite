import type { Metadata, Viewport } from "next";
import Link from "next/link";
import { Container } from "@repo/ui";
import { Bebas_Neue, Inter, Space_Mono } from "next/font/google";
import "./globals.css";

const heading = Bebas_Neue({ weight: "400", subsets: ["latin"], variable: "--font-heading" });
const body = Inter({ subsets: ["latin"], variable: "--font-body" });
const mono = Space_Mono({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "My Projects",
  description: "Personal site showcasing my coding projects.",
};

export const viewport: Viewport = { width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${heading.variable} ${body.variable} ${mono.variable}`}>
        <nav>
          <Container>
            <div className="inner">
              <Link href="/">Home</Link>
              <Link href="/about">About Me</Link>
              <Link href="/projects">All Projects</Link>
            </div>
          </Container>
        </nav>
        <main>
          <Container>{children}</Container>
        </main>
      </body>
    </html>
  );
}
