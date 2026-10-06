import { FormEvent, ReactNode, useState } from "react"

type IconName = "arrow" | "code" | "database" | "email" | "github" | "linkedin" | "moon" | "server" | "sun" | "tool"

const iconPaths: Record<IconName, ReactNode> = {
  arrow: <path d="M5 12h14m-5-5 5 5-5 5" />,
  code: <path d="m8.5 9-3 3 3 3m7-6 3 3-3 3M14 5l-4 14" />,
  database: (
    <>
      <ellipse cx="12" cy="6" rx="7" ry="3" />
      <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
    </>
  ),
  email: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  github: (
    <path d="M15 22v-4c.1-1-.4-2-1-2.5 3.3-.4 6.8-1.6 6.8-7.4A5.8 5.8 0 0 0 19.3 4 5.4 5.4 0 0 0 19.1.1S17.9-.3 15 1.6a14 14 0 0 0-6 0C6.1-.3 4.9.1 4.9.1A5.4 5.4 0 0 0 4.7 4a5.8 5.8 0 0 0-1.5 4.1c0 5.8 3.5 7 6.8 7.4-.5.5-.9 1.3-1 2.5v4" />
  ),
  linkedin: (
    <>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V9h4v2a5 5 0 0 1 2-3Z" />
      <path d="M2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </>
  ),
  moon: <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />,
  server: (
    <>
      <rect x="3" y="4" width="18" height="6" rx="2" />
      <rect x="3" y="14" width="18" height="6" rx="2" />
      <path d="M7 7h.01M7 17h.01" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </>
  ),
  tool: (
    <path d="M14.7 6.3a4 4 0 0 0-5-5L7 4l3 3 2.7-2.7a4 4 0 0 0 2 2ZM10 7 2.8 14.2a2.8 2.8 0 1 0 4 4L14 11" />
  ),
}

function Icon({ name, size = 20 }: { name: IconName size?: number }) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    >
      {iconPaths[name]}
    </svg>
  )
}

const skillGroups = [
  {
    icon: "code" as IconName,
    title: "Frontend",
    skills: ["HTML5 / CSS3", "JavaScript (ES6+)", "React", "Next.js", "Tailwind CSS"],
  },
  {
    icon: "server" as IconName,
    title: "Backend",
    skills: ["PHP", "Java / JavaFX", "REST APIs", "Object-Oriented Design"],
  },
  {
    icon: "database" as IconName,
    title: "Databases & Dev",
    skills: ["MySQL", "PostgreSQL", "Docker", "Ubuntu Server", "Git / GitHub"],
  },
  {
    icon: "tool" as IconName,
    title: "Machine Learning",
    skills: ["Python", "Scikit-Learn", "Pandas / NumPy", "Data Preprocessing"],
  },
]

const projects = [
  {
    number: "01",
    title: "Employee Management System",
    description:
      "A full-stack management platform featuring role-based authentication, employee tracking, and relational database integrations.",
    tags: ["PHP / MySQL", "React", "Tailwind CSS"],
    color: "lime",
  },
  {
    number: "02",
    title: "Student Registration System",
    description:
      "A Java desktop application with PostgreSQL and JDBC for complete student record lifecycle management and persistent storage.",
    tags: ["Java / JavaFX", "PostgreSQL", "JDBC"],
    color: "blue",
  },
  {
    number: "03",
    title: "ML Classification Pipeline",
    description:
      "An end-to-end predictive model using Support Vector Machines, feature scaling, and k-fold cross-validation.",
    tags: ["Python", "Scikit-Learn", "Pandas"],
    color: "orange",
  },
]

