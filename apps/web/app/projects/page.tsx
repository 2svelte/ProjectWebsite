import Link from "next/link";
import { projects } from "../projects-data";

export const metadata = { title: "All Projects" };

export default function Projects() {
  return (
    <>
      <h1>All Projects</h1>
      <div className="highlights">
        {projects.map((p) => (
          <article key={p.title} className="highlight bite">
            <div className="placeholder project-image bite">Project image here</div>
            <div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <Link href={`/projects/${p.slug}`}>View project</Link>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
