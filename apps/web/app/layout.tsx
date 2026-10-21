import type { Metadata, Viewport } from "next";
import Link from "next/link";
import { Container } from "@repo/ui";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Projects",
  description: "Personal site showcasing my coding projects.",
};

export const viewport: Viewport = { width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav>
          <Container>
            <div className="inner">
              <Link href="/" className="brand">My Projects</Link>
              <Link href="/">Home</Link>
              <Link href="/projects/freight-reconciliation">Freight Reconciliation</Link>
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
