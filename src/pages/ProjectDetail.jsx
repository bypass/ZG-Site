import '@google/model-viewer'
import { asset } from '../utils.js'

export default function ProjectDetail({ project, onBack }) {
  return (
    <>
      <button className="back-link" onClick={onBack}>&larr; Back to Projects</button>
      <h2 style={{ fontSize: '1.9rem', marginBottom: '8px' }}>{project.title}</h2>
      <div className="detail-meta">{project.meta} &middot; {project.tag}</div>
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
      <ul className="detail-list">
        {project.bullets.map((b, i) => <li key={i}>{b}</li>)}
      </ul>
    </>
  )
}
