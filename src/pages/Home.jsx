import Photo from '../components/Photo.jsx'
import { LINKS } from '../data/content.js'
import { asset } from '../utils.js'

export default function Home({ onViewProject }) {
  return (
    <>
      <section className="hero-row">
        <div className="hero-text">
          <div className="eyebrow">Morgan State University - Computer Science</div>
          <h1 className="hero">Zori Greene</h1>
          <p className="lead">Developing, researching, learning</p>
          <div className="contact-row hero-contact">
            {LINKS.map((link) => (
              <a
                key={link.label}
                href={link.label === 'Email' ? `mailto:${link.href}` : link.href}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <Photo variant="photo-hero" src="/images/cover.jpg" alt="Zori Greene" />
      </section>

      <hr className="divider-top" />

      <section className="work-exp">
        <div className="work-exp-item">
          <div className="section-kicker">01 / Experience</div>
          <h2>Work Experience</h2>
          <div className="work-exp-list">
            <article className="work-exp-content">
              <div className="hax-logo-wrap">
                <img className="work-exp-logo" src={asset('images/HAX Lab logo.png')} alt="HAX Lab logo" />
              </div>
              <div>
                <h3>Human AI-eXperience (HAX) Lab, Morgan State University</h3>
                <p className="work-exp-org">Researcher</p>
              </div>
            </article>
            <article className="work-exp-content">
              <div className="cn-logo-wrap">
                <img className="work-exp-logo" src={asset('images/Code Ninjas Logo.jpg')} alt="Code Ninjas logo" />
              </div>
              <div>
                <h3>Code Ninjas</h3>
              </div>
            </article>
          </div>
        </div>
      </section>

      <hr className="divider" />

      <section className="favorite-project">
        <div className="project-heading">
          <div>
            <div className="section-kicker">02 / Favorite project</div>
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
              3D printed tricopter designed in Blender and run using a Teensy 4.0 powered by Arduino software. Built for long distance and high flight times.
            </p>
            <button
              className="learn-more"
              onClick={() => onViewProject('3d-printed-tricopter')}
            >
              View project →
            </button>
          </div>
        </div>
      </section>

      <hr className="divider" />

      <section className="about-card">
        <div className="about-heading">
          <div className="section-kicker">
            Me Beyond the the screen
            </div>
          <h2>Curious, creative, and still building.</h2>
          <div className="about-copy about-card-copy">
            <p>
              Outside of staring at a screen all day I also love to skateboard and make music, film, and edit videos.
            </p>
          </div>
        </div>
        <div className="photo photo-secondary">
          <video src="\Videos\ATL DAYS preview - Trim.mp4" alt="ATL Days" />
        </div>
      </section>
    </>
  )
}
