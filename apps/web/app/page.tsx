import Link from "next/link";
import { Card } from "@repo/ui";

export default function Home() {
  return (
    <>
      <h1>Hi, I&apos;m [Your Name]</h1>
      <p>
        I&apos;m a developer who builds software projects. This site collects
        the projects I&apos;ve completed, and more will be added over time.
      </p>
      <h2>Projects</h2>
      <div className="grid">
        <Card title="Freight Reconciliation">
          <p>An app that performs 3-way reconciliation for the freight industry.</p>
          <Link href="/projects/freight-reconciliation">View project →</Link>
        </Card>
      </div>
    </>
  );
}
