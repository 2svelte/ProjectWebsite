import type { ReactNode } from "react";

export function Container({ children }: { children: ReactNode }) {
  return (
    <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 1rem" }}>
      {children}
    </div>
  );
}

export function Card({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="card bite">
      <h3>{title}</h3>
      {children}
    </section>
  );
}
