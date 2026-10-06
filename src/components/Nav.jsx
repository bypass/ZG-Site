import { PAGES, SITE_NAME } from '../data/content.js'

export default function Nav({ page, onNavigate }) {
  return (
    <nav>
      <div className="brand">{SITE_NAME}</div>
      <ul className="navlinks">
        {PAGES.map((p) => (
          <li key={p}>
            <button
              className={p === page ? 'active' : ''}
              aria-current={p === page ? 'page' : undefined}
              onClick={() => onNavigate(p)}
            >
              {p}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
