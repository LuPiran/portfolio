# Portfólio — Lucas Piran

Portfólio em React do curso de Java Full Stack da EBAC. A página reúne apresentação, projetos, habilidades e contato, com navegação entre as seções e layout para celular e desktop. O estilo fica em CSS Modules, um arquivo por componente.

**Versão online:** https://lupiran.github.io/portfolio/

## Projetos apresentados

| Projeto | O que mostra | Código | Demonstração |
| --- | --- | --- | --- |
| Lista de Compras | React, TypeScript, testes e pipeline que publica no GitHub Pages | [repositório](https://github.com/LuPiran/lista-de-compras) | [site](https://lupiran.github.io/lista-de-compras/) |
| Diário de Bordo | PWA com service worker, instalação e dados no aparelho | [repositório](https://github.com/LuPiran/diario-de-bordo) | [site](https://lupiran.github.io/diario-de-bordo/) |
| Catálogo da Feira | Performance no Lighthouse, de 75 para 99 | [repositório](https://github.com/LuPiran/otimizacao-performance) | [site](https://lupiran.github.io/otimizacao-performance/) |
| Pedidos em micro frontends | Três apps Next.js ligados por Module Federation | [repositório](https://github.com/LuPiran/pedidos-microfrontends) | roda local, nas portas 3000, 3001 e 3002 |

## Como rodar localmente

Requer Node.js 20 ou mais recente.

```bash
npm install
npm run dev
```

Abra http://localhost:5173. O formulário de contato valida os campos e abre o aplicativo de e-mail com a mensagem preenchida.

```bash
npm run lint
npm run build
npm run preview
```

O build usa a base `/portfolio/`, o caminho do GitHub Pages. O `preview` serve essa versão de produção.

## Publicação

O branch `main` guarda o código. O branch `gh-pages` guarda a pasta gerada por `npm run build`, e o GitHub Pages publica esse branch em https://lupiran.github.io/portfolio/.
