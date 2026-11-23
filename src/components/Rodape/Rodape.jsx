import styles from './Rodape.module.css'

const ano = new Date().getFullYear()

export default function Rodape() {

  return (
    <footer className={styles.footer}>
      <div className={`shell ${styles.row}`}>
        <p>Lucas Piran · {ano}</p>
        <a href="https://github.com/LuPiran/portfolio">Código deste portfólio</a>
      </div>
    </footer>
  )
}
