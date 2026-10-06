import { PROJECTS } from '../data/projects.js'

export default function Projects({ onSelect }) {
  return (
    <>
      <h2 style={{ fontSize: '1.9rem', marginBottom: '10px' }}>Projects</h2>
      <p className="lead" style={{ marginBottom: '8px' }}>A few things I've built and am still building.</p>
      <hr className="divider" />
      {PROJECTS.map((p, i) => (
        <div className="project" key={p.id}>
          <div>
            <h3>{p.title}</h3>
            <div className="tag">{p.tag}</div>
            <p>{p.summary}</p>
            <button className="learn-more" onClick={() => onSelect(p.id)}>Learn more</button>
          </div>
          <div className="num">0{i + 1}</div>
        </div>
      ))}
    </>
  )
}
