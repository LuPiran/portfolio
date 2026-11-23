const base = import.meta.env.BASE_URL

export const perfil = {
  nome: 'Lucas Piran',
  papel: 'Desenvolvedor Full Stack',
  cidade: 'Barueri, SP',
  foto: `${base}lucas.jpg`,
  resumo:
    'Construo interfaces em React e levo o mesmo cuidado para o que fica por baixo: dados no navegador, entrega contínua e páginas que carregam rápido.',
  apresentacao:
    'Bacharel em Sistemas de Informação pela FIAP e aluno de Java Full Stack na EBAC. Este portfólio junta os exercícios em que a tecnologia muda de propósito: um app com testes e deploy automático, uma PWA que abre offline, uma página medida no Lighthouse e três aplicações conversando por Module Federation.',
  fatos: [
    { rotulo: 'Formação', valor: 'Sistemas de Informação · FIAP' },
    { rotulo: 'Curso', valor: 'Java Full Stack · EBAC' },
    { rotulo: 'Foco', valor: 'React, Java e interfaces responsivas' },
  ],
  links: [
    { id: 'github', rotulo: 'GitHub', href: 'https://github.com/LuPiran' },
    {
      id: 'linkedin',
      rotulo: 'LinkedIn',
      href: 'https://www.linkedin.com/in/lucas-piran-3b897829a/',
    },
    {
      id: 'email',
      rotulo: 'E-mail',
      href: 'mailto:lucas13piran@gmail.com',
      valor: 'lucas13piran@gmail.com',
    },
  ],
}

export const secoes = [
  { id: 'sobre', rotulo: 'Sobre mim' },
  { id: 'projetos', rotulo: 'Projetos' },
  { id: 'habilidades', rotulo: 'Habilidades' },
  { id: 'contato', rotulo: 'Contato' },
]

export const projetos = [
  {
    id: 'lista-de-compras',
    titulo: 'Lista de Compras',
    contexto: 'CI/CD com GitHub Actions',
    descricao:
      'Lista em React que soma a quantidade quando o mesmo item ainda está pendente, marca o que já foi comprado e guarda o estado no navegador. No push da main, o Actions roda lint, testes e build e publica o site sozinho.',
    tecnologias: ['React', 'TypeScript', 'Vite', 'Vitest', 'GitHub Actions'],
    imagem: `${base}projetos/lista-de-compras.jpg`,
    repositorio: 'https://github.com/LuPiran/lista-de-compras',
    demonstracao: 'https://lupiran.github.io/lista-de-compras/',
  },
  {
    id: 'diario-de-bordo',
    titulo: 'Diário de Bordo',
    contexto: 'PWA sem framework',
    descricao:
      'Registro do dia com título, descrição e data. As entradas continuam depois de recarregar e sem internet. O manifest permite instalar na tela inicial e o service worker guarda a página, o estilo e o script.',
    tecnologias: ['HTML', 'CSS', 'JavaScript', 'Service Worker', 'localStorage'],
    imagem: `${base}projetos/diario-de-bordo.jpg`,
    repositorio: 'https://github.com/LuPiran/diario-de-bordo',
    demonstracao: 'https://lupiran.github.io/diario-de-bordo/',
  },
  {
    id: 'catalogo-da-feira',
    titulo: 'Catálogo da Feira',
    contexto: 'Performance medida no Lighthouse',
    descricao:
      'Catálogo estático usado para comparar o antes e o depois. Trocar JPEG grande por WebP no tamanho de exibição, tirar o script legado e minificar a página levou a nota de 75 para 99. O LCP caiu de 16,8 s para 2,3 s.',
    tecnologias: ['HTML', 'CSS', 'WebP', 'Lighthouse', 'Minificação'],
    imagem: `${base}projetos/catalogo-da-feira.jpg`,
    repositorio: 'https://github.com/LuPiran/otimizacao-performance',
    demonstracao: 'https://lupiran.github.io/otimizacao-performance/',
  },
  {
    id: 'pedidos',
    titulo: 'Pedidos em micro frontends',
    contexto: 'Module Federation com Next.js',
    descricao:
      'Três aplicações no mesmo monorepo. O container carrega cardápio e pedido com React.lazy. O cardápio só habilita “Adicionar ao pedido” quando o outro micro avisa que o listener está pronto — o clique no meio do carregamento não confirma um pedido vazio.',
    tecnologias: ['Next.js', 'React', 'Module Federation', 'Webpack'],
    imagem: `${base}projetos/pedidos.jpg`,
    repositorio: 'https://github.com/LuPiran/pedidos-microfrontends',
  },
]

export const habilidades = [
  {
    id: 'frontend',
    titulo: 'Front-end',
    itens: [
      'React',
      'JavaScript',
      'TypeScript',
      'HTML e CSS',
      'CSS Modules',
      'Vite',
      'Next.js',
      'Layout responsivo',
    ],
  },
  {
    id: 'plataforma',
    titulo: 'Plataforma web',
    itens: [
      'PWA',
      'Service Worker',
      'Module Federation',
      'Performance',
      'Lighthouse',
      'WebP',
    ],
  },
  {
    id: 'entrega',
    titulo: 'Qualidade e entrega',
    itens: ['Git', 'GitHub Actions', 'Vitest', 'ESLint', 'Componentização', 'Deploy'],
  },
  {
    id: 'fundamentos',
    titulo: 'Fundamentos',
    itens: ['Java', 'Node.js', 'APIs REST', 'SQL', 'Hooks e props'],
  },
]
