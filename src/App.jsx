import Header from './components/Header/Header'
import Rodape from './components/Rodape/Rodape'
import Contato from './sections/Contato/Contato'
import Habilidades from './sections/Habilidades/Habilidades'
import Projetos from './sections/Projetos/Projetos'
import SobreMim from './sections/SobreMim/SobreMim'

export default function App() {
  return (
    <>
      <a className="skip" href="#sobre">
        Ir para o conteúdo
      </a>
      <Header />
      <main>
        <SobreMim />
        <Projetos />
        <Habilidades />
        <Contato />
      </main>
      <Rodape />
    </>
  )
}
