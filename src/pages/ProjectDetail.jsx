import '@google/model-viewer'
import { asset } from '../utils.js'

export default function ProjectDetail({ project, onBack }) {
  return (
    <>
      <button className="back-link" onClick={onBack}>&larr; Back to Projects</button>
      <h2 style={{ fontSize: '1.9rem', marginBottom: '8px' }}>{project.title}</h2>
      <div className="detail-meta">{project.meta}</div>

      <section className="project-detail-section" aria-labelledby="project-overview-heading">
        <h3 id="project-overview-heading">Project Description</h3>
        <p>{project.summary}</p>
        {project.model && (
          <div className="model-viewer-wrap">
            <model-viewer
              src={asset(project.model)}
              alt={project.title + ' 3D model'}
              camera-controls
              disable-zoom
              disable-pan
              interaction-prompt="none"
              shadow-intensity="1"
              shadow-softness="0.5"
              tone-mapping="neutral"
              environment-image="neutral"
              exposure="0.1"
              camera-orbit="0deg 75deg 60%"
              style={{ backgroundColor: 'transparent' }}
            ></model-viewer>
          </div>
        )}
        {project.images?.length > 0 && (
          <div className="project-images">
            {project.images.map((image, index) => (
              <img key={`image-${index}`} src={asset(image.src)} alt={image.alt} />
            ))}
          </div>
        )}
      </section>

      <section className="project-detail-section" aria-labelledby="project-stack-heading">
        <h3 id="project-stack-heading">Stack</h3>
        <div className="skills project-stack">
          {project.tag.split('·').map((technology) => (
            <span key={technology.trim()}>{technology.trim()}</span>
          ))}
        </div>
      </section>

      <section className="project-detail-section" aria-labelledby="project-future-work-heading">
        <h3 id="project-future-work-heading">Future Work</h3>
        <ul className="detail-list">
          {project.bullets.map((bullet, index) => <li key={index}>{bullet}</li>)}
        </ul>
      </section>
    </>
  )
}
