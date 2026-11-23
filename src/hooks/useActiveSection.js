import { useEffect, useState } from 'react'
import { secoes } from '../data/conteudo'

// Marca o item do menu da seção que cruza o centro da tela.
export function useActiveSection() {
  const [ativa, setAtiva] = useState(secoes[0].id)

  useEffect(() => {
    const alvos = secoes
      .map((secao) => document.getElementById(secao.id))
      .filter(Boolean)

    const observador = new IntersectionObserver(
      (entradas) => {
        const visivel = entradas
          .filter((entrada) => entrada.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visivel?.target.id) {
          setAtiva(visivel.target.id)
        }
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0.1, 0.25, 0.5] },
    )

    alvos.forEach((alvo) => observador.observe(alvo))
    return () => observador.disconnect()
  }, [])

  return ativa
}
