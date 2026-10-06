import { LINKS } from '../data/content.js'

export default function Footer() {
  return (
    <footer>
      <div className="contact-row" style={{ justifyContent: 'center' }}>
        {LINKS.map((l) => (
          <a key={l.label} href={l.href}>{l.label}</a>
        ))}
      </div>
    </footer>
  )
}
