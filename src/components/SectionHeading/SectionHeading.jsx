import styles from './SectionHeading.module.css'

export default function SectionHeading({ eyebrow, title, text }) {
  return (
    <header className={styles.heading}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h2 className={styles.title}>{title}</h2>
      {text ? <p className={styles.text}>{text}</p> : null}
    </header>
  )
}
