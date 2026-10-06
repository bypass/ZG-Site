import { asset } from '../utils.js'
import { SKILLS } from '../data/content.js'

export default function Resume() {
  return (
    <>
      <h2 style={{ fontSize: '1.9rem', marginBottom: '10px' }}>Resume</h2>
      <section className="resume-section" aria-labelledby="resume-experience-heading">
        <h3 id="resume-experience-heading">Work Experience</h3>
        <article className="resume-experience-item">
          <h4>Researcher</h4>
          <p className="resume-experience-org">Human AI-eXperience (HAX) Lab, Morgan State University</p>
          <p>Contributed to inclusivity-focused projects using conversational AI. Built experience with Java, React, Figma, and Unity.</p>
        </article>
      </section>
      <object className="pdf-viewer" data={asset('resume.pdf')} type="application/pdf" aria-label="Resume PDF">
        <p style={{ padding: '24px' }}>
          Your browser can't preview PDFs here. <a href={asset('resume.pdf')}>Open the resume</a> instead.
        </p>
      </object>
      <section className="resume-section" aria-labelledby="resume-skills-heading">
        <h3 id="resume-skills-heading">Skills</h3>
        <ul className="resume-skills">
          {[...SKILLS, 'Java', 'Figma'].map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </section>
    </>
  )
}
