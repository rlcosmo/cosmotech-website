# CosmoTech Solutions — Website

Site institucional e portfólio técnico independente de qualquer laboratório AWS.

## Executar localmente

Requisitos: Node.js 20.19+ ou 22.12+.

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Arquivos publicados: `dist/`.

## Publicar gratuitamente no Cloudflare Pages

1. Crie o repositório `rlcosmo/cosmotech-website` no GitHub e envie estes arquivos (não envie a pasta `node_modules`).
2. Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect to Git.
3. Selecione o repositório e a branch `main`.
4. Build command: `npm run build`; build output directory: `dist`.
5. Depois do primeiro deploy, em Custom domains adicione `www.cosmotechsolutions.com.br` e `cosmotechsolutions.com.br` seguindo as instruções da Cloudflare. Não substitua registros DNS de outros serviços sem conferir.

## Atualizar conteúdo

Edite `src/main.tsx` (projetos, experiências, links) e `src/style.css` (design). Cada push em `main` inicia novo deploy após conectar o GitHub ao Pages.

## Segurança e custos

- Site estático: sem backend, sem banco, sem tokens, sem secrets e sem integração com laboratório AWS.
- Cloudflare Pages Free e GitHub Free atendem à hospedagem inicial; domínio Registro.br continua sujeito à renovação.
- Não adicionar dados privados, nomes de clientes em incidentes confidenciais, URLs internas ou credenciais.
- A certificação AWS SAA é descrita com validade encerrada em 2025; atualizar apenas após confirmação de renovação.
- Confirmar a redação pública de experiências e cases antes de divulgar o domínio.
