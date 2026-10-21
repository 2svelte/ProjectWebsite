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
    <section
      style={{
        border: "1px solid #e2e2e2",
        borderRadius: 8,
        padding: "1rem 1.25rem",
        background: "#fff",
      }}
    >
      <h3 style={{ marginTop: 0 }}>{title}</h3>
      {children}
    </section>
  );
}
