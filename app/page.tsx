const publications = [
  {
    title: "Alignment of Continuous Brain Connectivity",
    year: "2025",
    href: "https://arxiv.org/abs/2503.15830",
    arxiv: "2503.15830",
  },
  {
    title:
      "Optimal Graph Joining with Applications to Isomorphism Detection and Identification",
    year: "2025",
    href: "https://arxiv.org/abs/2511.14862",
    arxiv: "2511.14862",
  },
  {
    title:
      "Diffeomorphic Cortical Alignment via Direct Warping of Streamline Endpoints",
    year: "2026",
    href: "https://arxiv.org/abs/2605.16742",
    arxiv: "2605.16742",
  },
  {
    title:
      "Graph Disjointness with Applications to Reversible Markov Chains",
    year: "2026",
    href: "https://arxiv.org/abs/2603.02563",
    arxiv: "2603.02563",
  },
];

const courses = ["STOR 305", "STOR 435", "STOR 445", "STOR 555"];

export default function Home() {
  return (
    <main className="page">
      <header className="profile-header" id="top">
        <div>
          <h1>Yang Xiang</h1>
          <p className="position">
            Ph.D. Candidate in Statistics and Operations Research
          </p>
          <p>University of North Carolina at Chapel Hill</p>
        </div>
        <address>
          Chapel Hill, NC
          <br />
          <a href="mailto:xya@unc.edu">xya@unc.edu</a>
        </address>
      </header>

      <div className="academic-layout">
        <aside className="sidebar">
          <nav className="site-nav" aria-label="Primary navigation">
            <a href="#education">Education</a>
            <a href="#research">Research Interests</a>
            <a href="#publications">Publications</a>
            <a href="#experience">Internship</a>
            <a href="#teaching">Teaching</a>
          </nav>

          <div className="sidebar-note">
            <h2>Affiliation</h2>
            <p>
              Department of Statistics and Operations Research
              <br />
              UNC Chapel Hill
            </p>
          </div>
        </aside>

        <div className="content">
          <section id="education">
            <h2>Education</h2>
            <div className="entry">
              <div>
                <h3>University of North Carolina at Chapel Hill</h3>
                <p>Ph.D. in Statistics and Operations Research</p>
              </div>
              <p className="date">2023–2028</p>
            </div>
            <div className="entry">
              <div>
                <h3>Tsinghua University</h3>
                <p>B.S. in Pure and Applied Mathematics; Minor in Statistics</p>
              </div>
              <p className="date">2019–2023</p>
            </div>
          </section>

          <section id="research">
            <h2>Research Interests</h2>
            <ul className="interest-list">
              <li>Graph and network alignment</li>
              <li>Brain connectivity registration</li>
              <li>Machine learning</li>
            </ul>
          </section>

          <section id="publications">
            <h2>Publications</h2>
            <ol className="publication-list">
              {publications.map((publication) => (
                <li key={publication.arxiv}>
                  <div>
                    <span className="publication-title">
                      {publication.title}.
                    </span>{" "}
                    <a
                      href={publication.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${publication.title}, arXiv ${publication.arxiv}`}
                    >
                      [arXiv]
                    </a>
                  </div>
                  <span className="publication-year">{publication.year}</span>
                </li>
              ))}
            </ol>
          </section>

          <section id="experience">
            <h2>Internship Experience</h2>
            <div className="entry">
              <div>
                <h3>DoorDash</h3>
                <p>Machine Learning Engineer Intern, Ads Economics Team</p>
              </div>
              <p className="date">May 2026–Present</p>
            </div>
          </section>

          <section id="teaching">
            <h2>Teaching</h2>
            <div className="entry">
              <div>
                <h3>Teaching Assistant</h3>
                <p>University of North Carolina at Chapel Hill</p>
              </div>
            </div>
            <div className="course-list" aria-label="Courses taught">
              {courses.map((course) => (
                <span key={course}>{course}</span>
              ))}
            </div>
          </section>
        </div>
      </div>

      <footer>
        <p>
          Yang Xiang · <a href="mailto:xya@unc.edu">xya@unc.edu</a>
        </p>
      </footer>
    </main>
  );
}
