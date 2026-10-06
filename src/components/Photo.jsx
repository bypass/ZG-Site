function PersonIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
    </svg>
  )
}

export default function Photo({ variant, src, alt }) {
  return (
    <div className={'photo ' + variant}>
      <img src={src} alt={alt} />
    </div>
  )
}
