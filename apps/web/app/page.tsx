import Link from "next/link";
import { profileImage, projects } from "./projects-data";
import { ImageSlot } from "./image-slot";

export default function Home() {
  return (
    <>
      <section className="hero">
        <ImageSlot src={profileImage} alt="Nadia" className="hero-image" placeholder="Your image here" />
        <div>
          <h1>Hi, I&apos;m Nadia</h1>
          <p>
            I&apos;m a business analyst, AI developer, and automations expert.
            I just love to innovate. This is a showcase for some of my
            favourite builds.
          </p>
        </div>
      </section>

      <hr className="divider" />

      <h2>Highlights</h2>
      <div className="highlights">
        {projects.map((p) => (
          <article key={p.title} className="highlight bite">
            <ImageSlot src={p.image} alt={p.title} className="project-image" placeholder="Project image here" />
            <div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              {p.skills && (
                <ul className="skills">
                  {p.skills.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>
              )}
              <Link href={`/projects/${p.slug}`}>View project</Link>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
