import styles from './PageIntro.module.css'

export default function PageIntro({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <header className={styles.intro}>
      <div className="wrap">
        <h1>{title}</h1>
        <p className="lead">{children}</p>
      </div>
    </header>
  )
}
