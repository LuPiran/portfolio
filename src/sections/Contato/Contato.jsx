import ContactForm from '../../components/ContactForm/ContactForm'
import SectionHeading from '../../components/SectionHeading/SectionHeading'
import { perfil } from '../../data/conteudo'
import styles from './Contato.module.css'

export default function Contato() {
  return (
    <section id="contato" className={styles.section}>
      <div className={`shell ${styles.grid}`}>
        <div>
          <SectionHeading
            eyebrow="Contato"
            title="Se o trabalho fizer sentido, escreva."
            text="O formulário abre o seu e-mail com a mensagem pronta. Os atalhos ao lado levam ao GitHub, ao LinkedIn e à caixa de entrada."
          />
          <div className={styles.links}>
            {perfil.links.map((link) => {
              const externo = link.href.startsWith('http')
              return (
                <a
                  key={link.id}
                  href={link.href}
                  target={externo ? '_blank' : undefined}
                  rel={externo ? 'noreferrer' : undefined}
                >
                  <strong>{link.rotulo}</strong>
                  <small>{link.valor ?? 'Abrir'}</small>
                </a>
              )
            })}
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  )
}
