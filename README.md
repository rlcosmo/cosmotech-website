# CosmoTech Solutions — Site oficial

**URL canônica obrigatória:** https://www.cosmotechsolutions.com.br/

Repositório independente dos laboratórios AWS. Site estático React + TypeScript + Vite, publicado gratuitamente pelo Cloudflare Pages, sem backend, EKS, banco de dados ou recursos pagos.

## Desenvolvimento local

Node.js compatível com Vite 7 (20.19+ ou 22.12+):

```bash
npm install
npm run dev
npm run build
```

## Hospedagem gratuita — Cloudflare Pages

1. No dashboard Cloudflare, acesse **Workers & Pages** e crie um projeto **Pages** conectado ao GitHub.
2. Escolha `rlcosmo/cosmotech-website`, branch de produção `main`.
3. Framework preset: **Vite**; build command: `npm run build`; output directory: `dist`.
4. Aguarde o primeiro deploy e valide a URL temporária `*.pages.dev`.
5. Em **Pages → Custom domains → Set up a domain**, adicione **www.cosmotechsolutions.com.br**. Se o DNS estiver no mesmo Cloudflare, a configuração CNAME poderá ser criada automaticamente.
6. Valide HTTPS no domínio com WWW. O endereço sem WWW (`cosmotechsolutions.com.br`) deve redirecionar permanentemente (301) para **https://www.cosmotechsolutions.com.br/**. Configure em **Rules → Redirect Rules** (padrão wildcard `https://cosmotechsolutions.com.br/*` → `https://www.cosmotechsolutions.com.br/${1}`, status 301, preservando query string). Garanta que o hostname raiz possua registro DNS proxied pela Cloudflare para que a regra seja aplicada. Se já existir um serviço no apex, revise antes de alterá-lo.
7. Configure também redirecionamento de HTTP para HTTPS, se ainda não houver.

O arquivo `index.html` possui canonical e Open Graph com WWW; `public/sitemap.xml` e `public/robots.txt` também usam WWW.

**Importante:** conectar o GitHub pelo Cloudflare exige autorização no painel da sua conta; o código sozinho não altera DNS nem ativa a hospedagem.

## Atualizações

- `src/main.tsx`: textos, projetos e links.
- `src/style.css`: layout e responsividade.
- `public/`: favicon, robots e sitemap.

Cada push na `main` pode disparar novo deploy após ativação da integração Cloudflare Pages.

## Segurança

Não versionar senhas, arquivos .env, dados internos ou credenciais. Projetos do laboratório AWS são **documentação e portfólio**, sem integração ou disponibilidade operacional. Não expor incidentes confidenciais de clientes. Revisar datas de certificações antes da divulgação.
