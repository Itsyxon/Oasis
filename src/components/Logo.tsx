export default function Logo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" aria-hidden="true">
      <circle cx="20" cy="20" r="19" fill="#1e3a2f" />
      <path d="M20 7 12 21h5l-6 9h18l-6-9h5Z" fill="#d9a441" />
      <path d="M8 31.5c3 0 3-1.6 6-1.6s3 1.6 6 1.6 3-1.6 6-1.6 3 1.6 6 1.6" fill="none" stroke="#b9d0d0" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}
