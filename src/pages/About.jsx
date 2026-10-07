import Photo from '../components/Photo.jsx'

export default function About() {
  return (
    <>
      <h2 style={{ fontSize: '1.9rem', marginBottom: '24px' }}>About Me</h2>
      <div className="about-layout">
        <div className="about-text">
          <p>Yoo I’m Zori Greene, a computer science student at Morgan State University with a passion for technology and creating. I started programming around age 12 with Python, Arduino, and C#, and have since built projects ranging from games and Discord bots to web-scraping tools and a custom 3D-printed tricopter.</p>
          <p>At Morgan State, I’m a junior and researcher at the Human AI-eXperience (HAX) Lab, where I’ve developed technical and communication skills through inclusive conversational AI projects using Java, React, Figma, and Unity. I’ve also maintained Dean’s List status with a 3.95 GPA and founded the MSU Skate Club, where I serve as president.</p>
          <p>Outside of starring at a screen, I enjoy skateboarding, music, exercise, and nature. I’m currently seeking opportunities as a software developer, ML engineer, or data analyst. For me, coding isn’t just a career it’s a way to create, explore ideas, and bring projects to life.</p>
        </div>

        <div className="about-portrait">
          <Photo variant="photo-about" src="/images/funny code thing.jpg" alt="Your name outdoors" width="260" height="300" />
        </div>
      </div>
    </>
  )
}