export default function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [sent, setSent] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSent(true)
    event.currentTarget.reset()
  }

  return (
    <div className="site-shell" data-theme={darkMode ? "dark" : "light"}>
      {/* Navigation */}
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Chalie Melkamu, home">
          Chalie<span>.dev</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
        </nav>
        <div className="header-actions">
          <button
            className="theme-toggle"
            onClick={() => setDarkMode((mode) => !mode)}
            type="button"
            aria-label={`Switch to ${darkMode ? "light" : "dark"} mode`}
          >
            <Icon name={darkMode ? "sun" : "moon"} size={18} />
          </button>
          <a className="header-cta" href="#contact">
            Get in touch <Icon name="arrow" size={17} />
          </a>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="hero page-width" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="status-dot" /> Available for opportunities
            </div>
            <h1 id="hero-title">
              Building robust,
              <br />
              scalable <span>software.</span>
            </h1>
            <p>
              I’m Chalie Melkamu, a software engineering student specializing
              in full-stack development, backend architecture, and intelligent
              software systems.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                View projects <Icon name="arrow" size={18} />
              </a>
              <a className="text-link" href="https://github.com">
                View GitHub profile
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="monogram">C</div>
            <div className="code-pill pill-one">
              <span>const</span> goal = "impact";
            </div>
            <div className="code-pill pill-two">build · learn · improve</div>
            <div className="spark spark-one">+</div>
            <div className="spark spark-two">✦</div>
          </div>

          <div className="hero-footer">
            <p>Software engineering · Full-stack · Machine learning</p>
            <div className="social-links">
              <a href="https://github.com" aria-label="GitHub">
                <Icon name="github" />
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn">
                <Icon name="linkedin" />
              </a>
              <a href="#contact" aria-label="Contact Chalie">
                <Icon name="email" />
              </a>
            </div>
          </div>
        </section>

        {/* About */}
        <section
          className="about page-width"
          id="about"
          aria-labelledby="about-title"
        >
          <div className="section-label">01 — About</div>
          <div className="about-content">
            <h2 id="about-title">
              Practical engineering,
              <br />
              <em>thoughtfully built.</em>
            </h2>
            <div className="about-copy">
              <p>
                Hello! I am Chalie Melkamu, a dedicated Software Engineering
                student focused on building practical, efficient, and
                well-designed software systems.
              </p>
              <p>
                My core expertise spans modern web frameworks, desktop
                development, software architecture, and practical machine
                learning. I value clean code, thoughtful UI/UX, and reliable
                backend engineering.
              </p>
              <a className="underlined-link" href="#contact">
                Start a conversation <Icon name="arrow" size={17} />
              </a>
            </div>
          </div>
          <div className="stats">
            <div>
              <strong>B.Sc.</strong>
              <span>Software Engineering</span>
            </div>
            <div>
              <strong>IU</strong>
              <span>Injibara University</span>
            </div>
            <div>
              <strong>Full</strong>
              <span>Stack development</span>
            </div>
            <div>
              <strong>ML</strong>
              <span>Intelligent systems</span>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section
          className="skills page-width"
          id="skills"
          aria-labelledby="skills-title"
        >
          <div className="section-heading">
            <div>
              <div className="section-label">02 — Toolkit</div>
              <h2 id="skills-title">What I work with.</h2>
            </div>
            <p>
              A growing toolkit for building reliable interfaces, APIs,
              desktop applications, and data-driven systems.
            </p>
          </div>
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article className="skill-card" key={group.title}>
                <div className="skill-icon">
                  <Icon name={group.icon} size={23} />
                </div>
                <h3>{group.title}</h3>
                <ul>
                  {group.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* Selected work */}
        <section
          className="work page-width"
          id="projects"
          aria-labelledby="work-title"
        >
          <div className="section-heading work-heading">
            <div>
              <div className="section-label">03 — Selected work</div>
              <h2 id="work-title">Featured work.</h2>
            </div>
            <a className="underlined-link" href="https://github.com">
              View all on GitHub <Icon name="arrow" size={17} />
            </a>
          </div>
          <div className="projects-list">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className={`project-preview ${project.color}`}>
                  <span className="project-number">{project.number}</span>
                  <div className="preview-window">
                    <div className="window-top">
                      <i />
                      <i />
                      <i />
                    </div>
                    <div className="window-content">
                      <span />
                      <strong>{project.title}</strong>
                      <div />
                      <div />
                    </div>
                  </div>
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a
                      href="https://github.com"
                      aria-label={`View ${project.title} source code`}
                    >
                      <Icon name="github" size={17} /> Source
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section
          className="contact"
          id="contact"
          aria-labelledby="contact-title"
        >
          <div className="page-width contact-grid">
            <div className="contact-copy">
              <div className="section-label">04 — Contact</div>
              <h2 id="contact-title">
                Let’s build
                <br />
                something <em>useful.</em>
              </h2>
              <p>
                Whether you have an inquiry, project proposal, or collaboration
                opportunity, feel free to send a message.
              </p>
              <a href="https://linkedin.com">Connect on LinkedIn</a>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <label>
                Name
                <input
                  name="name"
                  type="text"
                  placeholder="Your name"
                  required
                />
              </label>
              <label>
                Email
                <input
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  required
                />
              </label>
              <label>
                Message
                <textarea
                  name="message"
                  placeholder="Hello, I'd like to discuss..."
                  rows={4}
                  required
                />
              </label>
              <button className="button button-dark" type="submit">
                {sent ? "Message sent — thank you" : "Send message"}
                <Icon name="arrow" size={18} />
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <div className="page-width footer-inner">
          <a className="brand" href="#top">
            Chalie<span>.dev</span>
          </a>
          <p>© 2026 Chalie Melkamu. All rights reserved.</p>
          <a className="back-top" href="#top">
            Back to top <span>↑</span>
          </a>
        </div>
      </footer>
    </div>
  )
}
