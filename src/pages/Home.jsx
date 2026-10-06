import Photo from '../components/Photo.jsx'
import { SKILLS } from '../data/content.js'

export default function Home() {
  return (
    <>
      <section className="hero-row">
        <div className="hero-text">
          <div className="eyebrow">Morgan State University - Computer Science</div>
          <h1 className="hero">Zori Greene</h1>
          <p className="lead">Welcome to the site. feel free to look around at some projects</p>
        </div>
        <Photo variant="photo-hero" src="/images/cover.jpg" alt="Zori Greene" />
      </section>

      <div className="skills home-skills">
        {SKILLS.map((s) => <span key={s}>{s}</span>)}
      </div>

      <hr className="divider" />

      <section className="intro-section">
        <div>
          <div className="section-kicker">A little about me</div>
          <h2>Curious, creative, and always building.</h2>
        </div>
        <p className="bio">
          I’m a computer science student who enjoys turning ideas into thoughtful,
          useful digital experiences. I like learning new tools, experimenting with
          projects, and finding the details that make a website feel personal.
        </p>
      </section>

      <section className="about-card">
        <div className="photo photo-secondary">
          <img src="/images/skate thing.jpg" alt="Zori Greene skating" />
        </div>
        <div className="about-copy">
          <div className="section-kicker">Beyond the screen</div>
          <p>
            Outside of staring at a screen all day I also love to skateboard and make music, film, and edit videos.
          </p>
          <div className="section-kicker additional-skills-kicker">Additional Skills</div>
          <div className="skills home-skills-inline">
            {['Blender', 'FL Studio', 'Adobe Premiere'].map((skill) => <span key={skill}>{skill}</span>)}
          </div>
        </div>
      </section>

      <hr className="divider" />

      <section className="favorite-project">
        <div className="project-heading">
          <div>
            <div className="section-kicker">01 / Favorite project</div>
            <h2>Featured Project</h2>
          </div>
          <span className="project-label">Selected work</span>
        </div>

        <div className="project-feature">
          <div className="project-feature-image">
            <img src="/images/IMG_0116.jpg" alt="Featured project" className="project-feature-image-photo" />
          </div>
          <div className="project-feature-copy">
            <div className="project-meta">Blender · Arduino · C</div>
            <h3>3D Printed Tricopter</h3>
            <p>
              My favorite project to date. Currently still in progress, but it flies!
            </p>
            <button className="learn-more">View project →</button>
          </div>
        </div>
      </section>
    </>
  )
}
