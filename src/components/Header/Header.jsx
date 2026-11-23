import { useEffect, useState } from 'react'
import { perfil, secoes } from '../../data/conteudo'
import { useActiveSection } from '../../hooks/useActiveSection'
import styles from './Header.module.css'

export default function Header() {
  const ativa = useActiveSection()
  const [aberto, setAberto] = useState(false)

  useEffect(() => {
    document.body.style.overflow = aberto ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [aberto])

  return (
    <header className={styles.header}>
      <div className={`shell ${styles.bar}`}>
        <a className={styles.brand} href="#sobre" onClick={() => setAberto(false)}>
          <span className={styles.mark} aria-hidden="true">
            LP
          </span>
          <span className={styles.brandName}>{perfil.nome}</span>
        </a>

        <button
          className={styles.menuButton}
          type="button"
          aria-expanded={aberto}
          aria-controls="menu"
          onClick={() => setAberto((valor) => !valor)}
        >
          {aberto ? 'Fechar' : 'Menu'}
        </button>

        <nav id="menu" className={`${styles.nav} ${aberto ? styles.open : ''}`}>
          {secoes.map((secao) => (
            <a
              key={secao.id}
              className={`${styles.link} ${ativa === secao.id ? styles.active : ''}`}
              href={`#${secao.id}`}
              aria-current={ativa === secao.id ? 'true' : undefined}
              onClick={() => setAberto(false)}
            >
              {secao.rotulo}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
