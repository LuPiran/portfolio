import SectionHeading from '../../components/SectionHeading/SectionHeading'
import { habilidades } from '../../data/conteudo'
import styles from './Habilidades.module.css'

export default function Habilidades() {
  return (
    <section id="habilidades" className={styles.section}>
      <div className="shell">
        <SectionHeading
          eyebrow="Habilidades"
          title="O que os projetos já exercitam."
          text="Tecnologias usadas de verdade nos exercícios, agrupadas pelo tipo de trabalho."
        />
        <div className={styles.grid}>
          {habilidades.map((grupo) => (
            <article key={grupo.id} className={styles.group}>
              <h3>{grupo.titulo}</h3>
              <ul>
                {grupo.itens.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
