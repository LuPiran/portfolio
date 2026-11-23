import { perfil } from '../../data/conteudo'
import styles from './SobreMim.module.css'

export default function SobreMim() {
  return (
    <section id="sobre" className={styles.section}>
      <div className={`shell ${styles.grid}`}>
        <div>
          <p className={styles.eyebrow}>Sobre mim</p>
          <h1 className={styles.name}>{perfil.nome}</h1>
          <p className={styles.role}>
            {perfil.papel} · {perfil.cidade}
          </p>
          <p className={styles.summary}>{perfil.resumo}</p>
          <p className={styles.bio}>{perfil.apresentacao}</p>

          <ul className={styles.facts}>
            {perfil.fatos.map((fato) => (
              <li key={fato.rotulo} className={styles.fact}>
                <span>{fato.rotulo}</span>
                {fato.valor}
              </li>
            ))}
          </ul>

          <div className={styles.contacts}>
            {perfil.links.map((link) => {
              const externo = link.href.startsWith('http')
              return (
                <a
                  key={link.id}
                  href={link.href}
                  target={externo ? '_blank' : undefined}
                  rel={externo ? 'noreferrer' : undefined}
                >
                  {link.rotulo}
                </a>
              )
            })}
          </div>
        </div>

        <figure className={styles.frame}>
          <img src={perfil.foto} alt="Foto de Lucas Piran" />
          <figcaption>Portfólio dos projetos do curso de Java Full Stack.</figcaption>
        </figure>
      </div>
    </section>
  )
}
