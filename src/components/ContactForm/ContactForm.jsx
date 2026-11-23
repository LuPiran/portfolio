import { useState } from 'react'
import styles from './ContactForm.module.css'

const vazio = { nome: '', email: '', mensagem: '' }
const EMAIL = 'lucas13piran@gmail.com'

function validar(dados) {
  const erros = {}
  if (dados.nome.trim().length < 2) erros.nome = 'Diga como prefere ser chamado.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(dados.email)) {
    erros.email = 'Esse e-mail não parece completo.'
  }
  if (dados.mensagem.trim().length < 10) {
    erros.mensagem = 'Escreva pelo menos uma frase.'
  }
  return erros
}

export default function ContactForm() {
  const [dados, setDados] = useState(vazio)
  const [erros, setErros] = useState({})
  const [pronto, setPronto] = useState(false)

  function atualizar(campo) {
    return (evento) => {
      setDados((atual) => ({ ...atual, [campo]: evento.target.value }))
      setPronto(false)
    }
  }

  function enviar(evento) {
    evento.preventDefault()
    const proximos = validar(dados)
    setErros(proximos)
    if (Object.keys(proximos).length > 0) return

    // Não há servidor: o cliente de e-mail abre com a mensagem já escrita.
    const assunto = encodeURIComponent(`Portfólio — mensagem de ${dados.nome.trim()}`)
    const corpo = encodeURIComponent(
      `${dados.mensagem.trim()}\n\n— ${dados.nome.trim()}\n${dados.email.trim()}`,
    )
    window.location.href = `mailto:${EMAIL}?subject=${assunto}&body=${corpo}`
    setPronto(true)
  }

  return (
    <form className={styles.form} onSubmit={enviar} noValidate>
      <label className={styles.field}>
        <span>Nome</span>
        <input
          name="nome"
          autoComplete="name"
          value={dados.nome}
          aria-invalid={Boolean(erros.nome)}
          className={erros.nome ? styles.invalid : undefined}
          onChange={atualizar('nome')}
        />
        {erros.nome ? <small className={styles.error}>{erros.nome}</small> : null}
      </label>

      <label className={styles.field}>
        <span>E-mail</span>
        <input
          name="email"
          type="email"
          autoComplete="email"
          value={dados.email}
          aria-invalid={Boolean(erros.email)}
          className={erros.email ? styles.invalid : undefined}
          onChange={atualizar('email')}
        />
        {erros.email ? <small className={styles.error}>{erros.email}</small> : null}
      </label>

      <label className={styles.field}>
        <span>Mensagem</span>
        <textarea
          name="mensagem"
          value={dados.mensagem}
          aria-invalid={Boolean(erros.mensagem)}
          className={erros.mensagem ? styles.invalid : undefined}
          onChange={atualizar('mensagem')}
        />
        {erros.mensagem ? <small className={styles.error}>{erros.mensagem}</small> : null}
      </label>

      <button className={styles.submit} type="submit">
        Enviar mensagem
      </button>
      {pronto ? (
        <p className={styles.success} role="status">
          O e-mail foi preparado no seu aplicativo. Se ele não abrir, escreva para {EMAIL}.
        </p>
      ) : null}
    </form>
  )
}
