import styles from './ProjectCard.module.css'

export default function ProjectCard({ projeto, invertido = false }) {
  return (
    <article className={`${styles.card} ${invertido ? styles.reverse : ''}`}>
      <div className={styles.copy}>
        <p className={styles.context}>{projeto.contexto}</p>
        <h3 className={styles.title}>{projeto.titulo}</h3>
        <p className={styles.description}>{projeto.descricao}</p>
        <ul className={styles.tags}>
          {projeto.tecnologias.map((tecnologia) => (
            <li key={tecnologia}>{tecnologia}</li>
          ))}
        </ul>
        <div className={styles.actions}>
          <a href={projeto.repositorio} target="_blank" rel="noreferrer">
            Repositório
          </a>
          {projeto.demonstracao ? (
            <a href={projeto.demonstracao} target="_blank" rel="noreferrer">
              Demonstração
            </a>
          ) : null}
        </div>
      </div>
      <figure className={styles.figure}>
        <img src={projeto.imagem} alt={`Tela do projeto ${projeto.titulo}`} />
      </figure>
    </article>
  )
}
