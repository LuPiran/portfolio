import ProjectCard from '../../components/ProjectCard/ProjectCard'
import SectionHeading from '../../components/SectionHeading/SectionHeading'
import { projetos } from '../../data/conteudo'
import styles from './Projetos.module.css'

export default function Projetos() {
  return (
    <section id="projetos" className={styles.section}>
      <div className="shell">
        <SectionHeading
          eyebrow="Projetos"
          title="Quatro provas, quatro jeitos de construir."
          text="Cada exercício do curso usa um conjunto diferente de ferramentas. Os links abrem o código e, quando existe, a versão publicada."
        />
        <div className={styles.list}>
          {projetos.map((projeto, indice) => (
            <ProjectCard key={projeto.id} projeto={projeto} invertido={indice % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
