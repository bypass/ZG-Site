import Photo from '../components/Photo.jsx'

export default function About() {
  return (
    <>
      <h2 style={{ fontSize: '1.9rem', marginBottom: '24px' }}>About Me</h2>
      <div className="about-layout">
        <div className="about-text">
          <p>Yoo, I'm Zori Greene, born in Baltimore, MD, and raised between York, PA, and Atlanta, Georgia. Growing up, my father was a freelance web developer. He would show his work from time to time, which led to my growing interest in tech. I started my programming journey with Python, Arduino components, and C# around 12 years old and have since made projects such as a hangman game with Tkinter as the interface, a custom Discord bot for moderation, games, and chat logging, a web scraping tool for notifying users of the latest releases of their favorite manga series, and a custom 3D-printed Tricopter.</p>
          <p>I am currently a computer science student at Morgan State University in my junior year. During my first year, I began working as a researcher at the Human AI-eXperience (HAX) Lab under my former professor, Dr. Naja Mack. At the HAX Lab, I’ve been able to improve and learn new technical and soft skills such as Java, React, Figma, Unity, and public speaking through projects developed for inclusivity using conversational AI.</p>
          <p>Outside of the Lab, I have maintained my Dean's List status during my time here at Morgan State, with a current GPA of 3.95 on a 4.0 scale. For fun, I like to skateboard, play music, exercise, and enjoy nature. I have since taken one of my interests and helped solve an issue in my community by founding the MSU Skate Club and serving as the standing president on my campus.</p>
          <p>I am currently looking for an internship as a software developer, ML engineer, or data analyst. I don't just code for a job; I want to code because I love to create. If you asked, I could probably spend 2 hours telling you about projects I’ve always wanted to create lol.</p>
        </div>

        <div className="about-portrait">
          <Photo variant="photo-about" src="/images/funny code thing.jpg" alt="Your name outdoors" width="220" height="260" />
        </div>
      </div>
    </>
  )
}
